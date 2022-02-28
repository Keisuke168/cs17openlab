import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "../components/header"
import Footer from "../components/footer"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Links from "../components/links"



import Movie from '../images/video.mp4'

export default ({ data }) => (
  <Layout>
    <SEO />
    <Header/>
    <div className="video">
    <video autoPlay muted loop playsInline>
                <source src={Movie} type="video/mp4" />
    </video>
    </div>
   
    <div className="hero">
      
      <div className="catch">
        <h1>
          CS17
          <br /> TAKIGUCHI LAB.
        </h1>
        <p>よく学び，よく遊べ．</p>
      </div>
      
    </div>
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
        </div>
      </div>
      <Links/>
      <h3 className='issho'>私たちと一緒に，<br/>新たなユニークな研究を始めましょう!</h3>
    </section>

    {/* <section className="lets">
      <div className="container">
        <h2 className="bar">
          Let's 研究！
        </h2>

      </div>
    </section> */}


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
          2022年3月の<br/>オープンラボについて
        </h2>
        <div className="items">
          <div className="item">
              研究室見学を開催します．
              <br/>
              音声，対話，コンピュータビジョン，
              <br/>
              脳に関する研究に興味のある人は，
              <br/>
              ぜひ見学にお越しください．
              <br/><br/>
              教員，学生による研究室紹介と
              みなさんの質問にお答えします！
              <br/>
              また当日は混雑緩和のため<br/>
              予約制（Google Forms）とします．
              <br/><br/>
              質問があれば，気軽に下記（滝口）まで．<br/>

              <span>takigu@kobe-u.ac.jp</span><br/><br/>

              （コロナ禍で大学に来ることができない学生は連絡ください．）
          </div>
          <div className="item" style={{textAlign: 'left'}}>

          場所：<br/>
        　　自然科学研究棟３号館<br/>
        　　８階805<br/>
          <div className="items">
            <div className="itemi">
              <Img fluid={data.op1.childImageSharp.fluid} alt="" />
            </div>
            <div className="itemi">
              <Img fluid={data.op2.childImageSharp.fluid} alt="" />
            </div>
          </div>

          <br/><br/>
          <span>日程は現在調整中です.</span>


          </div>
        </div>

      </div>
    </section>

    <Footer/>
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
    op1: file(relativePath: { eq: "op1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    op2: file(relativePath: { eq: "op2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
