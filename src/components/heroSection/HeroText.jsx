import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
      <motion.h2
        variants={fadeIn(window.innerWidth < 640 ? 'down' : 'down', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='lg:text-2xl sm:text-xl uppercase text-cyan'
      >
        Exploring the hidden mysteries of tech
      </motion.h2>
      <motion.h1
        variants={fadeIn(window.innerWidth < 640 ? 'down' : 'right', 0.4)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange'
      >
        Saksham Maheshwari
      </motion.h1>
      <motion.p
        variants={fadeIn(window.innerWidth < 640 ? 'down' : 'up', 0.6)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='text-lg mt-4 text-white'
      >
        A full-stack developer who writes clean code, optimizes algorithms in C++,<br />
        and debugs both software and life with equal enthusiasm.
      </motion.p>
    </div>
  );
};

export default HeroText;
