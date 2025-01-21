import { graphql, Link } from 'gatsby'
import * as React from 'react'
import { SEO } from '../../components/Seo'

const BlogPost = ({ data, children }) => {
  return (
      <div>
          <p>{data.mdx.frontmatter.date}</p>
          <Link to='/car'>Back to cat</Link>
          {children}
      </div>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <SEO title={data.mdx.frontmatter.title} />

export default BlogPost