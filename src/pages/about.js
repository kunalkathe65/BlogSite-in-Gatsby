import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Head title="About" />
      <Layout>
        <h2>About Us</h2>
        <p>This is a gatsby application.</p>
        <Link to="/contact">Contact Me</Link>
      </Layout>
    </div>
  )
}
export default AboutPage
