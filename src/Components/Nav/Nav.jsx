import React, { useState, useEffect } from 'react'
import "./Nav.css"
import personalLogo from "../../assets/personal.svg"
import hamburgerIcon from "../../assets/hamburger.svg"
import crossIcon from "../../assets/cross.svg"
import resumePDF from "../../assets/Praharsh_Resume.pdf"
import { motion, AnimatePresence } from 'framer-motion'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#About', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#internship', label: 'Experience' },
        { href: '#tech-activity', label: 'Activities' },
        { href: '#contact', label: 'Contact' }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            setScrolled(offset > 50)
            
            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.slice(1))
            const currentSection = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 150 && rect.bottom >= 100
                }
                return false
            })
            
            if (currentSection) {
                setActiveSection(currentSection)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    const handleNavClick = (href) => {
        closeMenu()
        const element = document.querySelector(href)
        if (element) {
            const navbarHeight = 70 // Height of fixed navbar
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - navbarHeight
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <>
            <motion.nav 
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="nav-container">
                    <motion.div 
                        className="nav-logo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}>
                            <img src={personalLogo} alt="Praharsh Singh" className="logo-img" />
                            <span className="logo-text">Portfolio</span>
                        </a>
                    </motion.div>

                    <div className="nav-links desktop-only">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {link.label}
                                <span className="nav-indicator"></span>
                            </motion.a>
                        ))}
                    </div>

                    <div className="nav-actions">
                        <motion.a 
                            href={resumePDF} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="resume-btn desktop-only"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Resume</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </motion.a>

                        <motion.button 
                            className="hamburger mobile-only"
                            onClick={toggleMenu}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img src={isOpen ? crossIcon : hamburgerIcon} alt="Menu" />
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div 
                            className="mobile-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                        />
                        <motion.div 
                            className="mobile-menu"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 20 }}
                        >
                            <div className="mobile-menu-header">
                                <div className="mobile-logo">
                                    <img src={personalLogo} alt="Praharsh Singh" />
                                    <span>Praharsh Singh</span>
                                </div>
                                <button className="close-btn" onClick={closeMenu}>
                                    <img src={crossIcon} alt="Close" />
                                </button>
                            </div>
                            
                            <div className="mobile-menu-content">
                                <div className="mobile-nav-links">
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            className={`mobile-nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                                            onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ x: 10 }}
                                        >
                                            <span className="link-number">0{index + 1}</span>
                                            <span className="link-text">{link.label}</span>
                                        </motion.a>
                                    ))}
                                </div>

                                <motion.div 
                                    className="mobile-menu-footer"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <a href={resumePDF} target="_blank" rel="noreferrer" className="mobile-resume-btn">
                                        <span>Download Resume</span>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </a>
                                    
                                    <div className="social-links-mobile">
                                        <a href="https://github.com/Praharsh7270" target="_blank" rel="noreferrer" aria-label="GitHub">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                        <a href="https://www.linkedin.com/in/praharsh-singh-822a1224b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </a>
                                        <a href="mailto:praharshsingh26@gmail.com" aria-label="Email">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                                <polyline points="22,6 12,13 2,6"/>
                                            </svg>
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Nav