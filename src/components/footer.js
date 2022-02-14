import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

export default () => {
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
    <footer className="footer">
      <div className="container">
        <div className="site">
          <Link to={`http://www.me.cs.scitec.kobe-u.ac.jp/`}>
            <h1>＞研究室公式HP</h1>
          </Link>
        </div>
        <ul className="sns">
          <li>
            <a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
              <span className="sr-only">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/">
              <FontAwesomeIcon icon={faFacebookSquare} />
              <span className="sr-only">Facebook</span>
            </a>
          </li>
          <li>
            <a href="http://instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
              <span className="sr-only">Instagram</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="back">
        <Img
          fluid={data.pattern.childImageSharp.fluid}
          alt=""
          style={{ height: "100%" }}
        />
      </div>
    </footer>
  )
}
