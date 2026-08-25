import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const projects=[{
    name:'How About Coffee - Cafe Website',
    year:'2026',
    align:'right',
    image:'../../how-about-coffee.png',
    link:"https://how-about-coffee-bzi399op7-sakshams-projects-e8f64401.vercel.app/",
},
{
    name:'Fiddle River - Seafood Restaurant',
    year:'2026',
    align:'left',
    image:'../../fiddle-river.png',
    link:"https://fiddle-river-restaurant.onrender.com/"
},
{
    name:'HodoStays - Hotel Booking Platform',
    year:'2026',
    align:'right',
    image:'../../hodostays.png',
    link:'https://www.hodostays.com/'
},
{
    name:'Sanskar Spoken English Institute',
    year:'2026',
    align:'left',
    image:'../../sanskar-spoken-english.png',
    link:'https://sanskarspokenenglish.com/'
},
{
    name:'Hospital Management Platform',
    year:'2026',
    align:'right',
    image:'../../website-img1.PNG',
    link:"https://github.com/saksham1728/Hospital-Management-Platform",
},
{
    name:'Auction Platform',
    year:'2026',
    align:'left',
    image:'../../website-img2.png',
    link:"https://auction-platform-28.netlify.app/"
},
{
    name:'AI Engineering Tools Portal',
    year:'2026',
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
