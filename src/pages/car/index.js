// Step 1: Import React
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { SEO } from '../../components/Seo'

// Step 2: Define your component
const IndexPage = ({data}) => {

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <main>
          <h1>Welcome to my Gatsby site!</h1>
          <p>I'm making this by following the Gatsby Tutorial.</p>
          <Link to='/'>Go home</Link>
          <h1 style={{fontWeight: 700, fontSize: 30, paddingTop: 100}}>My Blog post</h1>
          {
            data.allMdx.nodes.map((node) => (
            <article key={node.id} style={{paddingTop: 30}}>
                <h2>{node.frontmatter.title}</h2>
                <p>Posted: {node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
                <h2>
                    <Link to={`/car/${node.frontmatter.slug}`}>
                        {node.frontmatter.title}
                    </Link>
                </h2>
            </article>
        ))
      }
        </main>
        <StaticImage 
        src='https://plus.unsplash.com/premium_photo-1664304975927-49e20c85126d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3JhbmdlJTIwY2F0fGVufDB8fDB8fHww' 
        alt='a-fat-car'
        />
    </div>
  )
}

export const query = graphql`
    query {
    allMdx(filter: {frontmatter: {title: {ne: null}, date: {ne:null}}}) {
        nodes {
        frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            slug
        }
        id
        excerpt
        }
    }
    }
    `

// You'll learn about this in the next task, just copy it for now
export const Head = () => <SEO title="Super Cool Blog Posts" />

// Step 3: Export your component
export default IndexPage