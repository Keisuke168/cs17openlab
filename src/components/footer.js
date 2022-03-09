import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
const Footer =  ({to, bg, text}) => {
  const data = useStaticQuery(graphql`
    query {
      pattern: file(relativePath: { eq: "pattern.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <footer className="footer" style={{background: bg}}>
      <div className="container">
        <div className="site">
          <Link to={to}>
            <h1>{text}</h1>
          </Link>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer