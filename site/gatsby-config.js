module.exports = {
	siteMetadata: {
		title: `New Blog`,
		subTitle: `Be Water My Friend.`,
		keywords: ['theme-demo', 'blog'],
		description: `This is a new blog.`,
		author: `@authorName`,
		siteUrl: 'https://siteUrl'
	},
	plugins: [
		{
			resolve: `gatsby-theme-minimal`,
			options: {
				contentPath: 'content',
				basePath: '/'
			}
		}
	]
}
