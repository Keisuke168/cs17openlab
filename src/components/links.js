import React from "react"
import { Link } from "gatsby"

import "./links.css"

const Links = ()=>{
    return(
        <div className="links">
            <Link to={'/research1'} className="link">
                <div>
                    <h3>マルチモーダル<br/>認識</h3>
                </div>
            </Link>
            <Link to={'/research2'} className="link">
                <div>
                    <h3>アカペラ<br/>歌声合成</h3>
                </div>
            </Link>
            <Link to={'/research3'} className="link">
                <h3>リアルタイム<br/>ニューラル<br/>音声合成</h3>
            </Link>
            <Link to={'/research4'} className="link">
                <h3>脳の<br/>電流源推定</h3>
            </Link>
            <Link to={'/research5'} className="link">
                <h3>神経細胞の<br/>画像認識</h3>
            </Link>
            <Link to={'/research7'} className="link">
                <h3>脳性麻痺者の<br/>音声合成</h3>
            </Link>
            <Link to={'/research8'} className="link">
                <h3>脊髄性<br/>筋萎縮症者の<br/>音声合成</h3>
            </Link>
            <Link to={'/research9'} className="link">
                <h3>口唇口蓋裂者<br/>の音声認識</h3>
            </Link>
        </div>
    )
}

export default Links