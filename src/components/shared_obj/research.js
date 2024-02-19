import React, { Children } from "react"

import Header from "./header"
import Footer from "./footer"
import "./research.css"

const Reserch = ({children}) => {
    return(
        <React.Fragment>
            <Header bg={"#A52E23"} />
                {children}
            <Footer to='/' bg='#A52E23' text='＞TOPへ'/>
        </React.Fragment>
    )
}

export default Reserch