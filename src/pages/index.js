import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Movie from '../images/1000A500.mp4'

export default ({ data }) => (
  <Layout>
    <SEO />
    <section className="hero">
      <figure>
        <video autoPlay loop muted playsInline>
                    <source src={Movie} type="video/mp4" />
        </video>
        
      </figure>
      <div className="catch">
        <h1>
          CS17
          <br /> TAKIGUCHI LAB.
        </h1>
        <p>よく学び，よく遊べ．</p>
      </div>
      <div className="wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 229.5"
          fill="#fff"
        >
          <path
            d="M1369,6.3C1222.5-12.2,1189.5,8,919.2,96.6C665,179.8,160,141.7-2,53.1v150l1371-14.2V6.3z"
            opacity=".53"
          />
          <path d="M1369 229.5V55.8c-9.5-2.4-19.2-4.4-28.9-5.8-196.9-29.9-203.4-15.8-503.9 82.6-219.8 72-627.6 53.2-838.2-10.5v107.4h1371z" />
        </svg>
      </div>
    </section>
    <section className="mess">
      <div className="container">
        <h2 className="bar">
          先生からのメッセージ
        </h2>
      </div>
        <div className="items">
          <div className="item">
              <figure>
                <Img fluid={data.sense.childImageSharp.fluid} alt="" />
              </figure>
          </div>
          <div className="item">
              <p>当研究室を希望する皆さんへ</p>
              <p>
                3年生4Qで，ディジタル信号処理の授業を担当している滝口です．
                
                我々の研究室では，音声，対話，コンピュータビジョン，脳に関す
               
                る研究をしています．この分野は，大学のみならず世界のIT企業
              
                Google，IBM，Apple，Microsoft，Amazon，Facebookな
            
                どが力を入れて研究開発を進めています．
              
                私たちは，特に医学，保健学，生物学など様々な異分野の融合によ
             
                る新しい研究を目指しています．

              </p>
          </div>
        </div>
    </section>


    <section className="food">
      <div className="container">
        <h2 className="bar">
          Enjoy! イベント
        </h2>
        <div className="details">
          <div className="detail">
            <figure>
              <Img fluid={data.fruit.childImageSharp.fluid} alt="" />
            </figure>
            <h3>フルーツ</h3>
            <p>FRUIT</p>
            <p>
              甘くてすっぱくておいしい果実たち。
              <br />
              旬のフルーツを満喫します。
            </p>
          </div>
          <div className="detail">
            <figure>
              <Img fluid={data.grain.childImageSharp.fluid} alt="" />
            </figure>
            <h3>穀物</h3>
            <p>GRAIN</p>
            <p>
              食事の基本となる穀物。
              <br />
              毎日の活動のエネルギー源になります。
            </p>
          </div>
          <div className="detail">
            <figure>
              <Img fluid={data.beverage.childImageSharp.fluid} alt="" />
            </figure>
            <h3>飲み物</h3>
            <p>BEVERAGE</p>
            <p>
              リラックスするのに欠かせない飲み物。
              <br />
              お気に入りの一杯はありますか？
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="photo">
      <h2 className="sr-only">Photo</h2>
      <figure>
        <Img
          fluid={data.berry.childImageSharp.fluid}
          alt="赤く熟したベリー"
          style={{ height: "100%" }}
        />
      </figure>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    sense: file(relativePath: { eq: "takigutisense.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fruit: file(relativePath: { eq: "fruit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    grain: file(relativePath: { eq: "grain.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    beverage: file(relativePath: { eq: "beverage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    berry: file(relativePath: { eq: "berry.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pattern: file(relativePath: { eq: "pattern.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
