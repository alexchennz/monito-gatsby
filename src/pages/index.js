import * as React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import HomeBanner from "../components/HomeBanner"
import AnimalsSection from "../components/AnimalsSection"
import HomeBottomBanner from "../components/HomeBottomBanner"


const IndexPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <AnimalsSection />
      <HomeBanner />
      <HomeBottomBanner />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
