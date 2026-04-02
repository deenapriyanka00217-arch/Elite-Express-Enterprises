/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Shield, 
  UserCheck, 
  Bug, 
  Camera, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Sun, 
  Moon,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const services = [
    {
      title: "Security & Housekeeping",
      description: "Professional security personnel and comprehensive housekeeping solutions for residential and commercial spaces.",
      icon: <Shield className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Pest Control Services",
      description: "Effective and safe pest management solutions to keep your environment hygienic and pest-free.",
      icon: <Bug className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "CCTV - Installation & AMC",
      description: "State-of-the-art surveillance systems with professional installation and reliable Annual Maintenance Contracts.",
      icon: <Camera className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (isDarkMode ? 'bg-slate-950/90 backdrop-blur-md shadow-lg py-3' : 'bg-white/90 backdrop-blur-md shadow-md py-3') : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Shield className="text-white w-6 h-6" />
              </div>
              <span className={`text-xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                ELITE <span className="text-amber-500">EXPRESS</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-amber-500 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-slate-800 text-amber-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a 
                href="#contact" 
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-amber-500/25 active:scale-95"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-slate-800 text-amber-400' : 'bg-slate-100 text-slate-600'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-100'}`}
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-4 text-base font-medium rounded-md ${isDarkMode ? 'text-slate-300 hover:bg-slate-900' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4">
                  <a 
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#F59E0B" d="M44.7,-76.4C58.3,-69.2,70.1,-58.1,78.6,-44.8C87.1,-31.5,92.3,-15.7,91.8,-0.3C91.3,15.1,85.1,30.2,76.2,43.9C67.3,57.6,55.7,69.9,41.9,77.5C28.1,85.1,14,88,0.2,87.6C-13.6,87.2,-27.2,83.5,-40.4,76.1C-53.6,68.7,-66.4,57.6,-74.8,44.1C-83.2,30.6,-87.2,15.3,-87.5,-0.2C-87.8,-15.7,-84.4,-31.4,-76.1,-45C-67.8,-58.6,-54.6,-70.1,-40.3,-76.9C-26,-83.7,-13,-85.8,0.4,-86.5C13.8,-87.2,27.6,-86.5,44.7,-76.4Z" transform="translate(200 200)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Trusted Security Solutions in Chennai
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Elite Protection for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Your Peace of Mind</span>
              </h1>
              <p className={`text-lg mb-10 max-w-lg leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Elite Express Enterprises provides premium security, housekeeping, and surveillance services tailored to your specific needs. Professional, reliable, and always alert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#services" 
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-amber-500/30 active:scale-95"
                >
                  Our Services <ArrowRight size={20} />
                </a>
                <a 
                  href="tel:9940207385" 
                  className={`px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all border-2 ${isDarkMode ? 'border-slate-800 hover:bg-slate-900 text-white' : 'border-slate-200 hover:bg-slate-50 text-slate-900'}`}
                >
                  <Phone size={20} className="text-amber-500" /> 9940207385
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-amber-500">10+</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Years Experience</div>
                </div>
                <div className={`w-px h-10 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
                <div>
                  <div className="text-3xl font-bold text-amber-500">500+</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Happy Clients</div>
                </div>
                <div className={`w-px h-10 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
                <div>
                  <div className="text-3xl font-bold text-amber-500">24/7</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Support</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200" 
                  alt="Security Surveillance" 
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-500 p-3 rounded-xl">
                      <Shield className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Elite Security Standards</h3>
                      <p className="text-white/80 text-sm">Certified professionals at your service</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-24 ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-4">Our Expertise</h2>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Comprehensive Solutions for Every Need</h3>
            <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
              We offer a wide range of services designed to protect your assets and maintain a clean, safe environment for your business or home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`group rounded-3xl overflow-hidden transition-all duration-300 ${isDarkMode ? 'bg-slate-950 border border-slate-800' : 'bg-white shadow-xl shadow-slate-200/50'}`}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                  <p className={`mb-6 text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {service.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-amber-500 font-bold text-sm hover:gap-3 transition-all">
                    Learn More <ChevronRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=600" 
                  alt="Team" 
                  className="rounded-2xl h-64 w-full object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-4 pt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" 
                    alt="Meeting" 
                    className="rounded-2xl h-48 w-full object-cover shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="bg-amber-500 p-6 rounded-2xl text-white">
                    <h5 className="text-4xl font-bold mb-1">100%</h5>
                    <p className="text-amber-100 text-sm">Client Satisfaction Rate</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/10 rounded-full -z-10 blur-3xl"></div>
            </div>

            <div>
              <h2 className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-4">About Us</h2>
              <h3 className="text-3xl lg:text-4xl font-bold mb-8">Leading the Way in Integrated Facility Services</h3>
              <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Elite Express Enterprises, led by <span className="font-bold text-amber-500">K. Karthick Narayanan</span>, has established itself as a premier service provider in Chennai. We believe in a holistic approach to security and facility management.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Highly trained and verified personnel",
                  "Advanced technology integration",
                  "Customized service packages",
                  "Quick response and 24/7 monitoring"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-amber-500 w-5 h-5 flex-shrink-0" />
                    <span className={`font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                  </div>
                ))}
              </div>

              <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    K
                  </div>
                  <div>
                    <h4 className="font-bold">K. Karthick Narayanan</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Proprietor & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-4">Contact Us</h2>
              <h3 className="text-3xl lg:text-4xl font-bold mb-8">Ready to Secure Your Future?</h3>
              <p className={`mb-12 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Get in touch with us today for a free consultation and quote. Our team is ready to help you find the perfect solution.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <a href="tel:9940207385" className={`hover:text-amber-500 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      +91 9940207385
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <a href="mailto:elitexpressenterprises2022@gmail.com" className={`hover:text-amber-500 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      elitexpressenterprises2022@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Office</h4>
                    <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                      8/3, N. Maada St, Madambakkam,<br />Chennai – 600126
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-3xl ${isDarkMode ? 'bg-slate-950 border border-slate-800' : 'bg-white shadow-2xl shadow-slate-200/50'}`}>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-amber-500 outline-none transition-all ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-amber-500 outline-none transition-all ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Service Interested In</label>
                  <select className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-amber-500 outline-none transition-all ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}>
                    <option>Security & Housekeeping</option>
                    <option>Pest Control Services</option>
                    <option>CCTV Installation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we help you?" 
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-amber-500 outline-none transition-all ${isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                  ></textarea>
                </div>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-amber-500/30 transition-all active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <Shield className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                ELITE <span className="text-amber-500">EXPRESS</span>
              </span>
            </div>
            
            <div className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              © 2026 Elite Express Enterprises. All rights reserved.
            </div>

            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-medium hover:text-amber-500 transition-colors ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
