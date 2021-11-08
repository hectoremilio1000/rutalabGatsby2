module.exports = {
  siteMetadata: {
    siteUrl: "https://www.rutalab.com/",
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
    {
      resolve: "gatsby-plugin-whatshelp",
      options: {
        // facebook: "xxx", // Facebook page ID
        whatsapp: "+52 1 951 102 8474", // WhatsApp number
        // email: "xxx@xxx.com", // Email
        // call: "+52 1 951 102 8474", // Call phone number
        company_logo_url:
          "https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo/logo_sanmateo_final.jpg", // URL of company logo (png, jpg, gif)
        greeting_message: "Hello", // Text of greeting message
        call_to_action: "Call to Action", // Call to action
        button_color: "#b02030", // Color of button
        position: "right", // Position may be 'right' or 'left'
        order: "facebook,whatsapp,call,email", // Order of buttons
        ga: true, // Google Analytics enabled
        branding: false, // Show branding string
        mobile: true, // Mobile version enabled
        desktop: true, // Desktop version enabled
        greeting: true, // Greeting message enabled
        shift_vertical: 0, // Vertical position, px
        shift_horizontal: 0, // Horizontal position, px
        domain: "https://jampierprueba.d8s0msgulza43.amplifyapp.com/", // site domain
        // key: "xxx", // pro-widget key
      },
    },
  ],
};
