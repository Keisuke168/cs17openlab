import React, { Children } from "react"

import Header from "./header"
import "./research.css"

const Reserch = ({children}) => {
    return(
        <React.Fragment>
            <Header bg={"#A52E23"} />
                {children}
        </React.Fragment>
    )
}

export default Reserch