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
                
                我々の研究室では，音声，対話，コンピュータビジョン，脳に関する研究をしています．
                
                この分野は，大学のみならず世界のIT企業Google，IBM，Apple，Microsoft，Amazon，Facebookなどが力を入れて研究開発を進めています．
              
                私たちは，特に医学，保健学，生物学など様々な異分野の融合による新しい研究を目指しています．

              </p>
          </div>
        </div>
    </section>

    <section className="research">
      <div className="container">
        <h2 className="bar">CS17で研究できる分野</h2>
        <div className="items">
          <div className="item">
            <figure>
              <Img fluid={data.music.childImageSharp.fluid} alt="" />
              <p>音声</p>
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
              <p>基礎/応用医学<br/>+<br/>人工知能</p>
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
          <h3>私たちと一緒に，<br/>新たなユニークな研究を始めましょう!</h3>
        </div>
      </div>
    </section>

    <section className="lets">
      <div className="container">
        <h2 className="bar">
          Let's 研究！
        </h2>
      </div>
    </section>


    <section className="event">
      <div className="container">
        <h2 className="bar">
          Enjoy! イベント
        </h2>
        <div className="details">
          <div className="detail">
            <figure>
              <Img fluid={data.zero.childImageSharp.fluid} alt="" />
            </figure>
            <p>研究室旅行</p>
            <p>
            例年，国内のどこかに皆で旅行に行きます．
              <br />
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

    <section className="openlab">
      <div className="container">
        <h2 className="bar">
          ２０２２年３月の<br/>オープンラボについて
        </h2>

      </div>
    </section>

    {/* <section className="photo">
      <h2 className="sr-only">Photo</h2>
      <Img
        fluid={data.ai.childImageSharp.fluid}
        alt="ai"
        style={{ width: "50%", textAlign: "center" }}
      />
    </section> */}
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
    ai: file(relativePath: { eq: "ai.png" }) {
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
