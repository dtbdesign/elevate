'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaPhone, 
  FaMapMarkerAlt, 
  FaInstagram, 
  FaGoogle, 
  FaFacebookF,
  FaCoffee,
  FaCookie,
  FaSmoking,
  FaStar,
  FaBars,
  FaTimes
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
    google: 'https://g.page/elevatevapenashville',
    facebook: 'https://facebook.com/elevatevapenashville'
  },
  galleryImages: [
    { src: '/Image1.jpg', alt: 'Store Interior 1' },
    { src: '/Image2.jpg', alt: 'Store Interior 2' },
    { src: '/Image3.jpg', alt: 'Store Interior 3' }
  ],
  testimonials: [
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
  googleReviewsUrl: 'https://www.google.com/maps/place/Elevate+Vape+%26+Market/@36.1685137,-86.8119678,1282m/data=!3m2!1e3!4b1!4m6!3m5!1s0x886467291fdee82d:0x6a644c7c87aa284c!8m2!3d36.1685137!4d-86.8119678!16s%2Fg%2F11yjt6vxbf?hl=en&entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D'
}

// ============= COMPONENTS =============

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
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
        scrolled ? 'bg-dark-bg/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
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
              className="bg-electric-cyan text-dark-bg px-6 py-2 rounded-full font-inter font-semibold hover:bg-white hover:scale-105 transition-all duration-300 glow-cyan"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 bg-dark-bg/98 backdrop-blur-lg rounded-b-lg px-4 mt-2 shadow-lg border-t border-gray-800"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 text-gray-300 hover:text-electric-cyan transition-colors duration-300 border-b border-gray-800/50"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="block mt-4 bg-electric-cyan text-dark-bg px-6 py-3 rounded-full font-semibold text-center hover:bg-white hover:scale-105 transition-all duration-300"
            >
              Call Now
            </a>
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
            'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.15))',
            'drop-shadow(0 0 0px rgba(255, 255, 255, 0)) drop-shadow(0 0 0px rgba(255, 255, 255, 0)) drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
            'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.15))'
          ]
        }}
        transition={{ 
          opacity: { duration: 1, delay: 0.5 },
          x: { duration: 1, delay: 0.5 },
          filter: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="hidden md:block absolute left-0 w-48 lg:w-56 pointer-events-none z-20 top-[calc(50%-75px)] -translate-y-1/2"
      >
        <img src="/Hexagons.svg" alt="" className="w-full h-auto" />
      </motion.div>

      {/* Hexagon SVG on right edge - using flipped version (Desktop only) */}
      <motion.div
        initial={{ opacity: 0, x: 125 }}
        animate={{ 
          opacity: 1, 
          x: 75,
          filter: [
            'drop-shadow(0 0 0px rgba(255, 255, 255, 0)) drop-shadow(0 0 0px rgba(255, 255, 255, 0)) drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
            'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.15))',
            'drop-shadow(0 0 0px rgba(255, 255, 255, 0)) drop-shadow(0 0 0px rgba(255, 255, 255, 0)) drop-shadow(0 0 0px rgba(255, 255, 255, 0))'
          ]
        }}
        transition={{ 
          opacity: { duration: 1, delay: 0.5 },
          x: { duration: 1, delay: 0.5 },
          filter: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="hidden md:block absolute right-0 w-48 lg:w-56 pointer-events-none z-20 -translate-y-1/2"
        style={{ 
          top: 'calc(50% - 300px)'
        }}
      >
        <img src="/Hexagons Flipped.svg" alt="" className="w-full h-auto" />
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
              marginTop: '-80px',
              perspective: '800px'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, rotateX: 0 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotateX: -50,
                filter: [
                  'drop-shadow(0 0 25px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 50px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 75px rgba(255, 255, 255, 0.2))',
                  'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.2)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.1))',
                  'drop-shadow(0 0 25px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 50px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 75px rgba(255, 255, 255, 0.2))'
                ]
              }}
              transition={{ 
                opacity: { duration: 1.2, delay: 0.3 },
                y: { duration: 1.2, delay: 0.3 },
                rotateX: { duration: 1.2, delay: 0.3 },
                filter: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <img src="/Hexagons Mobile.svg" alt="" className="w-full h-auto" />
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
              className="group bg-electric-cyan text-dark-bg px-8 sm:px-10 py-3 sm:py-4 rounded-full font-inter font-semibold text-base sm:text-lg hover:bg-white hover:scale-105 transition-all duration-300 glow-cyan-strong flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto shadow-xl"
            >
              <FaPhone className="group-hover:rotate-12 transition-transform text-sm sm:text-base" />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {SITE_CONFIG.galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl glass-card h-64 sm:h-72 md:h-80 cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundColor: '#1e1e1e' // Fallback for placeholder
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-electric-cyan transition-all duration-300 rounded-2xl glow-cyan opacity-0 group-hover:opacity-100" />
              
              {/* Placeholder Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 font-inter text-sm">Image {index + 1}</p>
              </div>
            </motion.div>
          ))}
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            About <span className="text-electric-cyan">Us</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-inter max-w-3xl mx-auto leading-relaxed">
            {SITE_CONFIG.aboutText}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center hover:border-electric-cyan hover:shadow-2xl hover:shadow-electric-cyan/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-5xl sm:text-6xl text-electric-cyan mb-3 sm:mb-4 inline-block group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-white">
                {service.label}
              </h3>
            </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What People <span className="text-electric-cyan">Say</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-electric-cyan mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {SITE_CONFIG.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-5 sm:p-6 rounded-xl sm:rounded-2xl hover:border-electric-cyan hover:shadow-2xl hover:shadow-electric-cyan/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-electric-cyan" />
                ))}
              </div>
              <p className="text-gray-300 font-inter mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-700 pt-4 mb-3">
                <p className="font-montserrat font-bold text-white">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm font-inter">
                  {testimonial.date}
                </p>
              </div>
              <a
                href={SITE_CONFIG.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-electric-cyan transition-colors duration-300"
              >
                <FaGoogle className="text-base" />
                <span className="font-inter">Submitted on Google</span>
              </a>
            </motion.div>
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get In <span className="text-electric-cyan">Touch</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-electric-cyan mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96"
          >
            <iframe
              src={SITE_CONFIG.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6 sm:space-y-8"
          >
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
                className="flex-1 bg-electric-cyan text-dark-bg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-inter font-semibold text-center hover:bg-white hover:scale-105 transition-all duration-300 glow-cyan flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base shadow-lg"
              >
                <FaPhone />
                Call Now
              </a>
              <a
                href={SITE_CONFIG.socialLinks.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-inter font-semibold text-center hover:border-electric-cyan hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
              >
                <FaMapMarkerAlt />
                Directions
              </a>
            </div>

            <div>
              <h3 className="font-montserrat text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">
                Follow Us
              </h3>
              <div className="flex justify-center gap-3 sm:gap-4">
                <a
                  href={SITE_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 glass-card rounded-full flex items-center justify-center text-xl sm:text-2xl hover:text-electric-cyan hover:border-electric-cyan hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href={SITE_CONFIG.socialLinks.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 glass-card rounded-full flex items-center justify-center text-xl sm:text-2xl hover:text-electric-cyan hover:border-electric-cyan hover:scale-110 transition-all duration-300"
                  aria-label="Google"
                >
                  <FaGoogle />
                </a>
                <a
                  href={SITE_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 glass-card rounded-full flex items-center justify-center text-xl sm:text-2xl hover:text-electric-cyan hover:border-electric-cyan hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </motion.div>
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
    { href: '#testimonials', label: 'Testimonials' },
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
    <main className="bg-dark-gradient min-h-screen">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

