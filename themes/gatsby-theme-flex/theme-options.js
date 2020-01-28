const merge = require(`deepmerge`)

module.exports = themeOptions =>
  merge(
    {
      manifest: {
        icon: `assets/images/favicon.png`,
        start_url: `/`,
      },
    },
    themeOptions
  )
