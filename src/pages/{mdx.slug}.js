import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Reserch from '../components/research'

const BlogPost = ({data}) => {
    return(
      <Reserch>
        <MDXRenderer>
            {data.mdx.body}
        </MDXRenderer>
      </Reserch>
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