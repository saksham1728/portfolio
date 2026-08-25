import React from 'react';
import AboutMeImage from './AboutMeImage';
import AboutMeText from './AboutMeText';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const AboutMeMain = () => {
  return (
    <div id="about" className='flex md:flex-row sm:flex-col gap-12 max-w-[1200px] mx-auto mt-[100px] justify-between items-center'>
      <motion.div
        variants={window.innerWidth < 768 ? fadeIn('up', 0.2) : fadeIn('right', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.7 }} className='w-[100%]'
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={window.innerWidth < 768 ? fadeIn('up', 0.2) : fadeIn('left', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.7 }}
      >
        <AboutMeImage />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
