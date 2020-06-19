import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h2>About Us</h2>
        <p>This is a gatsby application.</p>
        <Link to="/contact">Contact Me</Link>
      </Layout>
    </div>
  )
}
export default AboutPage
