import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Banner from "../components/banner"
import Backstory from "../components/backstory"
import Benefits from "../components/benefits"
import Users from "../components/users"
import SEO from "../components/seo"
import Form from "../components/form"
import Features from "../components/features"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Banner />
    <Backstory />
    <Benefits />
    <Users />
    <Features />
    <Form />
  </Layout>
)

export default IndexPage
