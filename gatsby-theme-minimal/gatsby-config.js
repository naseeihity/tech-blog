const mdxFeed = require('gatsby-plugin-mdx/feed')

module.exports = {
	siteMetadata: {
		title: `WebSite title`,
		description: `A description of your website.`,
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
					{ resolve: 'gatsby-remark-autolink-headers' },
					{ resolve: 'gatsby-remark-prismjs' },
					{ resolve: 'gatsby-remark-smartypants' }
				]
			}
		},
		// A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `content`,
				name: `content`
			}
		},
		// the manifest of PWA
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `site name`,
				short_name: `site short name`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `aliceblue`,
				display: `minimal-ui`,
				icon: '' // This path is relative to the root of the site.
			}
		},
		// Parses Markdown files using Remark.
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
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
					'gatsby-remark-autolink-headers',
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							inlineCodeMarker: '÷'
						}
					},
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
					{
						resolve: 'gatsby-remark-external-links',
						options: {
							target: '_blank'
						}
					}
				]
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
				trackingId: 'yourTracking ID'
			}
		},
		//  lets you control your document head using their React component
		`gatsby-plugin-react-helmet`,
		// Create a sitemap for your Gatsby site
		`gatsby-plugin-sitemap`,
		//  several image processing functions, processing your images in a variety of ways including resizing, cropping, and creating responsive images
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		// avoids the browser having to refresh the whole page when navigating between local pages
		`gatsby-plugin-catch-links`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		'gatsby-plugin-offline'
	]
}
