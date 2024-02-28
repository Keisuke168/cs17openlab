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

                            <div className="tips" >20日（月），22日（水），23日（木）10時と11時30分は上限数に達しましたので，予約を締め切りました．</div>
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
                    <Link to={'https://jpn01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSc6OQ4j0PDsyRcmd46VBRCf6Un6G3D8-8vP8vk4whjT5kTylQ%2Fviewform%3Fusp%3Dsf_link&data=05%7C01%7C%7Ceaaef53e2ec14712c2e108db1e461fea%7C20ee4c8087bd422ca5063a2b0aca0615%7C0%7C0%7C638137058746148641%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=G4zSg9yPuL7fZHKDyW%2BnrMlLRnx9ihq7FYd31mlCe4E%3D&reserved=0'} target="_blank">
                            <h3 className="form">オープンラボ予約はこちらから（Google Forms）</h3>
                    </Link>
                    <div className="thesis-theme"> 
                        <h3>卒業研究テーマ例</h3>
                        <ul>
                            <li>人の意図や心理を理解する対話/自然言語処理に関する研究 </li>
                            <li>発話障害者のための深層学習に基づく音声認識の研究 </li>
                            <li>脊髄性筋萎縮症者のための音声合成の研究  </li>
                            <li>異常検知に向けたゼロショット音響イベント認識・合成の研究 </li>
                            <li>物理シミュレーションと深層学習の融合による楽器音合成に関する研究 </li>
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
