import React, { useState } from 'react';
import { motion } from 'framer-motion';


// Asset Imports
import bgImg from '../assets/bg.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('work');

  const timelineItems = [
    {
      title: "Capturing Real Moments",
      desc: "We believe every moment holds a story worth preserving. Through creative videography and professional photography.",
      badge: "A Passion For Visual Storytelling"
    },
    {
      title: "Creating Cinematic Stories",
      desc: "We transform real moments into cinematic stories using creative direction, smooth transitions, and professional editing techniques.",
      badge: "The Person Behind The Camera"
    },
    {
      title: "Delivering Visual Excellence",
      desc: "We focus on quality, creativity, and precision to deliver visuals that look professional and leave a lasting impression.",
      badge: "The Story Behind The Camera"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 md:p-8 font-['Urbanist']">
      {/* Main Compact Card */}
      <div className="relative w-full max-w-6xl bg-[#0d0d0d] rounded-[32px] border border-white/5 overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        {/* --- LEFT SIDE (CREATOR & COMPANIES) --- */}
        <div className="w-full md:w-[42%] p-6 md:p-10 flex flex-col justify-between border-b md:border-b-0 border-white/5">
          <div>
            {/* Badge */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 w-fit px-3 py-1 rounded-full mb-6">
              <span className="text-[#ff8c42] text-sm">✦</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Meet The Creator</span>
            </div>

            {/* Abstract BG Image - Reduced Gap below */}
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={bgImg} 
              alt="Background" 
              className="w-20 md:w-28 h-auto mb-6  opacity-90"
            />
          </div>

          {/* Company Cards with Glow Animation */}
          <div className="space-y-7 mb-30">
            {[
              { name: "Orbitron Tech", icon: icon1 },
              { name: "Vertex Labs", icon: icon2 },
              { name: "Nova Systems", icon: icon3 }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.04)" }}
                className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-xl group transition-all cursor-pointer"
              >
                <motion.img 
                  animate={{ 
                    filter: ["drop-shadow(0 0 2px #ff8c4200)", "drop-shadow(0 0 8px #ff8c4266)", "drop-shadow(0 0 2px #ff8c4200)"] 
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                  src={item.icon} 
                  alt={item.name} 
                  className="h-10 w-auto object-contain" // Orignal size preservation
                />
                <span className="text-gray-300 font-semibold text-base md:text-lg">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- DECORATIVE DIVIDER (Desktop Only) --- */}
        <div className="hidden md:flex absolute left-[42%] top-0 bottom-0 w-[1px] bg-white/5 flex-col items-center justify-between py-4 -translate-x-1/2">
           <span className="text-white/20 font-light">+</span>
           <span className="text-white/20 font-light">+</span>
        </div>

        {/* --- RIGHT SIDE (TIMELINE) --- */}
        <div className="w-full md:w-[58%] p-6 md:p-10 flex flex-col">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-10">
            Driven By Passion, Guided By Creativity
          </h2>

          {/* Toggle Buttons */}
          <div className="flex bg-white/[0.03] p-1 rounded-xl border border-white/5 w-fit mb-8">
            <button 
              onClick={() => setActiveTab('work')}
              className={`px-5 py-2 text-sm md:text-base rounded-lg font-bold transition-all ${activeTab === 'work' ? 'bg-[#ff8c42] text-white' : 'text-gray-500'}`}
            >
              Work Experience
            </button>
            <button 
              onClick={() => setActiveTab('edu')}
              className={`px-5 py-2 text-sm md:text-base rounded-lg font-bold transition-all ${activeTab === 'edu' ? 'bg-[#ff8c42] text-white' : 'text-gray-500'}`}
            >
              My Education
            </button>
          </div>

          {/* Timeline */}
          <div className="relative space-y-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/10" />
            
            {timelineItems.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-10"
              >
                {/* Glowing Dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-[#0d0d0d] border-2 border-[#ff8c42] rounded-full z-10 shadow-[0_0_12px_#ff8c42]" />
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                  {item.desc}
                </p>
                
                {/* Bottom Badge */}
                <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/5 px-3 py-1 rounded-md">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#ff8c42] opacity-50" />
                   <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.badge}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff8c42]/5 blur-[100px] pointer-events-none" />
      </div>
    </div>
  );
};

export default ExperienceSection;