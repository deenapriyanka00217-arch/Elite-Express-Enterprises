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
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Instagram,
  ArrowUp,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- ASSET LINKS (GitHub Storage Guide) ---
// To use GitHub as storage:
// 1. Upload your image to a GitHub repo
// 2. Click the file -> Click "Raw"
// 3. Use that URL here. Format: https://raw.githubusercontent.com/USER/REPO/BRANCH/FILE
const ASSETS = {
  logo: "https://raw.githubusercontent.com/deenapriyanka00217-arch/Elite-Express-Enterprises/main/images/logo.jpg",
  hero: "https://raw.githubusercontent.com/deenapriyanka00217-arch/Elite-Express-Enterprises/main/images/Hero%20-%20K.%20Karthick%20Narayanan.png",
  service1: "https://raw.githubusercontent.com/deenapriyanka00217-arch/Elite-Express-Enterprises/main/images/Security%20%26%20Housekeeping.png",
  service2: "https://raw.githubusercontent.com/deenapriyanka00217-arch/Elite-Express-Enterprises/main/images/Pest%20Control%20Services.png",
  service3: "https://raw.githubusercontent.com/deenapriyanka00217-arch/Elite-Express-Enterprises/main/images/CCTV%20-%20Installation%20%26%20AMC.png",
};

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "IT Park Manager",
    content: "Elite Express has transformed our office security. Their personnel are professional, well-trained, and always on time. The peace of mind they provide is invaluable.",
    avatar: "RK"
  },
  {
    name: "Priya S.",
    role: "Homeowner",
    content: "The pest control service was exceptional. We haven't seen a single pest since their first visit. They were very thorough and used safe products around my kids.",
    avatar: "PS"
  },
  {
    name: "Vikram",
    role: "Retail Store Owner",
    content: "Highly recommend their CCTV installation. The video quality is top-notch and the AMC service is very reliable. They respond quickly whenever we have questions.",
    avatar: "V"
  },
  {
    name: "Anjali Devi",
    role: "Apartment Association President",
    content: "We've been using their housekeeping services for over a year. The staff is diligent and the common areas have never looked cleaner. Excellent management.",
    avatar: "AD"
  },
  {
    name: "Suresh Raina",
    role: "Warehouse Manager",
    content: "Their security guards are incredibly alert. We had a minor incident last month that was handled with extreme professionalism and speed. Truly elite service.",
    avatar: "SR"
  },
  {
    name: "Meera Krishnan",
    role: "Boutique Owner",
    content: "The CCTV setup they installed is so easy to use. I can monitor my shop from my phone anywhere. The installation was clean and very professional.",
    avatar: "MK"
  },
  {
    name: "Dr. Arun",
    role: "Clinic Director",
    content: "Maintaining hygiene is critical for my clinic. Elite Express's pest control and cleaning services are top-tier. They understand the specific needs of healthcare spaces.",
    avatar: "DA"
  },
  {
    name: "Karthik S.",
    role: "Tech Startup Founder",
    content: "Fast, reliable, and tech-savvy. They integrated our security systems perfectly. Their customer support is always available when we need them.",
    avatar: "KS"
  },
  {
    name: "Shanthi",
    role: "Villa Owner",
    content: "I feel much safer at home now. Their security personnel are polite yet firm. The housekeeping team is also very trustworthy and efficient.",
    avatar: "S"
  },
  {
    name: "Ganesh",
    role: "Restaurant Owner",
    content: "Pest control is a major concern for us. Since partnering with Elite Express, we've had zero issues. Their regular maintenance visits are always on schedule.",
    avatar: "G"
  }
];

function TestimonialScroll({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-3xl">
      <motion.div
        animate={{
          y: [0, -1200],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6 pr-4"
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div 
            key={i} 
            className={`p-6 rounded-2xl border transition-colors ${
              isDarkMode 
                ? 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/60' 
                : 'bg-white border-slate-100 shadow-sm hover:shadow-md'
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-amber-500/20">
                {t.avatar}
              </div>
              <div>
                <h5 className="font-bold text-sm">{t.name}</h5>
                <p className="text-xs text-amber-500 font-medium">{t.role}</p>
              </div>
            </div>
            <p className={`text-sm italic leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              "{t.content}"
            </p>
          </div>
        ))}
      </motion.div>
      
      {/* Fade Gradients */}
      <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b pointer-events-none z-10 ${isDarkMode ? 'from-slate-950 to-transparent' : 'from-white to-transparent'}`}></div>
      <div className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t pointer-events-none z-10 ${isDarkMode ? 'from-slate-950 to-transparent' : 'from-white to-transparent'}`}></div>
    </div>
  );
}

