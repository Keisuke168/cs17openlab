import React from "react"
import { Link } from "gatsby"

const Header =  () => (
  <header className="header">
    <div className="container">
      <div className="site">
        <Link to={`/`}>
          <h1>CS17 滝口研究室</h1>
          <p>Media Informatics Lab.</p>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to={`/`}>TOP</Link>
          </li>
          <li>
            <Link to={`http://www.me.cs.scitec.kobe-u.ac.jp/`}>研究室公式HP</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header