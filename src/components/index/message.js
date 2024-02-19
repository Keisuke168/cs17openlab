import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Message = () => {
    const data = useStaticQuery(
        graphql`
        query {
          sense: file(relativePath: { eq: "takigutisense.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `
    )


    return (
        <section className="mess">
            <div className="container">
                <h2 className="bar">
                    当研究室（大学院進学）を希望する皆さんへ
                </h2>
            </div>
            <div className="items">
                <div className="item">
                    <figure>
                        <Img fluid={data.sense.childImageSharp.fluid} alt="" />
                    </figure>
                </div>
                <div className="item">
                    <p>
                        3年生4Qで，ディジタル信号処理の授業を担当している滝口です．我々の研究室では，音声，対話，自然言語，コンピュータビジョン，脳科学に関する研究をしています．この分野は，大学のみならず世界のIT企業Google，IBM，Apple，Microsoft，Amazon，Metaなどが力を入れて研究開発を進めています．私たちは，医学，保健学，生物学などさまざまな異分野の融合による新しいAI研究もおこなっています．
                    </p>
                </div>
            </div>
      </section>
    )
}



export default Message;