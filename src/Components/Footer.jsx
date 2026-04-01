import { motion } from 'framer-motion';
import React from 'react';

import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt 
} from 'react-icons/fa';

const Footer = () => {
  return (
    /* --- PURE BLACK WRAPPER --- */
    /* This ensures that the area behind the top half of the orange bar is black */
    <div id="contact" className="bg-[#000000] pt-20 scroll-mt-24"> 
      
      {/* --- FOOTER MAIN (Background #1F1F20) --- */}
      <footer className="relative bg-[#1F1F20] pt-16 pb-6 px-6 font-['Urbanist'] overflow-visible">
        
        {/* --- OVERLAPPING CTA BAR (Color #FD853A) --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          // Negative top positioning makes it overlap the black section above
          className="absolute -top-14 lg:-top-16 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl bg-[#FD853A] rounded-[30px] md:rounded-[45px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl z-20"
        >
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold text-white leading-tight">
              Ready to capture your next big moment? <br className="hidden md:block" />
              Let’s discuss your project today.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-100 transition-all active:scale-95 shadow-lg whitespace-nowrap w-full sm:w-auto">
              Book Now
            </button>
            <button className="border-2 border-white text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white/10 transition-all active:scale-95 whitespace-nowrap w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* --- FOOTER GRID --- */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/5 pb-10">
          
          {/* Branding */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-['Jersey_10'] text-white uppercase tracking-wider">
              Lex Cove Creative
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed max-w-[220px]">
              Capturing stories through cinematic visuals and professional photography.
            </p>
            <div className="flex gap-3 mt-1">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#FD853A] hover:text-white transition-all duration-300">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 text-gray-400 text-xs">
              {['Home', 'Portfolio', 'Services', 'About us', 'Contact us'].map((link) => (
                <li key={link} className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors group">
                  <span className="text-[#FD853A] text-[10px]">→</span> {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Services</h4>
            <ul className="flex flex-col gap-2.5 text-gray-400 text-xs">
              {['Videography', 'Photography', 'Drone videography', 'Video Editing'].map((service) => (
                <li key={service} className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors group">
                  <span className="text-[#FD853A] text-[10px]">→</span> {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FD853A] shrink-0">
                  <FaPhoneAlt size={14} />
                </div>
                <div>
                  <p className="text-[9px] uppercase text-gray-500 font-black">Contact Us</p>
                  <p className="text-white text-xs font-bold">+123 4566 7899</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FD853A] shrink-0">
                  <FaEnvelope size={14} />
                </div>
                <div>
                  <p className="text-[9px] uppercase text-gray-500 font-black">Mail Us</p>
                  <p className="text-white text-xs font-bold">example@Domain.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- COPYRIGHT --- */}
        <div className="mt-8 text-center text-gray-600 text-[10px] md:text-xs tracking-wider uppercase font-medium">
          StayUs @ Copyright 2026. All rights reserved by Alfa Themes Team
        </div>

        {/* Global Glow */}
        <div className="absolute top-1/2 left-[-5%] w-[30%] h-[30%] bg-[#FD853A]/5 blur-[100px] rounded-full pointer-events-none" />
      </footer>
    </div>
  );
};

export default Footer;