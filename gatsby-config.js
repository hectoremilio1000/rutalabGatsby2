module.exports = {
  siteMetadata: {
    siteUrl: "https://www.rutalab.com",
    title: "rutalabwebapp",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RUTALAB`,
        short_name: `RUTALAB`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/logo/logo_rutalab_chico.png`,
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        prismPreset: "night-owl",
        preset: "@theme-ui/preset-funk",
      },
    },
  ],
};
