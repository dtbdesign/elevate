'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGoogle, 
  FaCoffee,
  FaCookie,
  FaSmoking,
  FaStar,
  FaBars,
  FaTimes,
  FaChevronDown
} from 'react-icons/fa'

// ============= EDITABLE CONSTANTS =============
const SITE_CONFIG = {
  businessName: 'Elevate Vape & Market',
  tagline: 'Sip. Snack. Smoke. Repeat.',
  phone: '(629) 777-2828',
  phoneRaw: '6297772828',
  location: 'Nashville, TN',
  address: '2037 Jefferson St, Nashville, TN',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.0!2d-86.7846!3d36.1747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864665b8c0a7e47%3A0x1234567890!2s2037%20Jefferson%20St%2C%20Nashville%2C%20TN%2037208!5e0!3m2!1sen!2sus!4v1234567890',
  aboutText: 'Elevate Vape & Market is a leading convenience store and vape shop in Nashville, TN, that serves the surrounding areas with a wide range of products. Founded with a mission to elevate customer experience, we specialize in offering top-quality vapes, tobacco products, beer, snacks, soft drinks, water, energy drinks, coffee, bread, and milk. Our store is a one-stop shop for all your daily needs, providing a convenient and welcoming environment for our valued customers. Visit Elevate Vape & Market today for a unique and satisfying shopping experience.',
  socialLinks: {
    instagram: 'https://instagram.com/elevatevapenashville',
    google: 'https://www.google.com/maps/place/Elevate+Vape+%26+Market/@36.1685137,-86.8119678,1282m/data=!3m1!1e3!4m16!1m9!3m8!1s0x886467291fdee82d:0x6a644c7c87aa284c!2sElevate+Vape+%26+Market!8m2!3d36.1685137!4d-86.8119678!9m1!1b1!16s%2Fg%2F11yjt6vxbf!3m5!1s0x886467291fdee82d:0x6a644c7c87aa284c!8m2!3d36.1685137!4d-86.8119678!16s%2Fg%2F11yjt6vxbf?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
    facebook: 'https://facebook.com/elevatevapenashville'
  },
  galleryImages: [
    { src: '/Image1.jpg', alt: 'Store Interior 1' },
    { src: '/Image2.jpg', alt: 'Store Interior 2' },
    { src: '/Image3.jpg', alt: 'Store Interior 3' }
  ],
  testimonials: [
    {
      name: 'Ronald Turner',
      date: '12/02/2025',
      rating: 5,
      text: 'They always have what I need when I stop by. I appreciate the help when I have questions. Good prices and selections'
    },
    {
      name: 'Eileen Hannigan',
      date: '11/18/2025',
      rating: 5,
      text: 'The owners are the friendliest people I have ever meet. The store is clean and always smells amazing. Owners take proud in their business and will go out of their way to make sure they have everything you need. Definitely a store that cares about their customers! 1000/10'
    },
    {
      name: "A'Laysia Cross",
      date: '10/21/2025',
      rating: 5,
      text: 'Great shop, has everything you need and the owner is extremely nice! 👍🏽'
    },
    {
      name: 'Esterline Buchanan',
      date: '10/15/2025',
      rating: 5,
      text: 'Great customer service!'
    },
    {
      name: 'Jessica Bratcher',
      date: '10/10/2025',
      rating: 5,
      text: 'Great place super nice inside and friendly staff💕💕'
    }
  ],
  googleReviewsUrl: 'https://www.google.com/maps/place/Elevate+Vape+%26+Market/data=!4m2!3m1!1s0x0:0x6a644c7c87aa284c?sa=X&ved=1t:2428&hl=en&ictx=111',
  faqs: [
    {
      question: 'Can I find popular vape brands at your store?',
      answer: 'We stock top-quality vape brands. For specific availability, please call or visit the store.'
    },
    {
      question: 'Do you sell alcohol?',
      answer: 'Yes, we offer a selection of beer.'
    },
    {
      question: 'Do you carry everyday grocery items?',
      answer: 'Yes, we stock essentials like bread, milk, snacks, and beverages and more.'
    },
    {
      question: 'What makes Elevate Vape & Market different from other stores?',
      answer: "We're committed to elevating your shopping experience with a welcoming environment, quality products, and friendly service."
    },
    {
      question: 'Do you sell tobacco products?',
      answer: 'Yes, we carry a variety of tobacco products. You must be 21 or older with valid ID to purchase.'
    }
  ]
}

// ============= COMPONENTS =============

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#tour', label: '360 Tour' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' }
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/95 backdrop-blur-lg shadow-lg' : 'bg-transparent md:bg-dark-bg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="font-montserrat text-xl sm:text-2xl font-bold flex items-center gap-2 py-3 md:py-0">
            <span className="text-white hidden md:block">ELEVATE</span>
            <img src="/Icon.png" alt="Elevate Icon" className="h-14 md:h-10 w-auto" />
            <span className="text-electric-cyan hidden md:block">V&M</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 hover:text-electric-cyan transition-colors duration-300 font-inter font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-cyan group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="bg-electric-cyan text-dark-bg px-6 py-2 rounded-full font-inter font-semibold hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 glow-cyan"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden pb-4 bg-dark-bg/98 backdrop-blur-lg rounded-b-lg px-4 mt-2 shadow-lg border-t border-gray-800"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                className="block py-3 text-gray-300 hover:text-electric-cyan transition-colors duration-200 border-b border-gray-800/50 active:scale-95"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
              className="block mt-4 bg-electric-cyan text-dark-bg px-6 py-3 rounded-full font-semibold text-center hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 glow-cyan"
            >
              Call Now
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

