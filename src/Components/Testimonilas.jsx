import { motion } from 'framer-motion';
import React, { useState } from 'react';


// Asset Imports
import whatIcon from '../assets/what.png';
import quoteIcon from '../assets/quote.png';

const Testimonials = () => {
  // Tracking which card is "Active" (Yellow Glow)
  // Defaulting to the 2nd card (id: 2) as requested
  const [activeId, setActiveId] = useState(2);

  const testimonials = [
    { id: 1, name: "Ayesha Burner", role: "Tour Coordinator", quote: "Absolutely amazing work! The video captured every moment perfectly.", avatar: "1" },
    { id: 2, name: "James Wilson", role: "Marketing Head", quote: "The attention to detail in the photography was beyond our expectations.", avatar: "2" },
    { id: 3, name: "Sarah Chen", role: "Content Creator", quote: "Working with Jenny was a breeze. She understands the brand's vision.", avatar: "3" },
    { id: 4, name: "Robert Fox", role: "Event Manager", quote: "Highly recommended for any high-end video production needs.", avatar: "4" },
    { id: 5, name: "Jenny Wilson", role: "Studio Director", quote: "Her creative direction transformed our boring project into a masterpiece.", avatar: "5" },
    { id: 6, name: "Michael Wong", role: "CEO @ TechFlow", quote: "Fast delivery, incredible quality, and a very professional approach.", avatar: "6" },
    { id: 7, name: "Emily Davis", role: "Creative Lead", quote: "I've worked with many creators, but Jenny's eye for detail is unique.", avatar: "7" },
    { id: 8, name: "David Miller", role: "Startup Founder", quote: "The social media strategy she provided doubled our engagement in a month.", avatar: "8" },
  ];

  // Duplicating for infinite continuous scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="min-h-screen bg-[#050505] text-white py-20 font-['Urbanist'] overflow-hidden">
      
      {/* --- SECTION HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 w-fit px-4 py-2 rounded-full mb-6">
          <img src={whatIcon} alt="icon" className="w-5 h-5 object-contain" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Testimonials</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">Client Experiences</h2>
      </div>

      {/* --- CONTINUOUS AUTO-SCROLL (Desktop & Mobile) --- */}
      <div className="relative w-full overflow-hidden flex group">
        <motion.div 
          className="flex gap-6 whitespace-nowrap py-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35, // Adjust for speed
            repeat: Infinity,
            ease: "linear",
          }}
          // Optional: Pause on hover so user can click easily
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="w-[280px] md:w-[320px] shrink-0 cursor-pointer"
              onClick={() => setActiveId(item.id)}
            >
               <TestimonialCard 
                  item={item} 
                  isActive={activeId === item.id} 
               />
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades for the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      </div>

      {/* SVG GRADIENT DEFINITION FOR STARS */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8343" />
            <stop offset="100%" stopColor="#FFC107" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

// --- TESTIMONIAL CARD COMPONENT ---
const TestimonialCard = ({ item, isActive }) => {
  return (
    <motion.div 
      className={`relative p-8 rounded-[2.5rem] h-full flex flex-col justify-between border transition-all duration-700
        ${isActive 
          ? 'bg-[#FD853A] border-[#FFD700] shadow-[0_0_60px_rgba(255,215,0,0.4)] scale-105 z-20' 
          : 'bg-[#0d0d0d] border-white/5 hover:border-white/20'
        }
      `}
    >
      {/* Top Section */}
      <div className="flex justify-between items-start mb-6">
        <img 
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.avatar}`} 
          alt="avatar" 
          className="w-14 h-14 rounded-full border-2 border-white/10"
        />
        <img 
          src={quoteIcon} 
          alt="quote" 
          className={`w-8 h-8 object-contain opacity-40 ${isActive ? 'invert brightness-0' : ''}`} 
        />
      </div>

      {/* Stars & Text */}
      <div className="mb-8">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" viewBox="0 0 20 20">
              <path 
                fill={isActive ? "#000" : "url(#star-gradient)"}
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
              />
            </svg>
          ))}
        </div>
        <p className={`text-sm md:text-base font-medium leading-relaxed italic whitespace-normal 
          ${isActive ? 'text-black' : 'text-gray-400'}`}>
          "{item.quote}"
        </p>
      </div>

      {/* User Info */}
      <div className="mt-auto">
        <h4 className={`text-lg font-black ${isActive ? 'text-black' : 'text-white'}`}>
          {item.name}
        </h4>
        <p className={`text-xs font-bold uppercase tracking-widest ${isActive ? 'text-black/60' : 'text-gray-500'}`}>
          {item.role}
        </p>
      </div>

      {/* Corner subtle glow for non-active cards */}
      {!isActive && (
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/[0.02] blur-2xl rounded-full pointer-events-none" />
      )}
    </motion.div>
  );
};

export default Testimonials;