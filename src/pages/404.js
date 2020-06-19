import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"

export const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "10rem" }}>
      <Head title="404" />
      <h1>404 Sorry!!</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Go to Home</Link>
    </div>
  )
}
export default NotFound
