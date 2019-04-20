import { Link } from "gatsby"
import React from "react"

import Image from "../components/image"
import Layout from "../components/layout"

const AboutMePage = () => (
  <Layout>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    <h1>Hey that's me!</h1>
    <p>A self-taught engineer, a thinker, a philosorapter.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutMePage
