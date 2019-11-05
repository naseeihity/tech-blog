const fs = require('fs')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	const blogPost = require.resolve(`./src/templates/blog-post.js`)
	const basePath = '/'
	createPage({
		path: basePath,
		component: blogPost
	})
	return graphql(
		`
			{
				allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
					edges {
						node {
							id
							excerpt
							fields {
								slug
							}
							frontmatter {
								title
							}
						}
					}
				}
			}
		`
	).then(result => {
		if (result.errors) {
			throw result.errors
		}

		// Create blog posts pages.
		const posts = result.data.allMdx.edges

		posts.forEach((post, index) => {
			const previous = index === posts.length - 1 ? null : posts[index + 1].node
			const next = index === 0 ? null : posts[index - 1].node

			createPage({
				path: post.node.fields.slug,
				component: blogPost,
				context: {
					slug: post.node.fields.slug,
					previous,
					next
				}
			})
		})

		// Create blog-list pages
		const postsPerPage = 5
		const numPages = Math.ceil(posts.length / postsPerPage)
		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `/` : `/page/${i + 1}`,
				component: require.resolve('./src/templates/blog-list.js'),
				context: {
					limit: postsPerPage,
					skip: i * postsPerPage,
					numPages,
					currentPage: i + 1
				}
			})
		})

		return null
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions
	console.log(node.internal.type)
	if (node.internal.type === 'Mdx') {
		const value = createFilePath({ node, getNode })
		createNodeField({
			// Name of the field you are adding
			name: 'slug',
			// Individual MDX node
			node,
			value: value
		})
	}
}

// quick import React Component in markdown
exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			modules: [require.resolve(__dirname, 'src'), 'node_modules']
		}
	})
}

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
	const contentPath = 'content'
	if (!fs.existsSync(contentPath)) {
		reporter.info(`creating the ${contentPath} directory`)
		fs.mkdirSync(contentPath)
	}
}
