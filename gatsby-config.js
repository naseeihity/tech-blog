module.exports = {
  siteMetadata: {
    title: `B L O G`,
    subTitle: [`To Be A Hero Or`, `Be Water My Friend`],
    keywords: ["Front-End", "Python", "blog"],
    description: `Some old Reocrds`,
    author: `Kevin`,
    siteUrl: "https://www.gaococ.com",
  },
  plugins: [
    {
      resolve: `gatsby-theme-coaco`,
      options: {
        contentPath: "content",
        basePath: "/",
      },
    },
  ],
};