export default function App() {
  const [isDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroTextIndex, setHeroTextIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const heroPhrases = [
    "Security",
    "Housekeeping",
    "CCTV",
    "Pest Control",
    "Risk Control"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroTextIndex((prev) => (prev + 1) % heroPhrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      title: "Security & Housekeeping",
      description: "Professional security personnel and comprehensive housekeeping solutions for residential and commercial spaces.",
      icon: <Shield className="w-8 h-8" />,
      image: ASSETS.service1
    },
    {
      title: "Pest Control Services",
      description: "Effective and safe pest management solutions to keep your environment hygienic and pest-free.",
      icon: <Bug className="w-8 h-8" />,
      image: ASSETS.service2
    },
    {
      title: "CCTV - Installation & AMC",
      description: "State-of-the-art surveillance systems with professional installation and reliable Annual Maintenance Contracts.",
      icon: <Camera className="w-8 h-8" />,
      image: ASSETS.service3
    }
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Career', href: '#career' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20 overflow-hidden">
                <img 
                  src={ASSETS.logo} 
                  alt="Elite Express Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight flex flex-col sm:flex-row sm:items-center leading-none sm:leading-normal text-slate-900">
                Elite Express <span className="text-amber-500 sm:ml-1.5">Enterprises</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-wide transition-colors hover:text-amber-500 text-slate-700"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:9940207385" 
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-amber-500/25 active:scale-95 flex items-center gap-2"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-900"
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
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-4 text-base font-bold text-slate-700 hover:text-amber-500 hover:bg-slate-50 rounded-xl transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 space-y-3 px-3">
                  <a 
                    href="tel:9940207385"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-amber-500 text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                  >
                    <Phone size={18} /> Call Now
                  </a>
                  <a 
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center px-6 py-4 rounded-xl font-bold border border-slate-200 text-slate-900 hover:bg-slate-50 transition-all"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating Buttons & Scroll to Top */}
      <div className="fixed right-4 bottom-6 z-40 flex flex-col-reverse gap-4 items-center">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={scrollToTop}
              className="bg-amber-500 text-white p-3 rounded-full shadow-lg hover:bg-amber-600 transition-colors flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.a
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          href="https://wa.me/919940207385"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group relative"
          title="WhatsApp Us"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="absolute right-full mr-2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
            WhatsApp Us
          </span>
        </motion.a>

        <motion.a
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          href="https://www.instagram.com/elite_express45?igsh=Mmoyd2VucXl2eHZ2"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group relative"
          title="Follow on Instagram"
        >
          <Instagram size={24} />
          <span className="absolute right-full mr-2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
            Instagram
          </span>
        </motion.a>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-dot-pattern text-slate-200/40 opacity-50"></div>
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#F59E0B" d="M44.7,-76.4C58.3,-69.2,70.1,-58.1,78.6,-44.8C87.1,-31.5,92.3,-15.7,91.8,-0.3C91.3,15.1,85.1,30.2,76.2,43.9C67.3,57.6,55.7,69.9,41.9,77.5C28.1,85.1,14,88,0.2,87.6C-13.6,87.2,-27.2,83.5,-40.4,76.1C-53.6,68.7,-66.4,57.6,-74.8,44.1C-83.2,30.6,-87.2,15.3,-87.5,-0.2C-87.8,-15.7,-84.4,-31.4,-76.1,-45C-67.8,-58.6,-54.6,-70.1,-40.3,-76.9C-26,-83.7,-13,-85.8,0.4,-86.5C13.8,-87.2,27.6,-86.5,44.7,-76.4Z" transform="translate(200 200)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="transition-all duration-700 ease-out"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Trusted Security Solutions in Chennai
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                <span className="block mb-2 sm:mb-4">Elite Express:</span>
                <span className="relative inline-block min-h-[1.2em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={heroTextIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 pb-2"
                    >
                      {heroPhrases[heroTextIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
              <p className={`text-lg mb-10 max-w-lg leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Elite Express Enterprises provides premium security, housekeeping, and surveillance services tailored to your specific needs. Professional, reliable, and always alert.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
                <a 
                  href="tel:9940207385" 
                  className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-bold text-lg transition-all bg-slate-950 border-2 border-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] active:scale-95"
                >
                  <Phone size={20} className="text-amber-500 shrink-0" />
                  <span className="tracking-tight">9940207385</span>
                </a>
                <a 
                  href="tel:04422280021" 
                  className={`group flex-1 sm:flex-none inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-bold text-lg transition-all border-2 ${isDarkMode ? 'bg-slate-900/60 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'} hover:border-amber-500 active:scale-95 shadow-sm`}
                >
                  <Phone size={20} className="text-amber-500 shrink-0" />
                  <span className="whitespace-nowrap tracking-tight">044 22280021</span>
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <div className="text-3xl font-bold text-amber-500">Since</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>2022</div>
                </motion.div>
                <div className={`w-px h-10 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                >
                  <div className="text-3xl font-bold text-amber-500">500+</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Happy Clients</div>
                </motion.div>
                <div className={`w-px h-10 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                >
                  <div className="text-3xl font-bold text-amber-500">99%</div>
                  <div className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>Success Rate</div>
                </motion.div>
              </div>
            </div>
            
            <div
              className="relative transition-all duration-700 delay-200 ease-out"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={ASSETS.hero} 
                  alt="Elite Express Services" 
                  className="w-full h-[400px] md:h-[500px] max-h-[60vh] md:max-h-none object-cover object-top transition-transform duration-700 hover:scale-105"
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
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section id="services" className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
        <div className={`absolute inset-0 -z-10 bg-grid-pattern opacity-30 ${isDarkMode ? 'text-slate-800' : 'text-slate-200'}`}></div>
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
              <div
                key={index}
                className={`group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col ${isDarkMode ? 'bg-slate-950 border border-slate-800' : 'bg-white shadow-xl shadow-slate-200/50'}`}
              >
                <div className={`h-56 overflow-hidden ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                  <p className={`mb-4 text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {service.description}
                  </p>
                  <div className="mt-auto flex flex-col gap-3">
                    <a 
                      href={`https://wa.me/919940207385?text=Hi, I'm interested in your ${service.title} service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-[0_0_15px_rgba(57,255,20,0.5)] hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] active:scale-95 w-full"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <div className={`absolute inset-0 -z-10 bg-dot-pattern opacity-20 ${isDarkMode ? 'text-slate-800' : 'text-slate-300'}`}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="flex items-center justify-center mb-8 sm:mb-0"
                >
                  <div className="w-40 h-40 sm:w-48 sm:h-48 bg-white rounded-full p-3 border-8 border-amber-500/10 flex items-center justify-center overflow-hidden transform hover:rotate-3 transition-transform duration-500 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent pointer-events-none"></div>
                    <img 
                      src={ASSETS.logo} 
                      alt="Elite Express Logo" 
                      className="w-full h-full object-contain rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className=""
                >
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="bg-amber-500 p-6 sm:p-8 rounded-2xl text-white flex flex-col items-center justify-center text-center"
                    >
                      <h5 className="text-3xl sm:text-5xl font-bold mb-2">99%</h5>
                      <p className="text-amber-100 text-[10px] sm:text-sm uppercase font-bold tracking-widest">Success Rate</p>
                    </motion.div>
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                      className={`${isDarkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-100'} p-6 sm:p-8 rounded-2xl flex flex-col items-center justify-center text-center`}
                    >
                      <h5 className="text-3xl sm:text-5xl font-bold mb-2 text-amber-500">500+</h5>
                      <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-500'} text-[10px] sm:text-sm uppercase font-bold tracking-widest`}>Happy Clients</p>
                    </motion.div>
                  </div>
                </motion.div>
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

          {/* Testimonials Section */}
          <div className="mt-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <TestimonialScroll isDarkMode={isDarkMode} />
              </div>
              <div className="order-1 lg:order-2">
                <h4 className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-2">Testimonials</h4>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">What Our Clients Say</h3>
                <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  We take pride in delivering exceptional service. Hear from our diverse range of clients about how Elite Express Enterprises has improved their security and facility management.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className={`px-4 py-2 rounded-full border text-sm font-medium ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                    100% Satisfaction
                  </div>
                  <div className={`px-4 py-2 rounded-full border text-sm font-medium ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                    24/7 Support
                  </div>
                  <div className={`px-4 py-2 rounded-full border text-sm font-medium ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                    Verified Staff
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="career" className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
        <div className={`absolute inset-0 -z-10 bg-dot-pattern opacity-20 ${isDarkMode ? 'text-slate-800' : 'text-slate-300'}`}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-4">Join Our Team</h2>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Career Vacancy is Going On</h3>
            <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
              We are looking for dedicated professionals to join our growing team. If you are passionate about security and excellence, we want to hear from you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              "Aso - security",
              "Security guard",
              "House keeping executive",
              "Housekeeping supervisor",
              "Pest control technician",
              "Field officers",
              "Cctv technicians",
              "Marketing executives"
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`p-6 rounded-2xl border flex items-center gap-4 transition-all hover:border-amber-500 group ${isDarkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-100 shadow-sm'}`}
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <UserCheck size={20} />
                </div>
                <span className="font-bold text-sm sm:text-base">{job}</span>
              </motion.div>
            ))}
          </div>

          <div className={`p-8 rounded-3xl text-center border-2 border-dashed ${isDarkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-amber-50/50 border-amber-200'}`}>
            <h4 className="text-xl font-bold mb-4">Interested in any of these roles?</h4>
            <p className={`mb-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              For more information and to apply, please contact us directly on WhatsApp.
            </p>
            <a 
              href="https://wa.me/919940207385?text=Hi, I'm interested in the Career vacancies at Elite Express Enterprises."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl shadow-green-500/20 active:scale-95"
            >
              <MessageCircle size={22} />
              Contact us in WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
        <div className={`absolute inset-0 -z-10 bg-grid-pattern opacity-30 ${isDarkMode ? 'text-slate-800' : 'text-slate-200'}`}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
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
                    <div className="flex flex-col">
                      <a href="tel:9940207385" className={`hover:text-amber-500 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        +91 9940207385
                      </a>
                      <a href="tel:04422280021" className={`hover:text-amber-500 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        044 22280021
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <a href="mailto:elitexpressenterprises2022@gmail.com" className={`hover:text-amber-500 transition-colors break-all sm:break-normal ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
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
                    <p className={`break-words ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      8/3, N. Maada St, Madambakkam,<br />Chennai – 600126
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-6 sm:p-12 rounded-3xl flex flex-col items-center text-center relative overflow-hidden ${isDarkMode ? 'bg-slate-950 border border-slate-800' : 'bg-white shadow-2xl shadow-slate-200/50'}`}>
              <div className={`absolute inset-0 -z-10 bg-dot-pattern opacity-10 ${isDarkMode ? 'text-slate-800' : 'text-slate-200'}`}></div>
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-8">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-4">Book on WhatsApp</h4>
              <p className={`mb-8 max-w-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Skip the forms! Click the button below to chat with us directly on WhatsApp for immediate assistance and quotes.
              </p>
              <a 
                href="https://wa.me/919940207385?text=Hi, I'm interested in your services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 sm:py-5 sm:px-10 rounded-2xl transition-all shadow-xl shadow-green-500/30 active:scale-95 text-base sm:text-lg w-full sm:w-auto"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 relative overflow-hidden border-t ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-100'}`}>
        <div className={`absolute inset-0 -z-10 bg-dot-pattern opacity-10 ${isDarkMode ? 'text-slate-800' : 'text-slate-200'}`}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src={ASSETS.logo} 
                  alt="Elite Express Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-lg font-bold tracking-tight flex flex-col sm:flex-row sm:items-center leading-none sm:leading-normal">
                Elite Express <span className="text-amber-500 sm:ml-1.5">Enterprises</span>
              </span>
            </div>
            
            <div className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              © 2026 Elite Express Enterprises. All rights reserved.
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <a 
                href="tel:9940207385" 
                className={`flex items-center gap-2 hover:text-amber-500 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}
              >
                <Phone size={16} className="text-amber-500" /> +91 9940207385
              </a>
              <a 
                href="tel:04422280021" 
                className={`flex items-center gap-2 hover:text-amber-500 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}
              >
                <Phone size={16} className="text-amber-500" /> 044 22280021
              </a>
              <div className="flex gap-6 mt-2">
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
        </div>
      </footer>
    </div>
  );
}
