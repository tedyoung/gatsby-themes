const { paginate } = require("gatsby-awesome-pagination")
const slugify = require("slugify")
const fs = require("fs")

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  const contentPath = themeOptions.contentPath || "content"

  // Check if content directory exists.
  if (!fs.existsSync(contentPath)) {
    reporter.warn(`The ${contentPath} directory is missing. Creating it now...`)
    fs.mkdirSync(contentPath)
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Post implements Node @dontInfer {
      id: ID!
      title: String!
      date: Date! @dateformat
      excerpt(pruneLength: Int = 150): String
      slug: String!
      body: String!
      image: File @fileByRelativePath
      caption: String
      tags: [String]
    }
    
    type Page implements Node @dontInfer {
      id: ID!
      title: String!
      excerpt: String
      slug: String!
      body: String!
    }
  `)
}

// Helper to resolve mdx fields.
const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  return await resolver(mdxNode, args, context, {
    fieldName,
  })
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Post: {
      body: {
        resolve: mdxResolverPassthrough("body"),
      },
    },
    Page: {
      body: {
        resolve: mdxResolverPassthrough("body"),
      },
    },
  })
}

exports.onCreateNode = async ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  if (node.internal.type !== "Mdx") {
    return
  }

  const parent = getNode(node.parent)
  const nodeTypes = {
    post: "Post",
    page: "Page",
  }
  const nodeType = nodeTypes[parent.sourceInstanceName]

  // Create Post nodes from Mdx nodes.
  if (nodeType) {
    actions.createNode({
      id: createNodeId(`${nodeType}-${node.id}`),
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      excerpt: node.frontmatter.excerpt,
      slug: node.frontmatter.slug
        ? node.frontmatter.slug
        : slugify(parent.relativeDirectory),
      image: node.frontmatter.image,
      caption: node.frontmatter.caption,
      tags: node.frontmatter.tags,
      parent: node.id,
      internal: {
        type: nodeType,
        contentDigest: createContentDigest(node.internal.contentDigest),
      },
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allSite {
        nodes {
          siteMetadata {
            startUrl
            postsPerPage
          }
        }
      }
      allPage {
        pages: nodes {
          id
          title
          slug
          excerpt
          body
        }
      }
      allPost(sort: { fields: date, order: DESC }) {
        posts: nodes {
          id
          title
          date(formatString: "MMMM DD, YYYY")
          excerpt
          body
          slug
          tags
          caption
          image {
            full: childImageSharp {
              fluid(maxWidth: 960, maxHeight: 540, quality: 100) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
            thumbnail: childImageSharp {
              fluid(
                maxWidth: 456
                maxHeight: 325
                cropFocus: CENTER
                quality: 100
              ) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
            fixed: childImageSharp {
              fixed(width: 960, quality: 100) {
                src
              }
            }
          }
        }
      }
      allTag: allMdx {
        tags: group(field: frontmatter___tags) {
          name: fieldValue
          count: totalCount
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(`There was an error fetching content.`, result.errors)
  }

  const { posts } = result.data.allPost
  const { pages } = result.data.allPage
  const { siteMetadata } = result.data.allSite.nodes[0]
  const { tags } = result.data.allTag

  // Create paginated blog pages
  paginate({
    createPage,
    items: posts,
    itemsPerPage: siteMetadata.postsPerPage || 5,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/" : "/page"),
    component: require.resolve("./src/templates/posts.template.js"),
    context: {
      total: posts.length,
    },
  })

  // Create post pages.
  posts.forEach(node => {
    actions.createPage({
      path: node.slug,
      component: require.resolve("./src/templates/post.template.js"),
      context: {
        post: node,
      },
    })
  })

  // Create pages.
  pages.forEach(node => {
    const isFront = siteMetadata.startUrl.replace(/^\/+/, "") === node.slug
    actions.createPage({
      path: isFront ? "/" : node.slug,
      component: require.resolve("./src/templates/page.template.js"),
      context: {
        page: node,
        isFront,
      },
    })
  })

  // Create tag pages.
  tags.forEach(tag => {
    actions.createPage({
      path: `/tags/${slugify(tag.name.toLowerCase())}`,
      component: require.resolve("./src/templates/tag.template.js"),
      context: {
        ...tag,
      },
    })
  })
}
