# Phoenix - Gatsby theme
A personal blogging and portfolio theme for Gatsby with great typography and dark mode.

## Features

* MDX - Posts, Pages and Projects
* Tags/Categories
* Dark mode
* Customizable with Tailwind
* Code highlighting with [Prism](https://prismjs.com/)
* RSS feed and SEO

## Installation

`gatsby new phoenix-site arshad/gatsby-starter-phoenix`

## Adding content

### Page
Place your pages inside `content/pages` as follows:

```
  phoenix-site
    ├── content
    │ └── pages
    │     └── about
    │         ├── image.jpg
    │         └── index.mdx
    ├── node_modules
    ├── gatsby-config.js
    └── package.json
```

`content/pages/about/index.mdx:`

```
title: Hello, I'm Nulla Texier
excerpt: Temporibus tenetur eveniet ipsa. Enim eum consequatur magnam. Nulla quaerat est nam consequatur magnam.
```

### Post
Place your blog posts inside `content/posts` as follows:

```
  phoenix-site
    ├── content
    │ └── posts
    │     └── 2019-11-19-slug-for-post
    │         ├── image.jpg
    │         └── index.mdx
    ├── node_modules
    ├── gatsby-config.js
    └── package.json
```

`content/posts/2019-11-19-slug-for-post/index.mdx:`

```
---
title: Mollitia quaerat perspiciatis eaque vel officiis
date: 2018-09-01
excerpt: Nobis et distinctio ipsam officia rem similique. Ipsa facilis doloremque quos culpa similique quidem autem. Expedita doloribus.
image: ./image.jpg
caption: Illustration by <a href="https://illlustrations.co">illlustrations.co</a>
tags: ["nobis", "animi"]
---
Et aliquip labore id minim adipisicing excepteur labore in ex deserunt duis quis cillum in. Sint enim proident incididunt cillum esse sit sunt laboris dolore. Eu qui proident eu ut eiusmod sunt aliquip ut dolor. Ipsum consequat culpa officia dolor.
```

## Projects
Place your projects inside `content/projects` as follows:

```
  phoenix-site
    ├── content
    │ └── projects
    │     └── name-of-project
    │         ├── image.jpg
    │         └── index.mdx
    ├── node_modules
    ├── gatsby-config.js
    └── package.json
```

`content/projects/name-of-project/index.mdx:`

```
---
title: Aspernatur voluptates
excerpt: Quos totam nihil saepe ipsam incidunt. Quo ipsam soluta sapiente. Voluptate voluptates odio tenetur at officiis ratione.
url: https://example.com
image: image.jpg
---
```

## Configuration

The following theme options and configuration is available:

```
// gatsby-config.js
{
  title: `Phoenix.`,
  description: `A free personal blogging theme for Gatsby with great typography and dark mode.`,
  siteUrl: process.env.SITE_URL,
  startUrl: "/",
  postsPerPage: 5,
  icon: `assets/images/icon.png`,
  copyright: `© YYYY Phoenix. All rights reserved.`,
  colors: {
    primary: "#3C64F1",
  },
  fonts: {
    text: ["Open Sans", "Arial", "sans-serif"],
    heading: ["Alegreya Sans", "sans-serif"],
    branding: ["Bowlby One SC", "cursive"],
  },
  menuLinks: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ],
  socialLinks: [
    {
      name: "Twitter",
      url: "https://twitter.com/arshadcn",
      icon: "twitter",
    },
    {
      name: "Github",
      url: "https://github.com/arshad",
      icon: "github",
    },
  ],
}
```

## Need help?

Create an issue [here](https://github.com/arshad/gatsby-theme-phoenix/issues)

