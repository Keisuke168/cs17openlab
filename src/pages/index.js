import React from "react"
import Header from "../components/shared_obj/header"
import Footer from "../components/shared_obj/footer"
import SEO from "../components/shared_obj/seo"
import Layout from "../components/shared_obj/layout"


import Hero from "../components/index/hero"
import Message from "../components/index/message"
import Reserch from "../components/index/research"
import Event from "../components/index/event"
import Info from "../components/index/infomation"


export default ({ data }) => (
  <Layout>
    <SEO />
    <Header/>
    <Hero/>
    <Message/>
    <Reserch/>
    <Event/>
    <Info/>
    <Footer to='http://www.me.cs.scitec.kobe-u.ac.jp/' text='＞研究室公式HP'/>
  </Layout>
)

