import React from "react"
import Project from "./Project"
import { useStaticQuery, graphql } from "gatsby"

const ProjectList = () => {
  const result = useStaticQuery(graphql`
    {
      allProject(sort: { fields: title, order: ASC }) {
        projects: nodes {
          title
          excerpt
          url
          image {
            full: childImageSharp {
              fluid(
                maxWidth: 960
                maxHeight: 540
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
          }
        }
      }
    }
  `)

  const { projects } = result.allProject

  return (
    projects && (
      <div className="md:flex flex-wrap md:-mx-4">
        {projects.map(project => (
          <div className="md:w-1/2 md:px-4 mb-8 md:mb-12" key={project.id}>
            <Project {...project} />
          </div>
        ))}
      </div>
    )
  )
}

export default ProjectList
