import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between items-center px-5 py-3 bg-primary">
      {/* Logo */}
      <a className="font-bold text-3xl text-white hover:text-cyan-500" href="#">
        Saru
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-xl text-white">
          <li className="hover:text-cyan-500"><a href="#">Home</a></li>
          <li className="hover:text-cyan-500"><a href="#about">About</a></li>
          <li className="hover:text-cyan-500"><a href="#experience">Experience</a></li>
          <li className="hover:text-cyan-500"><a href="#projects">Projects</a></li>
          <li className="hover:text-cyan-500"><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {toggleMenu && (
       <nav className="absolute top-16 left-0 w-full bg-cyan-400/70 md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 text-lg text-white">
            <li><a href="#" onClick={() => setToggleMenu(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
            <li><a href="#experience" onClick={() => setToggleMenu(false)}>Experience</a></li>
            <li><a href="#projects" onClick={() => setToggleMenu(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
          </ul>
        </nav>
      )}

      {/* Hamburger Button */}
      <button 
        onClick={() => setToggleMenu(!toggleMenu)} 
        className="block md:hidden z-10"
      >
        <Bars3Icon className="text-white h-8" />
      </button>
    </header>
  )
}
