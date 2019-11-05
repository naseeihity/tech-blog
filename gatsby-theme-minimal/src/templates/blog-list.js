import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import style from '../style/pager.module.css'

class BlogIndex extends React.Component {
	render() {
		const { data } = this.props
		const siteTitle = data.site.siteMetadata.title
		const posts = data.allMdx.edges
		const { currentPage, numPages } = this.props.pageContext
		const isFirst = currentPage === 1
		const isLast = currentPage === numPages
		const prevPage = currentPage - 1
		const nextPage = (currentPage + 1).toString()

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title="Kevin's blog" keywords={[`blog`, `movie`]} />
				{posts.map(({ node }) => {
					const title = node.frontmatter.title || node.fields.slug
					return (
						<div style={{ marginBottom: '3.5rem', marginTop: '2px' }} key={node.fields.slug}>
							<h3>
								<Link style={{ boxShadow: `none`, color: '#000' }} to={node.fields.slug}>
									{title}
								</Link>
							</h3>
							<small>{node.frontmatter.date}</small>
							<p
								dangerouslySetInnerHTML={{
									__html: node.frontmatter.description || node.excerpt
								}}
							/>
						</div>
					)
				})}
				<ul className={style.box}>
					{!isFirst && (
						<Link to={`/${prevPage === 1 ? '' : 'page/' + Number(prevPage)}`} rel="prev">
							←
						</Link>
					)}
					{Array.from({ length: numPages }, (_, i) => (
						<li
							className={`${style.page} ${currentPage === i + 1 ? style.active : ''}`}
							key={`pagination-number${i + 1}`}
						>
							<Link to={`/${i === 0 ? '' : 'page/' + Number(i + 1)}`}>{i + 1}</Link>
						</li>
					))}
					{!isLast && (
						<Link to={`/page/${nextPage}`} rel="next">
							→
						</Link>
					)}
				</ul>
			</Layout>
		)
	}
}

export default BlogIndex

export const pageQuery = graphql`
	query pageQuery($skip: Int!, $limit: Int!) {
		site {
			siteMetadata {
				title
			}
		}
		allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
					}
				}
			}
		}
	}
`
