import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = ({ title }) => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>Hello.</h1>
        <h2>I'm Kunal, a full-stack developer living in beautiful India.</h2>
      </Layout>
    </div>
  )
}
export default IndexPage
