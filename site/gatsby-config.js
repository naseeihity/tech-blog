module.exports = {
  siteMetadata: {
    title: `BLOG`,
    subTitle: [`To Be A Hero Or`, `Be Water My Friend`],
    keywords: ["Front-End", "Python", "blog"],
    description: `This is a blog.`,
    author: `Kevin`,
    siteUrl: "https://www.gaococ.com",
    gitTalk: {
      id: "75ea2191c8da60f43dca",
      secret: "ab7f0489b457f11b193d94d752a01a591c73fcdb",
      repo: "comments",
      owner: "naseeihity",
    },
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
