import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import {GiHamburgerMenu} from "react-icons/gi"
import {IoMdClose} from "react-icons/io"

const NavbarMain = () => {
    const [menuOpen,setMenuOpen]=useState(false);
    const toggleMenu=()=>{
        setMenuOpen(!menuOpen);
    }
    const closeMenu=()=>{
        setMenuOpen(false);
    }
  return (
    <>
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 sm:px-1'>
        <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange'>
            <NavbarLogo/>
            <div className='lg:block sm:hidden'>
            <NavbarLinks closeMenu={closeMenu}/>
            </div>
            <NavbarBtn/>
      </div>
      <div className='flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange'>
        <button className='text-2xl p-3 border border-orange rounded-full text-white'
        onClick={toggleMenu}>
        <GiHamburgerMenu/>
        </button>
      </div>
    </nav>

    {/* Mobile Sidebar Menu */}
    <div className={`fixed top-0 right-0 h-full w-[280px] bg-black border-l-2 border-orange z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className='flex justify-between items-center p-6 border-b border-orange'>
        <h2 className='text-orange font-bold text-xl'>Menu</h2>
        <button onClick={closeMenu} className='text-3xl text-white hover:text-orange transition-colors'>
          <IoMdClose/>
        </button>
      </div>
      <div className='flex flex-col gap-6 p-6'>
        <NavbarLinks closeMenu={closeMenu}/>
        <div className='mt-4 flex justify-center'>
          <NavbarBtn/>
        </div>
      </div>
    </div>

    {/* Overlay */}
    {menuOpen && (
      <div 
        className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden'
        onClick={closeMenu}
      ></div>
    )}
    </>
  )
}

export default NavbarMain
