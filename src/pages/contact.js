import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact" />
        <h2>Contact Us</h2>
        <p>
          Reach me at Github :{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/kunalkathe65"
          >
            Kunal Kathe
          </a>
        </p>
      </Layout>
    </div>
  )
}
export default ContactPage
