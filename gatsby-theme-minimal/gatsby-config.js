const mdxFeed = require('gatsby-plugin-mdx/feed')

module.exports = ({ contentPath = 'content', basePath = '/', trackingId = '' }) => ({
	siteMetadata: {
		title: `WebSite title`,
		sutTitle: 'WebSite subTitle',
		description: `A description of your website.`,
		keywords: ['blog', 'gatsby', 'theme', 'naseeihity'],
		author: `@authorName`,
		siteUrl: 'https://siteUrl'
	},
	plugins: [
		// write mdx inside markdown
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: ['.md', `.mdx`],
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							inlineCodeMarker: '÷'
						}
					},
					{
						resolve: `gatsby-remark-katex`,
						options: {
							strict: `ignore`
						}
					},
					'gatsby-remark-copy-linked-files',
					// 'gatsby-remark-autolink-headers',
					'gatsby-remark-smartypants',
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
							linkImagesToOriginal: false
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.25rem`
						}
					},
					{
						resolve: 'gatsby-remark-external-links',
						options: {
							target: '_blank'
						}
					}
				]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		// A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: contentPath,
				name: `content`
			}
		},
		// Create an RSS feed (or multiple feeds) for your Gatsby site.
		{
			resolve: `gatsby-plugin-feed`,
			options: mdxFeed
		},
		// Easily add Google Analytics to your Gatsby site.
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: trackingId
			}
		},
		//  lets you control your document head using their React component
		`gatsby-plugin-react-helmet`,
		// Create a sitemap for your Gatsby site
		`gatsby-plugin-sitemap`,
		// avoids the browser having to refresh the whole page when navigating between local pages
		`gatsby-plugin-catch-links`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		'gatsby-plugin-offline'
	]
})
