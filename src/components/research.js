import React, { Children } from "react"

import Header from "./header"
import Footer from "./footer"
import "./research.css"

const Reserch = ({children}) => {
    return(
        <React.Fragment>
            <Header/>
                {children}
            <Footer/>
        </React.Fragment>
    )
}

export default Reserch