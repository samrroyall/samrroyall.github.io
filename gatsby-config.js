module.exports = {
  siteMetadata: {
    title: "Sam Royall - Portfolio",
    description: "Sam Royall is a fullstack developer based in Chicago, IL. Sam loves to solve problems with code and is constantly looking for interesting projects and technologies.",
    url: "/",
    image: "static/favicon.ico"
  },
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Roboto Mono",
          "Magda",
        ]
      }
    },
  ],
}
