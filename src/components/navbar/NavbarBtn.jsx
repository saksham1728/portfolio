import React from 'react'
import {LuArrowDownRight} from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a 
      href="https://drive.google.com/file/d/1YqhodQTpQfittdn9t59DChpC8CD7qQcd/view?usp=sharing" 
      target="_blank" 
      rel="noopener noreferrer"
      className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center
       gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow sm:text-[18px] sm:ml-[3px]'>
      Hire Me
     <div className='sm:hidden md:block'>
    <LuArrowDownRight/>
    </div>
    </a>
  )
}

export default NavbarBtn
