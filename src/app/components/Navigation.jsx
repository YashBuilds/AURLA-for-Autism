'use client'

import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-2xl border-b border-[#ffe8f5]' 
        : 'bg-[#ffc0e3] shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection('home')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#ff8dc7] to-[#ffa5d8] rounded-full flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-all duration-300 group-hover:rotate-12">
              🧩
            </div>
            <span className="text-3xl font-extrabold text-[#3d2e7c] tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#3d2e7c] group-hover:to-[#ff6b9d] group-hover:bg-clip-text transition-all duration-300">
              ARULA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Features', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-[#3d2e7c] font-semibold hover:text-[#ff6b9d] transition-all duration-300 text-lg relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b9d] to-[#ba68c8] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#3d2e7c] to-[#5a4a9c] text-white px-8 py-3 rounded-full font-semibold hover:from-[#ff6b9d] hover:to-[#ba68c8] transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-[#ff6b9d]/30 text-lg group relative overflow-hidden"
            >
              <span className="relative z-10">Schedule Assessment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b9d] to-[#ba68c8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#3d2e7c] p-2 hover:bg-[#ffb5dc] rounded-xl transition-all duration-300 hover:scale-110"
          >
            {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-3 animate-fadeIn bg-white/90 backdrop-blur-lg rounded-2xl mt-2 p-4 border border-[#ffe8f5] shadow-2xl">
            {['Home', 'Features', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-4 text-[#3d2e7c] font-semibold hover:bg-gradient-to-r hover:from-[#ffe8f5] hover:to-[#ffc0e3] rounded-xl transition-all duration-300 hover:translate-x-2 text-lg"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-gradient-to-r from-[#3d2e7c] to-[#5a4a9c] text-white px-4 py-4 rounded-xl font-semibold hover:from-[#ff6b9d] hover:to-[#ba68c8] transition-all duration-500 text-lg mt-4 shadow-lg"
            >
              Schedule Assessment
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}