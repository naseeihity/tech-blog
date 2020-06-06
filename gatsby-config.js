module.exports = {
  siteMetadata: {
    title: `BLOG`,
    subTitle: [`To Be A Hero Or`, `Be Water My Friend`],
    keywords: ["Front-End", "Python", "blog"],
    description: `This is a blog.`,
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
