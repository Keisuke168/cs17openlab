import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Links from "./links"

const Research = () => {
    const data = useStaticQuery(
        graphql`
        query {
            music: file(relativePath: { eq: "music.png" }) {
            childImageSharp {
                fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }
    
            camera: file(relativePath: { eq: "camera.png" }) {
            childImageSharp {
                fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }

            brain: file(relativePath: { eq: "brain.png" }) {
            childImageSharp {
                fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }

            hukusi: file(relativePath: { eq: "hukusi.png" }) {
            childImageSharp {
                fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }

            iryo: file(relativePath: { eq: "iryo.png" }) {
            childImageSharp {
                fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }

            labmem: file(relativePath: { eq: "labmember.png" }) {
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
        <>
            <section className="research">
                <div className="container">
                    <h2 className="bar">CS17で研究できる分野</h2>
                    <div className="items">
                        <div className="item">
                            <figure>
                                <Img fluid={data.music.childImageSharp.fluid} alt="" />
                                <p>音声/<br/>対話</p>
                            </figure>
                        </div>
                        <div className="item">
                            <figure>
                                <Img fluid={data.camera.childImageSharp.fluid} alt="" />
                                <p>Computer Vision</p>
                            </figure>
                        </div>
                        <div className="item">
                            <figure>
                                <Img fluid={data.brain.childImageSharp.fluid} alt="" />
                                <p>脳</p>
                            </figure>
                        </div>
                        <div className="item">
                            <figure>
                                <Img fluid={data.hukusi.childImageSharp.fluid} alt="" />
                                <p>福祉<br/>+<br/>人工知能</p>
                            </figure>
                        </div>
                        <div className="item">
                            <figure>
                                <Img fluid={data.iryo.childImageSharp.fluid} alt="" />
                                <p>基礎/<br/>応用医学<br/>+<br/>人工知能</p>
                            </figure>
                        </div>
                    </div>
                    <div className="content">
                        <p>
                        具体的な研究テーマについては，学生の希望を尊重します．<br/>
                        週2~3回のゼミへの参加を除いては，<br/>
                        学生の皆さんが，いつ，どこで研究するかは各自で決めます．<br/>
                        受け身ではなく，自ら進んで研究スケジュールや内容を管理して，<br/>
                        学会発表（年数回）に向けて研究を進めます．<br/>
                        </p>
                    </div>
                </div>
                <Links/>
                <Img fluid={data.labmem.childImageSharp.fluid} alt="" />
            </section>

            <div className="phrase">
            <div className="catch">
            <h1>
                We focus on high-impact research.
            </h1>
            </div>
            </div>
        </>
  
    )
}

export default Research;