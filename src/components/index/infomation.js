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

                        </div>
                        <div className="item" style={{textAlign: 'left'}}>

                            時間：<br/>
                            3月13日(水) 11時から <br>
			    3月14日(木) 11時から
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
			<Link to={'https://forms.gle/2mTZYFj9AfQL9uuK8'} target="_blank">
                            <h3 className="form">オープンラボ参加登録はこちらから（Google Forms）</h3>
                    </Link>
                    <div className="thesis-theme"> 
                        <h3>卒業研究テーマ例</h3>
                        <ul>
                            <li>人の意図や心理を理解する対話/自然言語処理に関する研究 </li>
                            <li>聞き上手な対話システムに関する研究（子育て支援/悩み相談対話システム） </li>
                            <li>発話障害者のための深層学習に基づく音声認識の研究 </li>
                            <li>脊髄性筋萎縮症/吃音当事者のための音声合成の研究  </li>
                            <li>異常検知に向けたゼロショット音響イベント認識・合成の研究 </li>
                            <li>Virtual Realityによるコミュニケーション支援技術に関する研究 </li>
                            <li>視線・脳活動計測による人の認知に関する研究  </li>
                            <li>脳神経活動から脳内における想起内容の予測に関する研究  </li>
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
