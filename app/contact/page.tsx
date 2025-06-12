'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Phone, Mail, Clock, Users, Zap, Award, Home, Building, Wrench, MessageCircle, User, AtSign, Hash, Lightbulb } from 'lucide-react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { BiNavigation } from "react-icons/bi";


interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  subject: string;
  vision: string;
}

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    subject: '',
    vision: ''
  });
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const getProjectIcon = (type: string) => {
    switch(type) {
      case 'residential': return <Home className="w-4 h-4 text-gray-600" />;
      case 'commercial': return <Building className="w-4 h-4 text-gray-600" />;
      case 'renovation': return <Wrench className="w-4 h-4 text-gray-600" />;
      case 'consultation': return <MessageCircle className="w-4 h-4 text-gray-600" />;
      default: return <Building className="w-4 h-4 text-gray-400" />;
    }
  };

  const projectOptions = [
    { value: 'residential', label: 'Residential Design', icon: Home, description: 'Homes & Living Spaces' },
    { value: 'commercial', label: 'Commercial Design', icon: Building, description: 'Offices & Retail Spaces' },
    { value: 'renovation', label: 'Renovation Project', icon: Wrench, description: 'Remodeling & Updates' },
    { value: 'consultation', label: 'Design Consultation', icon: MessageCircle, description: 'Expert Advice & Planning' }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/pj.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div>
        
        {/* Enhanced Black Translucent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-black/70"></div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 border border-white rounded-full animate-spin" style={{animationDuration: '40s'}}></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 border border-white rounded-full animate-spin" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white rounded-full animate-pulse"></div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-40 right-40 w-4 h-4 bg-white rotate-45 animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-60 left-60 w-3 h-3 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-2/3 right-1/4 w-6 h-1 bg-white animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center px-8 transform transition-all duration-2000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="mb-8">
            <span className="text-xs tracking-[0.6em] text-gray-300 font-light uppercase mb-8 block animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              Contact Excellence
            </span>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-none mb-8">
              <span className={`inline-block text-white transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{animationDelay: '0.8s'}}>
                GET IN
              </span>
              <br />
              <span className={`inline-block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent font-thin transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{animationDelay: '1.1s'}}>
                TOUCH
              </span>
              <br />
              <span className={`inline-block text-white font-extralight transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{animationDelay: '1.4s'}}>
                WITH US NOW
              </span>
            </h1>
            
            <div className={`w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-12 transform transition-all duration-1500 ease-out ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} style={{animationDelay: '1.7s'}}></div>
            
            <p className={`text-xl sm:text-2xl text-gray-300 font-light mb-4 transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{animationDelay: '2s'}}>
              BUILD THE HOME OF YOUR DREAMS
            </p>
            
            <p className={`text-lg text-gray-400 font-light transform transition-all duration-1500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{animationDelay: '2.3s'}}>
              Interior Design Excellence
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white opacity-60" />
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <span className="text-xs tracking-[0.4em] text-gray-600 font-light uppercase mb-8 block">
            Our Mission
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-gray-900 mb-12">
            Let's Create Something
            <br />
            <span className="font-thin italic bg-gradient-to-r from-gray-900 via-black to-gray-700 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>
          
          <div className="w-40 h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-12"></div>
          
          <p className="text-lg text-gray-700 font-light max-w-4xl mx-auto leading-relaxed">
            Share your vision with us and let our expert team transform your space into a <em className="font-normal">masterpiece</em> that reflects your unique style and personality.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            
            {/* Form Section with Glowing Moonlight Border */}
            <div className="relative">
              {/* Glowing Border Container */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-200/50 via-gray-300/60 to-gray-200/50 rounded-2xl blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-gray-300/40 via-gray-400/50 to-gray-300/40 rounded-xl blur-lg opacity-80"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-400/30 via-gray-500/40 to-gray-400/30 rounded-lg blur-md opacity-90"></div>
              
              {/* Form Content */}
              <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-lg p-12 shadow-2xl shadow-gray-300/20">
                <div className="space-y-12">
                  <div className="text-center lg:text-left">
                    <span className="text-xs tracking-[0.4em] text-gray-600 font-light uppercase mb-6 block">
                      Start Your Journey
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extralight tracking-tight text-gray-900 mb-8">
                      Tell us about your <span className="font-thin italic">dream space</span>
                    </h3>
                  </div>

                  <form className="space-y-8">
                    {/* Full Name */}
                    <div className="relative group">
                      <div className="absolute left-0 top-4 flex items-center">
                        <User className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('fullName')}
                        onBlur={() => setFocusedField('')}
                        className="w-full pl-8 pr-0 py-4 bg-transparent border-0 border-b border-gray-300 text-gray-900 placeholder-transparent focus:border-black focus:outline-none transition-all duration-300"
                        placeholder="Full Name"
                        required
                      />
                      <label className={`absolute left-8 transition-all duration-300 pointer-events-none ${
                        focusedField === 'fullName' || formData.fullName 
                          ? '-top-6 text-xs text-black font-medium' 
                          : 'top-4 text-gray-500'
                      }`}>
                        Full Name *
                      </label>
                      <div className={`absolute bottom-0 left-0 h-px bg-black transition-all duration-300 ${
                        focusedField === 'fullName' ? 'w-full' : 'w-0'
                      }`}></div>
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <div className="absolute left-0 top-4 flex items-center">
                        <AtSign className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        className="w-full pl-8 pr-0 py-4 bg-transparent border-0 border-b border-gray-300 text-gray-900 placeholder-transparent focus:border-black focus:outline-none transition-all duration-300"
                        placeholder="Email Address"
                        required
                      />
                      <label className={`absolute left-8 transition-all duration-300 pointer-events-none ${
                        focusedField === 'email' || formData.email 
                          ? '-top-6 text-xs text-black font-medium' 
                          : 'top-4 text-gray-500'
                      }`}>
                        Email Address *
                      </label>
                      <div className={`absolute bottom-0 left-0 h-px bg-black transition-all duration-300 ${
                        focusedField === 'email' ? 'w-full' : 'w-0'
                      }`}></div>
                    </div>

                    {/* Phone */}
                    <div className="relative group">
                      <div className="absolute left-0 top-4 flex items-center">
                        <Phone className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField('')}
                        className="w-full pl-8 pr-0 py-4 bg-transparent border-0 border-b border-gray-300 text-gray-900 placeholder-transparent focus:border-black focus:outline-none transition-all duration-300"
                        placeholder="Phone Number"
                      />
                      <label className={`absolute left-8 transition-all duration-300 pointer-events-none ${
                        focusedField === 'phone' || formData.phone 
                          ? '-top-6 text-xs text-black font-medium' 
                          : 'top-4 text-gray-500'
                      }`}>
                        Phone Number
                      </label>
                      <div className={`absolute bottom-0 left-0 h-px bg-black transition-all duration-300 ${
                        focusedField === 'phone' ? 'w-full' : 'w-0'
                      }`}></div>
                    </div>

                    {/* Project Type - Redesigned as Card Selection */}
                    <div className="space-y-4">
                      <label className="text-xs tracking-wide text-gray-600 uppercase font-medium block">
                        Project Type
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {projectOptions.map((option) => {
                          const IconComponent = option.icon;
                          return (
                            <div
                              key={option.value}
                              className={`relative cursor-pointer group transition-all duration-200 ${
                                formData.projectType === option.value
                                  ? 'ring-2 ring-black bg-gray-50'
                                  : 'hover:bg-gray-50 hover:shadow-md'
                              }`}
                              onClick={() => setFormData({...formData, projectType: option.value})}
                            >
                              <div className="p-4 border border-gray-200 rounded-lg">
                                <div className="flex items-center space-x-3 mb-2">
                                  <IconComponent className={`w-5 h-5 transition-colors ${
                                    formData.projectType === option.value 
                                      ? 'text-black' 
                                      : 'text-gray-400 group-hover:text-gray-600'
                                  }`} />
                                  <span className={`font-medium text-sm transition-colors ${
                                    formData.projectType === option.value 
                                      ? 'text-black' 
                                      : 'text-gray-700'
                                  }`}>
                                    {option.label}
                                  </span>
                                </div>
                                <p className={`text-xs transition-colors ${
                                  formData.projectType === option.value 
                                    ? 'text-gray-600' 
                                    : 'text-gray-500'
                                }`}>
                                  {option.description}
                                </p>
                                {formData.projectType === option.value && (
                                  <div className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full"></div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="relative group">
                      <div className="absolute left-0 top-4 flex items-center">
                        <Hash className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField('')}
                        className="w-full pl-8 pr-0 py-4 bg-transparent border-0 border-b border-gray-300 text-gray-900 placeholder-transparent focus:border-black focus:outline-none transition-all duration-300"
                        placeholder="Subject"
                        required
                      />
                      <label className={`absolute left-8 transition-all duration-300 pointer-events-none ${
                        focusedField === 'subject' || formData.subject 
                          ? '-top-6 text-xs text-black font-medium' 
                          : 'top-4 text-gray-500'
                      }`}>
                        Subject *
                      </label>
                      <div className={`absolute bottom-0 left-0 h-px bg-black transition-all duration-300 ${
                        focusedField === 'subject' ? 'w-full' : 'w-0'
                      }`}></div>
                    </div>

                    {/* Vision */}
                    <div className="relative group">
                      <div className="absolute left-0 top-4 flex items-center">
                        <Lightbulb className="w-4 h-4 text-gray-400" />
                      </div>
                      <textarea
                        name="vision"
                        value={formData.vision}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('vision')}
                        onBlur={() => setFocusedField('')}
                        rows={4}
                        className="w-full pl-8 pr-0 py-4 bg-transparent border-0 border-b border-gray-300 text-gray-900 placeholder-transparent focus:border-black focus:outline-none transition-all duration-300 resize-none"
                        placeholder="Your Vision"
                        required
                      />
                      <label className={`absolute left-8 transition-all duration-300 pointer-events-none ${
                        focusedField === 'vision' || formData.vision 
                          ? '-top-6 text-xs text-black font-medium' 
                          : 'top-4 text-gray-500'
                      }`}>
                        Your Vision *
                      </label>
                      <div className={`absolute bottom-0 left-0 h-px bg-black transition-all duration-300 ${
                        focusedField === 'vision' ? 'w-full' : 'w-0'
                      }`}></div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-8">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="group relative overflow-hidden bg-black text-white px-12 py-4 font-light tracking-wide hover:bg-gray-900 transition-all duration-500 transform hover:scale-105 rounded-lg shadow-lg hover:shadow-xl"
                      >
                        <span className="relative z-10">Start Your Journey</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info & Map Section */}
            <div className="space-y-16">
              
              {/* Visit Our Studio */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-12 border border-gray-100 rounded-lg shadow-lg">
                <h4 className="text-2xl font-extralight tracking-tight text-gray-900 mb-8">
                  Visit Our <span className="font-thin italic">Studio</span>
                </h4>
                <p className="text-gray-600 font-light mb-12 leading-relaxed">
                  Experience our creative space where design meets innovation
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="p-3 bg-black text-white group-hover:bg-gray-800 transition-colors duration-300 rounded-lg">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs tracking-wide text-gray-500 uppercase font-light">Phone Number</p>
                      <p className="text-gray-900 font-light">+91 XXXXX XXXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="p-3 bg-black text-white group-hover:bg-gray-800 transition-colors duration-300 rounded-lg">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs tracking-wide text-gray-500 uppercase font-light">Email Address</p>
                      <p className="text-gray-900 font-light">hello@teekshagupta.com</p>
                    </div>
                  </div>
                </div>
              </div>


{/* Embedded Map */}
<div className="space-y-6">
  <div className="relative overflow-hidden border-4 border-black rounded-lg shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.235984380159!2d76.84613019999999!3d30.683635799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f94a39b70cf8b%3A0xc4d4eeec8e4d7785!2sArchitect%20Teeksha%20Gupta!5e0!3m2!1sen!2sin!4v1749535225995!5m2!1sen!2sin"
      width="100%"
      height="600"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-lg"
    />
  </div>
  
  {/* Open in Maps Button - Centered */}
  <div className="flex justify-center">
    <a 
      href="https://www.google.com/maps/place/Architect+Teeksha+Gupta/@30.683636,76.8461302,17z/data=!3m1!4b1!4m6!3m5!1s0x390f94a39b70cf8b:0xc4d4eeec8e4d7785!8m2!3d30.683636!4d76.8461302!16s%2Fg%2F11y3k8qx8q"
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center gap-3 overflow-hidden border-2 border-black bg-white text-black font-medium py-3 px-8 transition-colors duration-300 group"
    >
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        Open in Maps
      </span>
      <BiNavigation className="relative z-10 w-5 h-5 group-hover:text-white transition-colors duration-300" />
      <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
    </a>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Begin CTA Section */}
<div className="py-32 relative overflow-hidden" style={{backgroundImage: 'url(33.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
  {/* Dark Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div>
  
  {/* Enhanced Black Translucent Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>

  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-20 left-1/4 w-64 h-64 border border-white rounded-full animate-pulse"></div>
    <div className="absolute bottom-20 right-1/4 w-48 h-48 border border-white rounded-full animate-spin" style={{animationDuration: '50s'}}></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
    <span className="text-xs tracking-[0.4em] text-gray-400 font-light uppercase mb-8 block">
      Ready to Begin?
    </span>
    
    <h3 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white mb-12">
      Ready to Transform
      <br />
      <span className="font-thin italic bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
        Your Space?
      </span>
    </h3>
    
    <div className="w-40 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-12"></div>
    
    <p className="text-lg text-gray-300 font-light max-w-4xl mx-auto leading-relaxed mb-16">
      Let's schedule a consultation and bring your interior design dreams to life with our <em className="font-normal">personalized approach</em>
    </p>

    {/* Stats */}
    <div className="grid md:grid-cols-3 gap-12 mt-24">
      <div className="text-center group">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 mb-6 group-hover:bg-white/20 transition-all duration-300 rounded-lg">
          <Award className="w-8 h-8 text-white" />
        </div>
        <h4 className="text-3xl font-light text-white mb-2">100+</h4>
        <p className="text-sm tracking-wide text-gray-400 uppercase font-light">Projects Successfully Completed</p>
      </div>
      
      <div className="text-center group">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 mb-6 group-hover:bg-white/20 transition-all duration-300 rounded-lg">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h4 className="text-3xl font-light text-white mb-2">24-Hour</h4>
        <p className="text-sm tracking-wide text-gray-400 uppercase font-light">Response Quick Communication</p>
      </div>
      
      <div className="text-center group">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 mb-6 group-hover:bg-white/20 transition-all duration-300 rounded-lg">
          <Users className="w-8 h-8 text-white" />
        </div>
        <h4 className="text-3xl font-light text-white mb-2">100%</h4>
        <p className="text-sm tracking-wide text-gray-400 uppercase font-light">Client Satisfaction Our Top Priority</p>
      </div>
    </div>
  </div>
</div>

      <Footer/>
    </div>

  );
};

export default ContactPage;