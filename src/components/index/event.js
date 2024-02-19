import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Event = () => {
    const data = useStaticQuery(
        graphql`
        query {
            zero: file(relativePath: { eq: "0.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 320) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              one: file(relativePath: { eq: "1.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 320) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              two: file(relativePath: { eq: "2.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 320) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              three: file(relativePath: { eq: "3.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 320) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
        }
      `
    )


    return (
        <section className="event">
        <div className="container">
          <h2 className="bar">
            Enjoy! イベント
          </h2>
          <div className="details">
            <div className="detail">
              <figure>
                <Img fluid={data.three.childImageSharp.fluid} alt="" />
              </figure>
              <p>研究室旅行①</p>
              <p>
              例年，国内のどこかに皆で旅行に行きます．
                <br />
                2019年度はしまなみ海道にサイクリング，<br/>
                2018年度は淡路島に旅行に行きました．
              </p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.zero.childImageSharp.fluid} alt="" />
              </figure>
              <p>研究室旅行②</p>
              <p>
                昨年度は神戸のワイナリーに行きました．
              </p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.one.childImageSharp.fluid} alt="" />
              </figure>
              <p>発表会打ち上げ，追いコン</p>
              <p>
              年に数回ある研究室発表会の後は<br/>
              労をねぎらうため，打ち上げを行っています．<br/>
              また，年度末には卒業される先輩方を<br/>
              お送りする追いコンを開催します．<br/>
              </p>
            </div>
            <div className="detail">
              <figure>
                <Img fluid={data.two.childImageSharp.fluid} alt="" />
              </figure>
              <p>その他イベント</p>
              <p>
              その他にも，研究室の有志で<br/>
              色々なイベントを開催しています．<br/>
              例えば…<br/>
              たこ焼きパーティー，
              王子公園でテニス，など
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}



export default Event;