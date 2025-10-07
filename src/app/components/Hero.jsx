'use client'

import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-24 md:py-32 lg:py-40 mt-28 md:mt-36"
    >
      <div className="grid md:grid-cols-2 gap-20 lg:gap-24 xl:gap-32 items-center">
        {/* Left Content */}
        <div className="space-y-10 text-center md:text-left">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#3d2e7c] leading-tight">
              ARULA for Autism
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3d2e7c]">
              The Ultimate Therapy Solution for Autism
            </p>

            <p className="text-lg md:text-xl lg:text-2xl text-[#6b5b8c] leading-relaxed max-w-2xl mx-auto md:mx-0">
              A Completely Home-Based Treatment to ensure Promising Results in All Areas of Development
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 justify-center md:justify-start pt-4">
            <div className="flex gap-1">
              <FaStar className="text-yellow-400 text-2xl lg:text-3xl" />
              <FaStar className="text-yellow-400 text-2xl lg:text-3xl" />
              <FaStar className="text-yellow-400 text-2xl lg:text-3xl" />
              <FaStar className="text-yellow-400 text-2xl lg:text-3xl" />
              <FaStarHalfAlt className="text-yellow-400 text-2xl lg:text-3xl" />
            </div>
            <span className="text-yellow-600 font-bold text-xl lg:text-2xl">4.5/5</span>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-4 justify-center md:justify-start pt-4">
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-4 border-white shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${
                      ['#667eea', '#764ba2', '#f093fb', '#4facfe'][i]
                    }, ${['#764ba2', '#667eea', '#f5576c', '#00f2fe'][i]})`,
                  }}
                />
              ))}
            </div>
            <p className="italic text-[#6b5b8c] font-semibold text-lg lg:text-xl">
              Trusted by 200+ families worldwide
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 pt-12 justify-center md:justify-start">
            <button
              onClick={scrollToContact}
              className="bg-[#3d2e7c] text-white px-10 py-5 rounded-full font-bold text-lg lg:text-xl hover:bg-[#5a4a9c] transition-all hover:scale-105 shadow-2xl hover:shadow-[#3d2e7c]/50"
            >
              Talk to an ARULA Guide
            </button>
            <button
              onClick={scrollToContact}
              className="bg-[#ffc0e3] text-[#3d2e7c] px-10 py-5 rounded-full font-bold text-lg lg:text-xl hover:bg-[#ffb5dc] transition-all hover:scale-105 shadow-xl"
            >
              Take our Questionnaire
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative flex justify-center items-center mt-16 md:mt-0">
          <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl animate-bounce-slow">
            <svg
              className="w-full h-auto drop-shadow-2xl"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M250 400 C 150 350, 100 300, 100 200 C 100 150, 125 100, 175 100 C 200 100, 225 115, 250 140 C 275 115, 300 100, 325 100 C 375 100, 400 150, 400 200 C 400 300, 350 350, 250 400 Z"
                fill="#ffb5dc"
                stroke="#3d2e7c"
                strokeWidth="5"
              />
              <ellipse cx="220" cy="220" rx="40" ry="45" fill="#ffc0e3" />
              <ellipse cx="280" cy="250" rx="30" ry="35" fill="#ffd4eb" />
              <circle cx="220" cy="210" r="25" fill="#ffb5dc" stroke="#3d2e7c" strokeWidth="3" />
              <circle cx="280" cy="240" r="20" fill="#ffc0e3" stroke="#3d2e7c" strokeWidth="3" />
              <polygon points="180,100 200,120 160,120" fill="#ffd54f" opacity="0.8" />
              <polygon points="320,110 340,130 300,130" fill="#64b5f6" opacity="0.8" />
              <polygon points="420,200 440,220 400,220" fill="#81c784" opacity="0.8" />
              <circle cx="150" cy="180" r="10" fill="#ff6b9d" opacity="0.7" />
              <circle cx="350" cy="200" r="10" fill="#4fc3f7" opacity="0.7" />
              <circle cx="380" cy="280" r="10" fill="#ffb74d" opacity="0.7" />
              <circle cx="120" cy="260" r="10" fill="#ba68c8" opacity="0.7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}