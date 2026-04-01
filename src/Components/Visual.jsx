import { motion } from 'framer-motion';
import React from 'react';


// Asset Imports
import whatIcon from '../assets/what.png';
import icon4 from '../assets/icon4.png';
import gradientBg from '../assets/Gradient.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const VisualServices = () => {
  const services = [
    {
      id: 1,
      title: "Videography",
      desc: <>High-quality cinematic videography is at the heart of my work. I<br />focus on capturing real emotions, natural moments, and<br />meaningful stories through creative angles, smooth camera<br />movements, and professional equipment.</>,
      img: img1,
    },
    {
      id: 2,
      title: "Photography",
      desc: <>Photography is about freezing moments in time and turning them<br />into lasting memories. I provide professional photography services<br />that combine creativity, technical skill, and artistic vision to<br />produce high-quality images</>,
      img: img2,
    },
    {
      id: 3,
      title: "Content Creation",
      desc: <>Content creation is all about producing engaging and meaningful<br />visuals that connect with your audience. I create high-quality photo<br />and video content tailored specifically for social media platforms</>,
      img: img3,
    },
    {
      id: 4,
      title: "Social Media Strategy",
      desc: <>A strong social media presence requires more than just posting<br />content — it requires strategy, planning, and consistency. I provide<br />social media strategy and consulting services to help individuals and<br />businesses grow their online presence with purpose.</>,
      img: img4,
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] py-24 px-6 font-['Urbanist'] overflow-hidden">
      
      {/* --- SECTION HEADER WITH CUSTOM BADGE --- */}
      <div className="flex flex-col items-center mb-20 text-center">
        {/* The "What I Do" Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 px-6 py-2.5 bg-[#0a0a0a] border border-white/10 rounded-full mb-10 shadow-2xl"
        >
          <img src={whatIcon} alt="icon" className="w-8 h-8 object-contain" />
          <span className="text-xl md:text-2xl text-white font-medium tracking-tight">What I Do</span>
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-[1.1]">
          Professional visual services<br />tailored to your needs
        </h2>
      </div>

      {/* --- SERVICES LIST --- */}
      <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center relative`}
          >
            
            {/* TEXT SIDE (Custom width 630px for desktop) */}
            <div className={`z-30 w-full md:w-[630px] ${index % 2 === 0 ? 'lg:-mr-24' : 'lg:-ml-24'} mb-10 md:mb-0`}>
              <h3 className={`text-2xl md:text-4xl font-bold text-white mb-8 ${index % 2 !== 0 ? 'md:text-right' : 'text-left'}`}>
                {service.title}
              </h3>
              
              <div className="p-6 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-3xl shadow-2xl">
                <p className="text-gray-300 text-sm md:text-[15.5px] font-medium leading-[1.65]">
                  {service.desc}
                </p>
              </div>
              
              <div className={`flex gap-3 mt-8 ${index % 2 !== 0 ? 'md:justify-end' : 'justify-start'}`}>
                 <img src={icon4} alt="icon" className="w-7 h-7" />
                 <img src={icon4} alt="icon" className="w-7 h-7" />
              </div>
            </div>

            {/* IMAGE SIDE (Custom width 558px for desktop) */}
            <div className="relative z-10 w-full md:w-[558px] h-auto flex items-center justify-center">
              
              {/* Visible Gradient Glow */}
              <motion.img 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 5, repeat: Infinity }}
                src={gradientBg}
                alt="glow"
                className="absolute -z-10 w-[130%] h-[160%] max-w-none pointer-events-none object-contain"
                style={{ filter: 'brightness(1.3)' }}
              />
              
              <div className="w-full h-[320px] overflow-hidden rounded-[2.5rem] border border-white/5 shadow-inner bg-[#111]">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VisualServices;