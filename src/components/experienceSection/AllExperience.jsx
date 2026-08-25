import React from 'react'
import SingleExperience from './SingleExperience'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const experiences = [
  {
    job:'Software Engineer',
    company:'HodoStays',
    companyLink:'https://hodostays.com/',
    date:'Dec 2025 - Jun 2026',
    responsibilities:[
      "Built and maintained production features for hotel booking platform using MERN Stack",
      "Integrated third-party platforms including Rentals United, payment gateways, and booking APIs",
      "Developed responsive web interfaces using React/Next.js for hospitality platform",
      "Worked on hotel/property listing, booking workflows and admin management functionality",
    ],
  },
  {
    job:"Full Stack Developer Intern",
    company:"Groie",
    companyLink:'https://groie.com/',
    date:"Jun 2025 - Dec 2025",
    responsibilities:[
      "Full stack developer at Groie",
      "Worked with Go (Programming Language), Next.js and +5 skills",
      "Developed backend and frontend features for production applications",
      "Contributed to building scalable and maintainable solutions"
    ]
  },
  {
    job:"Back End Developer",
    company:"BearConnect",
    companyLink:'https://bearconnect.io/',
    date:"Nov 2024 - Jun 2025",
    responsibilities:[
      "Backend developer at BearConnect",
      "Worked with Back-End Web Development, Node.js and +5 skills",
      "Built and improved backend APIs and application workflows",
      "Explored CI/CD pipeline concepts and deployment processes"
    ]
  },
  {
    job:"Full Stack Developer",
    company:"Eduknit",
    companyLink:'https://eduknit.in/',
    date:"June 2026 - Present",
    responsibilities:[
      "Built core features of EdTech platform with Learn & Earn model",
      "Developed course creation, management and student learning workflows",
      "Built coding practice modules, quiz and assessment functionality",
      "Implemented AI-assisted functionality for course creation workflows",
    ]
  }
]

const AllExperience = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-12'>
      {
        experiences.map((experience,index)=>{
          return (
            <SingleExperience key={index} experience={experience}/>
          )
        })
      }
    </div>
  )
}

export default AllExperience
