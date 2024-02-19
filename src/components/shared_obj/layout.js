import React from "react"

import "./layout.css"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Layout =  ({ children }) => (
  <div className="top">

    {children}

  </div>
)

export default Layout