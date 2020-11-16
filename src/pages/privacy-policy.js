import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPolicy = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <h1>Privacy Policy</h1>
    <p>Welcome to privacy Policy</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PrivacyPolicy
