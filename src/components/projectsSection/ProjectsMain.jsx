import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const projects=[{
    name:'Hospital Management Platform',
    year:'2024',
    align:'right',
    image:'../../website-img1.PNG',
    link:"https://github.com/saksham1728/Hospital-Management-Platform",
},
{
    name:'Auction Platform',
    year:'2024',
    align:'left',
    image:'../../website-img2.png',
    link:"https://auction-platform-28.netlify.app/"
},
{
    name:'AI Engineering tools portal',
    year:'2025',
    align:'right',
    image:'../../website-3.jpg',
    link:'https://online-learning-platform-ashy.vercel.app/'
}
]

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
          variants={fadeIn('up',0.2)} 
          initial='hidden' 
          whileInView='show' 
          viewport={{once:false,amount:0}}
      ><ProjectsText/>
      </motion.div>
      
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((item,index)=>{
            return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link}/>

        })}
      </div>
    </div>
  )
}

export default ProjectsMain
