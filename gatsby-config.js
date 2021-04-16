module.exports = {
  siteMetadata: {
    title: "Mael Guillossou",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/icon.png"
      },
    },
  ],
};
