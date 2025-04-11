import * as React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import HomeBanner from "../components/HomeBanner"
import ProductsSection from "../components/ProductsSection"


const IndexPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <ProductsSection />
      <HomeBanner />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
