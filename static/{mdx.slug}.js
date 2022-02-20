import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"
import theme from "../elements/theme"
import styled from '@emotion/styled'

const MyH1 = props => <h1 style={{ color: "tomato" }} {...props} />
const components = {
  h1: MyH1,
}

const BlogPost = ({data}) => {
    return(
      <MDXProvider components={components}>
        <MDXRenderer>
            {data.mdx.body}
        </MDXRenderer>
      </MDXProvider>

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