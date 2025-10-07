'use client'

import { FaHome, FaUsers, FaChartLine, FaBullseye, FaLightbulb, FaStar } from 'react-icons/fa'

const features = [
  {
    icon: FaHome,
    title: 'Home-Based Therapy',
    description: 'Personalized treatment plans delivered in the comfort of your home, creating a familiar and stress-free environment for your child.',
    color: '#ff6b9d',
  },
  {
    icon: FaUsers,
    title: 'Family-Centered Approach',
    description: 'We empower parents and families to be active participants in their child\'s development journey.',
    color: '#4fc3f7',
  },
  {
    icon: FaChartLine,
    title: 'Comprehensive Development',
    description: 'Holistic programs covering communication, social skills, behavior management, and daily living skills.',
    color: '#81c784',
  },
  {
    icon: FaBullseye,
    title: 'Evidence-Based Methods',
    description: 'Our therapy is grounded in proven ABA principles and latest research in autism intervention.',
    color: '#ba68c8',
  },
  {
    icon: FaLightbulb,
    title: 'Personalized Plans',
    description: 'Every child is unique. We create customized therapy plans tailored to your child\'s specific needs.',
    color: '#ffb74d',
  },
  {
    icon: FaStar,
    title: 'Proven Results',
    description: 'Join 200+ families who have seen remarkable progress in their children\'s development.',
    color: '#ffd54f',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#ffe8f5] rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffc0e3] rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-[#3d2e7c] mb-16">
          Why Choose ARULA?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#ffe8f5] to-white p-8 rounded-3xl border-4 border-transparent hover:border-[#ffc0e3] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl group cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon 
                  className="text-4xl" 
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="text-2xl font-bold text-[#3d2e7c] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#6b5b8c] leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}