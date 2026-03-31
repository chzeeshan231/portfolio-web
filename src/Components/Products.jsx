import React from 'react';

import { FiArrowUpRight } from 'react-icons/fi';

// Asset Imports
import lineBg from '../assets/line.jpg';
import petalsBg from '../assets/petals.png';
import card1 from '../assets/Frame 61.png';
import card2 from '../assets/Frame 61 (1).png';
import card3 from '../assets/Frame 61 (2).png';

const FeaturedProjects = () => {
  const projects = [
    { id: 1, title: "Videography", img: card1 },
    { id: 2, title: "Corporate Shoots", img: card2 },
    { id: 3, title: "Wedding Films", img: card3 },
  ];

  // Duplicating projects for seamless infinite scroll on mobile
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="relative min-h-screen w-full bg-[#050505] py-20 px-6 overflow-hidden flex flex-col items-center">
      
      {/* --- BACKGROUND LAYERS --- */}
      <img 
        src={lineBg} 
        alt="lines" 
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
      />
      
      <img 
        src={petalsBg} 
        alt="petals" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] max-w-none object-contain pointer-events-none z-10"
      />

      {/* --- CONTENT --- */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-['Urbanist'] font-bold text-white mb-16"
        >
          Featured Projects
        </motion.h2>

        {/* --- MOBILE: CONTINUOUS AUTO-SCROLL --- */}
        <div className="md:hidden w-full overflow-hidden flex group">
          <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <div 
                key={`${project.id}-${index}`}
                // CUSTOM WIDTH FOR MOBILE CARDS
                className="w-[300px] shrink-0" 
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- DESKTOP: GRID LAYOUT --- */}
        <div className="hidden md:grid grid-cols-3 gap-6 w-full">
          {projects.map((project) => (
            <div key={project.id} className="w-full">
               <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* --- PAGINATION DOTS --- */}
        <div className="flex gap-2 mt-12">
          <div className="w-8 h-2 bg-[#FF8343] rounded-full" />
          <div className="w-2 h-2 bg-white/20 rounded-full" />
          <div className="w-2 h-2 bg-white/20 rounded-full" />
          <div className="w-2 h-2 bg-white/20 rounded-full" />
        </div>
      </div>
    </section>
  );
};

// Extracted Card Component to avoid code duplication
const ProjectCard = ({ project }) => {
  return (
    <motion.div className="group relative">
      {/* CORNER GLOW ANIMATION */}
      <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#FF8343]/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full z-0 pointer-events-none" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FF8343]/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full z-0 pointer-events-none" />

      {/* MAIN CARD STRUCTURE */}
      <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.07]">
        
        {/* Card Title Section */}
        <div className="pt-8 px-8 pb-4">
          <h3 className="text-white text-xl md:text-2xl font-['Urbanist'] font-semibold">
            {project.title}
          </h3>
          <div className="h-[1px] w-full bg-white/10 mt-4" />
        </div>

        {/* Project Image Container */}
        <div className="p-4 relative">
          <div className="relative rounded-[2rem] overflow-hidden">
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-[280px] md:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Circular Arrow Button */}
          <div className="absolute bottom-8 right-8 w-14 h-14 md:w-16 md:h-16 bg-[#121b24] border border-white/10 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl shadow-2xl transition-all duration-300 group-hover:bg-[#FF8343] group-hover:scale-110 group-hover:-translate-y-2">
            <FiArrowUpRight />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;