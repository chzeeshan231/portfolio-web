import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiMenu, FiX } from 'react-icons/fi';

// Assets Imports
import heroImg from '../assets/main.png';
import ellipseImg from '../assets/Ellipse 2.png';
import vector1Img from '../assets/Vector 1.png'; 

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-orange-500/30 font-['Urbanist']">
      {/* --- FONT IMPORT --- */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Jersey+10&family=Urbanist:wght@300;400;500;600;700;800;900&display=swap');`}
      </style>

      {/* --- NAVIGATION (GLASSMORPHIC) --- */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-[100]">
        <div className="flex items-center justify-between px-5 md:px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          {/* Reduced Logo size on mobile (text-lg) */}
          <div className="text-lg md:text-2xl font-['Jersey_10'] tracking-widest uppercase">
            Lex Cove Creative
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <a href="#" className="bg-[#ff8c42] px-6 py-2 rounded-full text-white">Home</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>

          <button className="hidden lg:block bg-[#ff8c42] text-white px-7 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all">
            Get Free Consultation
          </button>

          <button className="lg:hidden text-2xl p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-20 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 lg:hidden shadow-2xl"
            >
              <a href="#" className="text-xl font-bold text-[#ff8c42]">Home</a>
              <a href="#" className="text-xl font-medium">About</a>
              <a href="#" className="text-xl font-medium">Portfolio</a>
              <a href="#" className="text-xl font-medium">Contact</a>
              <button className="bg-[#ff8c42] w-full py-4 rounded-2xl font-bold mt-2">Get Consultation</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="pt-28 lg:pt-34 flex flex-col items-center px-6">
        
        <div className="relative mb-4 md:mb-6">
          <img src={vector1Img} className="absolute -top-6 -right-6 w-8 h-8 rotate-12" alt="accent" />
          <div className="bg-[#151515] px-6 py-1.5 rounded-full border border-white/5 text-gray-400 text-xs md:text-sm font-medium">
            Hello!
          </div>
        </div>

        <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tighter text-center">
          I'm <span className="text-[#ff8c42]">
            <TypeAnimation
              sequence={['Jenny,', 2000, 'Creative,', 2000]}
              wrapper="span"
              repeat={Infinity}
            />
          </span>
        </h1>

        <div className="relative max-w-4xl text-center mb-10 md:mb-12">
          <img src={vector1Img} className="absolute -left-12 top-0 hidden lg:block w-12 h-12 -rotate-45" alt="accent" />
          <p className="text-base md:text-xl font-medium text-white leading-snug lg:px-10 mb-4">
            Photography | Video Production | Content Creation | Social Media <br className="hidden lg:block"/>
            Strategy & Consulting | Stand-Up Comedian
          </p>
        </div>

        <div className="relative w-full max-w-7xl flex justify-center items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="hidden lg:block absolute left-4 top-1/4 max-w-[220px] text-left"
          >
            <span className="text-6xl absolute -top-30 text-[#ff8c42] font-serif leading-none">“</span>
            <p className="text-white text-sm font-normal leading-4 -mt-20">
              Jenny's Exceptional product design ensure our website's success. Highly Recommended
            </p>
          </motion.div>

          <div className="relative z-10 flex flex-col mb-4 items-center"> {/* Reduced margin bottom here */}
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              src={ellipseImg} 
              className="w-[200px] md:w-[450px] pointer-events-none"
            />
            
            <motion.img 
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              src={heroImg} 
              className="absolute bottom-0 w-[260px] md:w-[650px] z-20 pointer-events-none"
            />

            {/* --- GLASSMORPHIC BUTTONS --- */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-2 md:bottom-4 z-30 flex items-center bg-white/10 backdrop-blur-3xl border border-white/20 p-1 rounded-full shadow-2xl"
            >
              <button className="bg-[#ff8c42] text-white px-5 md:px-8 py-2 md:py-3 rounded-full font-bold text-[10px] md:text-base flex items-center gap-2 hover:brightness-110 transition-all whitespace-nowrap">
                Portfolio <span className="text-sm md:text-lg">↗</span>
              </button>
              <button className="px-4 md:px-8 py-2 md:py-3 font-bold text-[10px] md:text-base hover:bg-white/5 rounded-full transition-all whitespace-nowrap">
                Get In Touch
              </button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="hidden lg:block absolute right-4 bottom-1/4 text-right"
          >
            <div className="flex justify-end gap-1 mb-2 text-[#ff8c42] text-3xl">
              ★ ★ ★ ★ ★
            </div>
            <h2 className="text-5xl font-semibold">10 Years</h2>
            <p className="text-gray-400 font-bold tracking-widest text-xs uppercase">Experience</p>
          </motion.div>
        </div>

        {/* Reduced gap between image and stars (mt-4) */}
        <div className="lg:hidden flex flex-col items-center gap-4 mt-4 pb-12 text-center px-4">
            <div className="flex flex-col items-center">
                <div className="text-[#ff8c42] flex gap-1 mb-1">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <h3 className="text-2xl font-black">10 Years Experience</h3>
            </div>
            <p className="text-gray-400 italic text-xs leading-relaxed max-w-xs">
              "Jenny's exceptional product design ensure our website's success. Highly Recommended"
            </p>
        </div>
      </main>

      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#ff8c42]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </div>
  );
};

export default HeroSection;