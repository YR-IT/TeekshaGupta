'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: 'residential'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        projectType: 'residential'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const openGoogleMaps = () => {
    window.open(`https://www.google.co.in/maps/place/Architect+Teeksha+Gupta/@30.6836404,76.8435553,17z/data=!3m1!4b1!4m6!3m5!1s0x390f94a39b70cf8b:0xc4d4eeec8e4d7785!8m2!3d30.6836358!4d76.8461302!16s%2Fg%2F11cmvtg6f8?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D`, '_blank', 'noopener,noreferrer');
}


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Banner */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10"></div>
        
        <Image
          src="/contact.png"
          alt="Contact Banner"
          fill
          className="object-cover transform scale-105 hover:scale-100 transition-transform duration-[3s] ease-out"
          priority
        />
        
        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
          {/* Main Heading with Gold Styling */}
          <h1 
            className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-tight tracking-wider transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFED4E 75%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(255, 215, 0, 0.3), 0 0 60px rgba(255, 215, 0, 0.2)',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))',
              letterSpacing: '0.05em'
            }}
          >
            GET IN TOUCH
          </h1>
          
          {/* Elegant Subtitle */}
          <div className="mb-12">
            <p 
              className="text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.15em] mb-4 animate-pulse"
              style={{ 
                fontFamily: 'Cormorant Garamond, serif',
                color: '#FFD700',
                textShadow: '0 0 20px rgba(255, 215, 0, 0.4), 2px 2px 4px rgba(0,0,0,0.7)',
                fontWeight: 300
              }}
            >
              WITH US NOW
            </p>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6"></div>
            <p 
              className="text-lg md:text-2xl lg:text-3xl font-medium tracking-[0.2em] text-white/95"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                letterSpacing: '0.2em'
              }}
            >
              BUILD THE HOME OF YOUR DREAMS
            </p>
          </div>
          
          {/* Enhanced Decorative Elements */}
          <div className="flex justify-center items-center mt-16">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400/80 to-yellow-400/40"></div>
              <div className="relative">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-yellow-400/30 rounded-full animate-ping"></div>
              </div>
              <div className="w-6 h-px bg-yellow-400/60"></div>
              <div className="w-2 h-2 bg-yellow-300/80 rounded-full"></div>
              <div className="w-6 h-px bg-yellow-400/60"></div>
              <div className="relative">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-yellow-400/30 rounded-full animate-ping"></div>
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-yellow-400/80 to-yellow-400/40"></div>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 z-15">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-4 relative bg-gradient-to-r from-teal-200 to-amber-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #0f766e 2px, transparent 2px), radial-gradient(circle at 75% 75%, #0f766e 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-24">
            <div className="inline-block mb-6">
              <span className="text-teal-600 text-sm font-semibold tracking-[0.3em] uppercase border-b-2 border-teal-200 pb-2">
                Interior Design Excellence
              </span>
            </div>
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-800 mb-8 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Let's Create Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-slate-700 font-normal">
                Extraordinary
              </span>
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-slate-600 rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
              Share your vision with us and let our expert team transform your space into a 
              <em className="text-teal-700 font-medium"> masterpiece </em>
              that reflects your unique style and personality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Enhanced Contact Form */}
            <div className="w-full">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-14 border border-white/50 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-slate-50/50 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-light text-slate-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Start Your Journey
                    </h3>
                    <p className="text-slate-600">Tell us about your dream space</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3 group">
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 tracking-wide uppercase">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 border-2 border-slate-200  text-slate-700 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-slate-300 group-hover:shadow-md text-slate-700"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div className="space-y-3 group">
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 tracking-wide uppercase">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-slate-300 group-hover:shadow-md text-slate-700"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3 group">
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 tracking-wide uppercase">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-slate-300 group-hover:shadow-md text-slate-700"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      
                      <div className="space-y-3 group">
                        <label htmlFor="projectType" className="block text-sm font-semibold text-slate-700 tracking-wide uppercase">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-slate-300 group-hover:shadow-md text-slate-700"
                        >
                          <option value="residential">🏠 Residential Design</option>
                          <option value="commercial">🏢 Commercial Space</option>
                          <option value="renovation">🔨 Renovation Project</option>
                          <option value="consultation">💡 Design Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3 group">
                      <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 tracking-wide uppercase">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-slate-300 group-hover:shadow-md text-slate-700"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>

                    <div className="space-y-3 group">
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 tracking-wide uppercase">
                        Your Vision *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-5 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none hover:border-slate-300 group-hover:shadow-md text-slate-700"
                        placeholder="Tell us about your dream space, preferred style, budget range, timeline, and any specific requirements that will help us bring your vision to life..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-5 px-8 rounded-2xl font-bold tracking-wider text-lg transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 shadow-xl hover:shadow-2xl ${
                        isSubmitting
                          ? 'bg-slate-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-teal-600 via-teal-700 to-slate-700 hover:from-teal-700 hover:via-teal-800 hover:to-slate-800'
                      } text-white relative overflow-hidden group`}
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {isSubmitting ? (
                        <span className="flex items-center justify-center relative z-10">
                          <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          SENDING MESSAGE...
                        </span>
                      ) : (
                        <span className="relative z-10">SEND MESSAGE ✨</span>
                      )}
                    </button>

                    {/* Enhanced Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-6 bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-200 rounded-2xl shadow-lg">
                        <p className="text-teal-800 font-semibold text-center flex items-center justify-center">
                          <span className="mr-3 text-2xl">✓</span>
                          Message sent successfully! We'll get back to you within 24 hours.
                        </p>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl shadow-lg">
                        <p className="text-red-800 font-semibold text-center flex items-center justify-center">
                          <span className="mr-3 text-2xl">✗</span>
                          Something went wrong. Please try again or contact us directly.
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Enhanced Combined Contact & Map Card - Expanded Height */}
<div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/50 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-teal-50/50 rounded-3xl"></div>
  
  <div className="relative z-10 space-y-12">
    {/* Header Section */}
    <div className="text-center">
      <h3 
        className="text-4xl font-light text-slate-800 mb-6"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        Visit Our Studio
      </h3>
      <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-slate-600 rounded-full mx-auto mb-4"></div>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto">
        Experience our creative space where design meets innovation
      </p>
    </div>
    
    
    
    {/* Map Section with More Space */}
    <div className="space-y-6">
      
      <div className="w-full h-96 rounded-3xl overflow-hidden shadow-xl ring-4 ring-slate-200/50 hover:ring-teal-200/50 transition-all duration-300">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4118.650040256581!2d76.8391367!3d29.9516773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3b83dd0a5a13%3A0x8b2abc7cc9ceed3b!2sDUA%20PHARMACY!5e1!3m2!1sen!2sin!4v1749462301259!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-3xl hover:scale-[1.01] transition-transform duration-300"
        />
      </div>
    </div>
    
    {/* Action Section */}
    <div className="text-center space-y-4">
      <button 
        onClick={openGoogleMaps}
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 via-teal-700 to-slate-700 text-white rounded-2xl font-bold hover:from-teal-700 hover:via-teal-800 hover:to-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
      >
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        Open in Google Maps
      </button>
      {/* <p className="text-slate-500 text-sm">Get directions and plan your visit</p> */}
    </div>
    <div className="space-y-8">

      <div className="flex items-start space-x-6 group cursor-pointer p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-slate-800 mb-3 text-xl">Phone Number</h4>
          <p className="text-slate-600 text-lg font-semibold mb-2">+91 XXXXX XXXXX</p>
          <div className="flex items-center space-x-2">
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-6 group cursor-pointer p-6 rounded-2xl hover:bg-white/50 transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-slate-800 mb-1 text-xl">Email Address</h4>
          <p className="text-slate-600 text-lg font-semibold mb-2">hello@teekshagupta.com</p>
          <div className="flex items-center ">
          </div>
        </div>
      </div>
    </div>
  </div>
{/* </div> */}


              
            </div>
            
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="py-28 bg-gradient-to-br from-slate-900 via-teal-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px), radial-gradient(circle at 40% 40%, #ffffff 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <div className="mb-8">
            <span className="text-teal-300 text-sm font-semibold tracking-[0.3em] uppercase border-b-2 border-teal-400/50 pb-2">
              Ready to Begin?
            </span>
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Ready to Transform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 font-normal">
              Your Space?
            </span>
          </h2>
          
          <div className="flex justify-center mb-10">
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-teal-400 rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Let's schedule a consultation and bring your interior design dreams to life with our 
            <em className="text-yellow-300 font-medium"> personalized approach</em>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="group px-12 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <span className="relative z-10 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3M8 7v8a2 2 0 002 2h4a2 2 0 002-2V7" />
                </svg>
                Schedule Consultation
              </span>
            </button>
            
            <button className="group px-12 py-5 border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <span className="relative z-10 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View Portfolio
              </span>
            </button>
          </div>
          
          {/* Additional Trust Elements */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">100+ Projects</h4>
                <p className="text-slate-300 text-sm">Successfully Completed</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">24-Hour Response</h4>
                <p className="text-slate-300 text-sm">Quick Communication</p>
              </div>
              
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Client Satisfaction</h4>
                <p className="text-slate-300 text-sm">Our Top Priority</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-6 h-6 bg-teal-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
      </section>
    </div>
  );
};

export default ContactPage;
