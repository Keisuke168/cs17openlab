import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Info = () => {
    const data = useStaticQuery(
        graphql`
        query {
            sche: file(relativePath: { eq: "sche2023.png" }) {
                childImageSharp {
                  fluid(maxWidth: 1600) {
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
        }
      `
    )


    return (
        <>
            <section className="openlab">
                <div className="container">
                    <h2 className="bar">
                    2024年3月の<br/>オープンラボについて
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
                            参加希望者はGoogle Formsで<br/>
                            参加登録をお願いします．
                            <br/><br/>
                            質問があれば，気軽に下記（滝口）まで．<br/>

                            <span>takigu@kobe-u.ac.jp</span><br/><br/>
			    学外からの大学院進学者を歓迎しています．<br/>希望者は滝口まで連絡ください．

                        </div>
                        <div className="item" style={{textAlign: 'left'}}>

                            開催日時（情報知能工学科3年生向け）：<br/>

                            3月13日（水）11時〜12時<br/>
			    3月14日（木）11時〜12時
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
                    <Link to={'https://forms.gle/v8fm83FCmMoXG97E6'} target="_blank">
                            <h3 className="form">オープンラボ参加登録はこちらから（Google Forms）</h3>
                    </Link>
                    <div className="thesis-theme"> 
                        <h3>卒業研究テーマ例</h3>
                        <ul>
                            <li>聞き上手な子育て支援対話システム/自然言語処理に関する研究 </li>
			    <li>発話困難者のための深層学習に基づく音声認識の研究 </li>
                            <li>脊髄性筋萎縮症・吃音当事者のための音声合成の研究  </li>
                            <li>異常検知に向けたゼロショット音響イベント認識・合成の研究 </li>
                            <li>Virtual Realityを用いたコミュニケーション支援技術に関する研究 </li>
                            <li>脳活動計測による人の認知に関する研究  </li>
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
        </>
    )
}



export default Info;
