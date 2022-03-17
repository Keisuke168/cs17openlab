import React from "react"
import { graphql, Link } from "gatsby"
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
                3年生4Qで，ディジタル信号処理の授業を担当している滝口です．我々の研究室では，音声，対話，自然言語，コンピュータビジョン，脳科学に関する研究をしています．この分野は，大学のみならず世界のIT企業Google，IBM，Apple，Microsoft，Amazon，Metaなどが力を入れて研究開発を進めています．私たちは，医学，保健学，生物学など様々な異分野の融合による新しいAI研究も行っています．

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
              脳科学に関する研究に興味のある人は，
              <br/>
              ぜひ見学にお越しください．
              <br/><br/>
              教員，学生による研究室紹介と<br/>
              みなさんの質問にお答えします！
              <br/>
              また当日は混雑緩和のため<br/>
              予約制（Google Forms）とします．
              <br/><br/>
              質問があれば，気軽に下記（滝口）まで．<br/>

              <span>takigu@kobe-u.ac.jp</span><br/><br/>

              （コロナ禍で大学に来ることが<br/>できない学生は連絡ください．）
          </div>
          <div className="item" style={{textAlign: 'left'}}>

          時間：<br/>
          <Img fluid={data.sche.childImageSharp.fluid} alt="" />
          <div className="tips" >全ての時間帯で上限数に達しましたので，予約を締め切りました．</div>
          <br/><br/>

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

          </div>
        </div>
        {/* <Link to={'https://forms.gle/GyzgwfZnqUHDia5M9'} target="_blank">
                <h3 className="form">オープンラボ予約はこちらから（Google Form）</h3>
        </Link> */}
        <div className="thesis-theme"> 
          <h3>卒業研究テーマ例</h3>
          <ul>
            <li>人の意図や心理を理解する対話/自然言語処理に関する研究 </li>
            <li>発話障害者のための深層学習に基づく音声認識の研究 </li>
            <li>表情豊かなオペラ歌声合成の研究 </li>
            <li>エッジAIのためのDeep Learningコンパイラの研究 </li>
            <li>物理シミュレーションと深層学習の融合に関する研究 </li>
            <li>脳神経細胞のパターン予測に関する研究 </li>
            <li>脳神経活動から想起内容の生成に関する研究 </li>
          </ul>
        </div>

      </div>
    </section>

    <div className="phrase">
      <div className="catch">
        <h1>
        {/* Nothing is impossible. <br/>Change <span>the Future of AI</span>. */}
        <Img fluid={data.mess.childImageSharp.fluid} alt="" />
        </h1>
      </div>
    </div>

    <Footer to='http://www.me.cs.scitec.kobe-u.ac.jp/' text='＞研究室公式HP'/>
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
    three: file(relativePath: { eq: "3.jpg" }) {
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
    mess: file(relativePath: { eq: "mess2.png" }) {
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
    sche: file(relativePath: { eq: "sche.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
