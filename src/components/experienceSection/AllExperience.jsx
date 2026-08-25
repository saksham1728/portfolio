import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const experiences = [
  {
    job:'Hackathon-Webathon',
    company:'MHSSCE',
    date:'August-2024',
    responsibilities:[
      "First Runner-Up",
      "Received Best Individual Performer award.",
      "Developed Hospital-Management Platform.",
      "Built Patient panel, Admin panel and Doctor panel.",
    ],
  },
  {
    job:"Course Instructor",
    company:"TeacherOn",
    date:"May-2024 to Present",
    responsibilities:[
      "Tutoring C++ and DSA to students via TeacherOn platform.",
      "Engaged 10+ students in the first month through effective communication.",
      "Provided personalized guidance for problem-solving and coding interview prep."
    ]
  },
  {
    job:"Software Developer Intern",
    company:"BearConnect",
    date:"November-2024 to Present",
    responsibilities:[
      "Contributed to backend development using Express.js.",
      "Explored Redis-based job queues",
      "Explored CI/CD pipeline concepts, with the team, gaining an understanding of deployment.",
    ]
  }
]

const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
      {
        experiences.map((experience,index)=>{
          return (
          <>
            <SingleExperience key={index} experience={experience}/>;
            {index<2 ? (
              <motion.div
                                        variants={fadeIn('right',0.2)} 
                                        initial='hidden' 
                                        whileInView='show' 
                                        viewport={{once:false,amount:0}}
              >
              <FaArrowRight className='text-6xl text-orange lg:block sm:hidden'/>
              </motion.div>
              ):("")}
              
          </>
          )
        })
      }
    </div>
  )
}

export default AllExperience
