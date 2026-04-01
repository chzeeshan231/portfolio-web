import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../Components/Hero'
import ExperienceSection from '../Components/Expeirience'
import VisualServices from '../Components/Visual'
import FeaturedProjects from '../Components/Products'
import BrandsSection from '../Components/BrandsSection'
import Testimonials from '../Components/Testimonilas'
import Footer from '../Components/Footer'

const sectionReveal = {
  hidden: { opacity: 0, y: 56, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
}

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        <ExperienceSection />
      </motion.section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
      >
        <VisualServices />
      </motion.section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
      >
        <FeaturedProjects />
      </motion.section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <BrandsSection />
      </motion.section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Testimonials />
      </motion.section>

      <motion.section
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <Footer />
      </motion.section>
    </div>
  )
}

export default Home