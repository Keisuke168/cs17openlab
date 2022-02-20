import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../components/layout"

const BlogPost = ({data}) => {
    return(
      <Layout>
        <MDXRenderer>
            {data.mdx.body}
        </MDXRenderer>
      </Layout>
    )
}

export const query = graphql`
query ($id: String = "id") {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
    }
    body
  }
}
`
  
  

export default BlogPost