import React from 'react'
import hamburger from '../../assets/hamburger.svg'

function Header() {
  return (
    <nav className='h-16 px-5 font-bold flex justify-between items-center md:h-20 md:px-10 '>
        <div className='text-lg flex items-center md:text-2xl'>dev <span className='text-4xl md:text-5xl text-[#4adbff]'>TZ</span></div>       
        <div className='hidden md:block duration-200'>
          <ul className='gap-16 flex items-center'>
            <li><a href="https://devtahaz.github.io/react-contact-page/">Home</a></li>
            <li><a href="https://devtahaz.github.io/react-contact-page/">About</a></li>
            <li><a href="https://devtahaz.github.io/react-contact-page/">Contact</a></li>
          </ul>
        </div>
        <div className='md:hidden duration-300 cursor-pointer hover:rotate-90'>
            <img className='w-5 h-5 hover:rotate-180' src={hamburger} alt="" />
        </div>
    </nav>
  )
}

export default Header