import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
    
    FaGithub,
    FaLinkedin,
    FaFile,
  } from "react-icons/fa6";

const SocialBoxes = () => {
  const controls = useAnimation();
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(true);
    controls.start({ opacity: 0 });
    
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
      controls.start({ opacity: 1 });
    }, 800);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
      <motion.div 
        className="bg-black border border-stone-50/30 text-white rounded-lg flex items-center justify-center h-12 w-32 cursor-pointer shadow-md"
        onMouseEnter={() => controls.start({ x: 0 })} 
        onMouseLeave={() => controls.start({ x: -10 })}
        animate={controls}
      >
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.05 }} className="text-center">
           <div className='flex items-center px-2'> <FaLinkedin className='mr-2'/> LinkedIn</div>
          </motion.div>
        </a>
      </motion.div>

      <motion.div 
        className="bg-black text-white border border-stone-50/30 rounded-lg flex items-center justify-center h-12 w-32 cursor-pointer shadow-md"
        onMouseEnter={() => controls.start({ x: 0 })} 
        onMouseLeave={() => controls.start({ x: -10 })}
        animate={controls}
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <motion.div whileHover={{ scale: 1.05 }} className="text-center">
           <div className='flex items-center px-2'>
           <FaGithub  className='mr-2'/>GitHub
           </div>
          </motion.div>
        </a>
      </motion.div>

      <motion.div 
        className="bg-black text-white border border-stone-50/30 rounded-lg flex items-center justify-center h-12 w-32 cursor-pointer shadow-md"
        onMouseEnter={() => controls.start({ x: 0 })} 
        onMouseLeave={() => controls.start({ x: -10 })}
        animate={controls}
      >
        <a href="/path/to/your/resume.pdf" download>
          <motion.div whileHover={{ scale: 1.05 }} className="text-center">
            <div className='flex  items-center px-2'>
            <FaFile className='mr-2'/> Resume
            </div>
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
};

export default SocialBoxes;