const HeroSection = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16 pb-16 md:pt-0 md:pb-0 scroll-mt-20">
      {/* Animated Hex Pattern Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 hex-pattern parallax"
      />

      {/* Hexagon SVG on left edge - in forefront (Desktop only) */}
      <motion.div
        initial={{ opacity: 0, x: -125 }}
        animate={{ 
          opacity: 1, 
          x: -75,
          filter: [
            'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
            'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.15))',
            'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))'
          ]
        }}
        transition={{ 
          opacity: { duration: 1, delay: 0.5 },
          x: { duration: 1, delay: 0.5 },
          filter: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{ willChange: 'transform, opacity, filter' }}
        className="hidden md:block absolute left-0 w-48 lg:w-56 pointer-events-none z-20 top-[calc(50%-75px)] -translate-y-1/2"
      >
        <img src="/Hexagons.svg" alt="" className="w-full h-auto" style={{ display: 'block' }} />
      </motion.div>

      {/* Hexagon SVG on right edge - using flipped version (Desktop only) */}
      <motion.div
        initial={{ opacity: 0, x: 125 }}
        animate={{ 
          opacity: 1, 
          x: 75,
          filter: [
            'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.15))',
            'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
            'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.15))'
          ]
        }}
        transition={{ 
          opacity: { duration: 1, delay: 0.5 },
          x: { duration: 1, delay: 0.5 },
          filter: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }
        }}
        style={{ 
          top: 'calc(50% - 300px)',
          willChange: 'transform, opacity, filter'
        }}
        className="hidden md:block absolute right-0 w-48 lg:w-56 pointer-events-none z-20 -translate-y-1/2"
      >
        <img src="/Hexagons Flipped.svg" alt="" className="w-full h-auto" style={{ display: 'block' }} />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/50 via-dark-bg/30 to-dark-bg" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Mobile Hexagons - above hero text */}
          <div 
            className="md:hidden mb-12 pointer-events-none"
            style={{
              width: '130%',
              marginLeft: '-15%',
              marginRight: '-15%',
              marginTop: '-20px',
              perspective: '1000px',
              perspectiveOrigin: 'center top'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -30, rotateX: 0 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotateX: -45,
                filter: [
                  'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))',
                  'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.15))',
                  'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))'
                ]
              }}
              transition={{ 
                opacity: { duration: 1.2, delay: 0.3 },
                y: { duration: 1.2, delay: 0.3 },
                rotateX: { duration: 1.2, delay: 0.3, ease: "easeOut" },
                filter: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
              }}
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                willChange: 'transform, opacity, filter',
                transform: 'translate3d(0,0,0)'
              }}
            >
              <img 
                src="/Hexagons Mobile.svg" 
                alt="" 
                className="w-full h-auto" 
                style={{ 
                  display: 'block',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }} 
              />
            </motion.div>
          </div>

          <h1 className="font-montserrat text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-[0.85] md:leading-tight">
            <span className="text-white block">ELEVATE VAPE</span>
            <span className="text-white block">& MARKET</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <p className="text-electric-cyan text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-inter font-semibold">
              {SITE_CONFIG.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center items-center mb-8"
          >
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="group bg-electric-cyan text-dark-bg px-8 sm:px-10 py-3 sm:py-4 rounded-full font-inter font-semibold text-base sm:text-lg hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 glow-cyan-strong flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto shadow-xl"
            >
              <FaPhone className="group-hover:rotate-12 transition-transform duration-200 text-sm sm:text-base" />
              Call Now
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-gray-400 flex items-center justify-center gap-2 font-inter"
          >
            <FaMapMarkerAlt className="text-electric-cyan" />
            Located in {SITE_CONFIG.location}
          </motion.p>
        </motion.div>

      </div>
    </section>
  )
}

