import React from 'react'
import HeroSection from '../Components/Hero'
import ExperienceSection from '../Components/Expeirience'
import VisualServices from '../Components/Visual'
import FeaturedProjects from '../Components/Products'
import BrandsSection from '../Components/BrandsSection'
import Testimonials from '../Components/Testimonilas'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExperienceSection />
      <VisualServices />
      <FeaturedProjects />
      <BrandsSection />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home