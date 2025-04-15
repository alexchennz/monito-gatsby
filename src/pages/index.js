import * as React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import HomeBanner from "../components/HomeBanner"
import AnimalsSection from "../components/AnimalsSection"
import HomeBottomBanner from "../components/HomeBottomBanner"
import Footer from "../components/Footer"
import Sponsors from "../components/Sponsors"


const IndexPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <AnimalsSection />
      <HomeBanner />
      <Sponsors />
      <HomeBottomBanner />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
