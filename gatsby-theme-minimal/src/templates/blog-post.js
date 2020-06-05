import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";

import GitTalk from "../components/gittalk";
import "katex/dist/katex.min.css";
import mainStyle from "../style/main.module.css";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const subTitle = this.props.data.site.siteMetadata.subTitle;
    const gitTalk = this.props.data.site.siteMetadata.gitTalk;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        subTitle={subTitle}
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>
        <div className={mainStyle.post}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>

        <hr />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <GitTalk
          title={siteTitle}
          location={this.props.location}
          options={gitTalk}
        />
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        subTitle
        gitTalk {
          id
          secret
          repo
          owner
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;
