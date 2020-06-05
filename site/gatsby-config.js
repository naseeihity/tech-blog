module.exports = {
  siteMetadata: {
    title: `New Blog`,
    subTitle: [`To Be A Hero Or`, `Be Water My Friend`],
    keywords: ["theme-demo", "blog"],
    description: `This is a new blog.`,
    author: `@authorName`,
    siteUrl: "https://siteUrl",
    gitTalk: {
      id: "75ea2191c8da60f43dca",
      secret: "ab7f0489b457f11b193d94d752a01a591c73fcdb",
      repo: "comments",
      owner: "naseeihity",
    },
  },
  plugins: [
    {
      resolve: `gatsby-theme-minimal`,
      options: {
        contentPath: "content",
        basePath: "/",
      },
    },
  ],
};
