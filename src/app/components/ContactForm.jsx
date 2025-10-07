'use client'

import { useState } from 'react'
import axios from 'axios'
import { FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    interest: '',
    message: '',
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: false, message: '' })

    try {
      const response = await axios.post('/api/contact', {
        ...formData,
        timestamp: new Date().toISOString(),
      })

      if (response.data.success) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Thank you! We\'ll contact you within 24 hours.',
        })
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          childAge: '',
          interest: '',
          message: '',
        })

        setTimeout(() => {
          setStatus({ loading: false, success: false, error: false, message: '' })
        }, 5000)
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Something went wrong. Please try again.',
      })

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false, message: '' })
      }, 5000)
    }
  }

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 bg-gradient-to-br from-[#ffe8f5] via-[#fef3f9] to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#ffc0e3] rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#ff8dc7] rounded-full blur-3xl opacity-15" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-[#3d2e7c] mb-16">
          Get Started Today
        </h2>

        <div className="bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl border-4 border-[#ffe8f5]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-[#3d2e7c] font-bold mb-2 text-lg">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-[#ffe8f5] border-2 border-[#ffc0e3] rounded-2xl focus:outline-none focus:border-[#3d2e7c] focus:bg-white transition-all text-lg text-[#3d2e7c] font-medium"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[#3d2e7c] font-bold mb-2 text-lg">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-[#ffe8f5] border-2 border-[#ffc0e3] rounded-2xl focus:outline-none focus:border-[#3d2e7c] focus:bg-white transition-all text-lg text-[#3d2e7c] font-medium"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-[#3d2e7c] font-bold mb-2 text-lg">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-[#ffe8f5] border-2 border-[#ffc0e3] rounded-2xl focus:outline-none focus:border-[#3d2e7c] focus:bg-white transition-all text-lg text-[#3d2e7c] font-medium"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Child Age */}
            <div>
              <label htmlFor="childAge" className="block text-[#3d2e7c] font-bold mb-2 text-lg">
                Child's Age
              </label>
              <input
                type="text"
                id="childAge"
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                className="w-full px-5 py-4 bg-[#ffe8f5] border-2 border-[#ffc0e3] rounded-2xl focus:outline-none focus:border-[#3d2e7c] focus:bg-white transition-all text-lg text-[#3d2e7c] font-medium"
                placeholder="e.g., 5 years"
              />
            </div>

            {/* Interest */}
            <div>
              <label htmlFor="interest" className="block text-[#3d2e7c] font-bold mb-2 text-lg">
                I'm interested in <span className="text-red-500">*</span>
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-[#ffe8f5] border-2 border-[#ffc0e3] rounded-2xl focus:outline-none focus:border-[#3d2e7c] focus:bg-white transition-all text-lg text-[#3d2e7c] font-medium"
              >
                <option value="">Select an option</option>
                <option value="Assessment">Schedule an Assessment</option>
                <option value="Therapy">Learn about Therapy Programs</option>
                <option value="Consultation">Book a Consultation</option>
                <option value="Information">Get More Information</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-[#3d2e7c] font-bold mb-2 text-lg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-5 py-4 bg-[#ffe8f5] border-2 border-[#ffc0e3] rounded-2xl focus:outline-none focus:border-[#3d2e7c] focus:bg-white transition-all resize-none text-lg text-[#3d2e7c] font-medium"
                placeholder="Tell us about your needs..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status.loading}
              className="w-full bg-[#3d2e7c] text-white py-5 px-6 rounded-2xl font-bold text-xl hover:bg-[#5a4a9c] transition-all hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-2xl hover:shadow-[#3d2e7c]/50 flex items-center justify-center gap-3"
            >
              {status.loading ? (
                <>
                  <FaSpinner className="animate-spin text-2xl" />
                  Submitting...
                </>
              ) : (
                'Submit Request'
              )}
            </button>

            {/* Status Messages */}
            {status.success && (
              <div className="bg-green-500 text-white p-5 rounded-2xl flex items-center gap-4 font-bold text-lg shadow-xl animate-fadeIn">
                <FaCheckCircle className="text-3xl flex-shrink-0" />
                {status.message}
              </div>
            )}

            {status.error && (
              <div className="bg-red-500 text-white p-5 rounded-2xl flex items-center gap-4 font-bold text-lg shadow-xl animate-fadeIn">
                <FaExclamationCircle className="text-3xl flex-shrink-0" />
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}