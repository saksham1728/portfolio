import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const SingleExperience = ({experience}) => {
  return (
    <motion.div 
    variants={fadeIn('up',0.2)} 
    initial='hidden' 
    whileInView='show' 
    viewport={{once:false,amount:0}}
    className='h-auto min-h-[350px] border-2 border-orange border-dashed rounded-2xl p-4 flex flex-col'>
      <p className='font-bold text-cyan text-lg'>{experience.job}</p>
      <a 
        href={experience.companyLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className='text-orange hover:text-cyan transition-colors duration-300 font-semibold'
      >
        {experience.company}
      </a>
      <p className='text-lightGrey text-sm mb-3'>{experience.date}</p>
      <ul className='list-disc pl-4 text-white text-sm space-y-1'>
        {experience.responsibilities.map((resp,index)=>{
        return<li key={index}>{resp}</li> 
      })}</ul>
    </motion.div>
  )
}

export default SingleExperience
