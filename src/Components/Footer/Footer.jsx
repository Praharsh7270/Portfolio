import React from 'react'
import "./Footer.css"
import { motion } from 'framer-motion'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/Praharsh7270',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/praharsh-singh-822a1224b/',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            )
        },
        {
            name: 'Email',
            url: 'mailto:praharshsingh26@gmail.com',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                </svg>
            )
        }
    ]

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#About' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#internship' },
        { name: 'Activities', href: '#tech-activity' },
        { name: 'Contact', href: '#contact' }
    ]

    const handleNavClick = (href) => {
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
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <motion.div 
                        className="footer-brand"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="footer-logo">Praharsh Singh</h3>
                        <p className="footer-tagline">
                            Full-Stack Developer & AI/ML Enthusiast
                        </p>
                        <p className="footer-description">
                            Creating innovative digital solutions with modern technologies. 
                            Let's build something amazing together!
                        </p>
                    </motion.div>

                    <motion.div 
                        className="footer-links"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4>Quick Links</h4>
                        <div className="links-grid">
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="footer-link"
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="footer-contact"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h4>Get In Touch</h4>
                        <div className="contact-info">
                            <a href="mailto:praharshsingh26@gmail.com" className="contact-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                <span>praharshsingh26@gmail.com</span>
                            </a>
                            <div className="contact-item">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                <span>Lucknow, India</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="footer-social">
                        <span className="social-label">Follow me:</span>
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-link"
                                    aria-label={social.name}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-divider"></div>

                    <div className="footer-copyright">
                        <p>
                            © {currentYear} Praharsh Singh. All rights reserved.
                        </p>
                        <p className="footer-made-with">
                            Made with ❤️ using React & Framer Motion
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className="footer-bg-decoration">
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer