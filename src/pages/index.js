import React from "react"
import { Link } from "gatsby"
import RecentPosts from 'components/RecentPosts';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <RecentPosts/>

  </Layout>
)

export default IndexPage