const GallerySection = () => {
  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="text-electric-cyan">Gallery</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-electric-cyan mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {SITE_CONFIG.galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl glass-card h-64 sm:h-72 md:h-80 cursor-pointer active:scale-95"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundColor: '#1e1e1e',
                  willChange: 'transform'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-electric-cyan transition-all duration-300 rounded-2xl glow-cyan opacity-0 group-hover:opacity-100" />
              
              {/* Image Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-inter font-semibold text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TourSection = () => {
  return (
    <section id="tour" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-electric-cyan">360°</span> Virtual Tour
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-electric-cyan mx-auto mb-4" />
          <p className="text-gray-300 font-inter text-base sm:text-lg max-w-2xl mx-auto">
            Take a virtual walk through our store and see what we have to offer
          </p>
        </div>
        
        <div className="glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl overflow-hidden">
          <div className="relative w-full" style={{ paddingBottom: '75%' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1765994010838!6m8!1m7!1sCAoSHENJQUJJaERoRWw1alZzUlFlMHFsR3JpcGZNN20.!2m2!1d36.1685772359131!2d-86.81200397139804!3f163.91!4f-18.769999999999996!5f1.3946584482860698"
              width="100%"
              height="100%"
              style={{ 
                border: 0,
                position: 'absolute',
                top: 0,
                left: 0
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const AboutSection = () => {
  const services = [
    { icon: <FaCoffee />, label: 'Drinks' },
    { icon: <FaCookie />, label: 'Snacks' },
    { icon: <FaSmoking />, label: 'Vapes' }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            About <span className="text-electric-cyan">Us</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-electric-cyan mx-auto mb-6" />
          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-inter max-w-3xl mx-auto leading-relaxed">
            {SITE_CONFIG.aboutText}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center hover:border-electric-cyan hover:shadow-2xl hover:shadow-electric-cyan/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer active:scale-95"
            >
              <div className="text-5xl sm:text-6xl text-electric-cyan mb-3 sm:mb-4 inline-block group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" style={{ willChange: 'transform' }}>
                {service.icon}
              </div>
              <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-white">
                {service.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What People <span className="text-electric-cyan">Say</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-electric-cyan mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {SITE_CONFIG.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-7 rounded-xl sm:rounded-2xl hover:border-electric-cyan hover:shadow-2xl hover:shadow-electric-cyan/20 hover:-translate-y-2 transition-all duration-300 active:scale-95 flex flex-col h-full min-h-[300px] relative overflow-hidden group"
            >
              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Rating Stars */}
                <div className="flex items-center gap-1.5 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-electric-cyan text-lg drop-shadow-[0_0_8px_rgba(74,162,182,0.5)]" />
                  ))}
                </div>
                
                {/* Quote Text */}
                <div className="mb-6 flex-grow">
                  <p className="text-gray-200 font-inter text-base sm:text-lg leading-relaxed relative">
                    <span className="text-electric-cyan text-3xl font-bold leading-none absolute -left-2 -top-2 opacity-20">"</span>
                    <span className="relative z-10">{testimonial.text}</span>
                  </p>
                </div>
                
                {/* Author Info */}
                <div className="border-t border-gray-700/50 pt-5 mb-4">
                  <p className="font-montserrat font-bold text-white text-lg mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-sm font-inter">
                    {testimonial.date}
                  </p>
                </div>
                
                {/* Google Link */}
                <a
                  href={SITE_CONFIG.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-electric-cyan transition-colors duration-300 mt-auto pt-2 border-t border-gray-700/30"
                >
                  <FaGoogle className="text-base" />
                  <span className="font-inter">Submitted on Google</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Frequently Asked <span className="text-electric-cyan">Questions</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-electric-cyan mx-auto" />
        </div>

        <div className="space-y-4">
          {SITE_CONFIG.faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 sm:px-6 py-4 sm:py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors duration-200 active:scale-95"
              >
                <h3 className="font-montserrat text-base sm:text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <FaChevronDown className="text-electric-cyan text-lg" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 sm:px-6 pb-4 sm:pb-5">
                  <p className="text-gray-300 font-inter leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get In <span className="text-electric-cyan">Touch</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-electric-cyan mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Map */}
          <a
            href={SITE_CONFIG.socialLinks.google}
            target="_blank"
            rel="noopener noreferrer"
            className="block glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 hover:border-electric-cyan transition-all duration-200 cursor-pointer"
          >
            <iframe
              src={SITE_CONFIG.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)', pointerEvents: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </a>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            <div className="glass-card p-5 sm:p-6 rounded-xl sm:rounded-2xl">
              <h3 className="font-montserrat text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Visit Us
              </h3>
              <p className="text-gray-300 font-inter flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                <FaMapMarkerAlt className="text-electric-cyan mt-1 flex-shrink-0" />
                {SITE_CONFIG.address}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex-1 bg-electric-cyan text-dark-bg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-inter font-semibold text-center hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 glow-cyan flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base shadow-lg"
              >
                <FaPhone />
                Call Now
              </a>
              <a
                href={SITE_CONFIG.socialLinks.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-inter font-semibold text-center hover:border-electric-cyan hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
              >
                <FaMapMarkerAlt />
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#tour', label: '360 Tour' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' }
  ]

  const handleFooterClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-dark-bg border-t border-gray-800 py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="font-montserrat text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center justify-center gap-2">
            <span className="text-white">ELEVATE</span>
            <img src="/Icon.png" alt="Icon" className="h-6 sm:h-8 w-auto" />
            <span className="text-electric-cyan">V&M</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleFooterClick(e, link.href)}
                className="text-gray-400 hover:text-electric-cyan transition-colors duration-300 font-inter text-sm sm:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 font-inter text-xs sm:text-sm">
            © 2025 {SITE_CONFIG.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ============= MAIN PAGE =============

export default function Home() {
  return (
    <main className="bg-dark-gradient min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <TourSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

