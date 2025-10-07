import React from 'react'
import "./contact.css"
import contact from "../../assets/contact.png"

const Contact = () => {
  return (
    <section id='contact' className="contact-section">
      <div className="container">
        <div className="contact-header">
          <div className="header-content">
            <span className="section-label">Get in Touch</span>
            <h2 className="contact-title">
              Let's Create 
              <span className="gradient-text"> Something Amazing</span>
            </h2>
            <p className="contact-description">
              Ready to bring your ideas to life? Let's discuss your next project and explore how we can work together.
            </p>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="contact-image-container">
                <div className="image-wrapper">
                  <img src={contact} alt="Contact" className="contact-image" />
                  <div className="image-glow"></div>
                </div>
              </div>
              
              <div className="contact-details">
                <div className="detail-item">
                  <div className="detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="detail-content">
                    <h4>Location</h4>
                    <p>Lucknow, India</p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="detail-content">
                    <h4>Email</h4>
                    <p>praharshsingh26@gmail.com</p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92V19.92C22 20.52 21.39 21.07 20.89 20.97C18.36 20.47 15.9 19.56 13.7 18.18C11.61 16.87 9.87 15.13 8.56 13.04C7.18 10.84 6.27 8.38 5.77 5.85C5.67 5.35 6.22 4.74 6.82 4.74H9.82C10.32 4.74 10.75 5.13 10.79 5.63C10.86 6.6 11.05 7.55 11.35 8.47C11.48 8.84 11.37 9.25 11.07 9.5L9.42 10.94C10.66 13.03 12.47 14.84 14.56 16.08L15.95 14.43C16.2 14.13 16.61 14.02 16.98 14.15C17.9 14.45 18.85 14.64 19.82 14.71C20.32 14.75 20.71 15.18 20.71 15.68L22 16.92Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="detail-content">
                    <h4>Phone</h4>
                    <p>+91 7270903470</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-card">
              <div className="form-header">
                <h3>Send me a message</h3>
                <p>I'll get back to you as soon as possible</p>
              </div>
              
              <form action="https://formspree.io/f/mdkzplja" method='POST' className="contact-form">
                <div className="form-group">
                  <label htmlFor="user_name">Name</label>
                  <div className="input-wrapper">
                    <input 
                      type="text" 
                      id="user_name"
                      name="user_name" 
                      placeholder="Your full name"
                      required
                    />
                    <div className="input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="user_email">Email</label>
                  <div className="input-wrapper">
                    <input 
                      type="email" 
                      id="user_email"
                      name="user_email" 
                      placeholder="your.email@example.com"
                      required
                    />
                    <div className="input-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="user_message">Message</label>
                  <div className="input-wrapper">
                    <textarea 
                      id="user_message"
                      name="user_message" 
                      placeholder="Tell me about your project or idea..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section-bg-decoration">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </section>
  )
}

export default Contact