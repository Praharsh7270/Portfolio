import React, { useEffect } from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import ai from "../../assets/ai_ml.png"
import python from "../../assets/django_python.jpg"
import profileImage from "../../assets/me/me2.png"

const About = () => {
  useEffect(() => {
    const revealables = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, { threshold: 0.15 })

    revealables.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const personalInfo = [
    { label: 'Name', value: 'Praharsh Singh' },
    { label: 'Age', value: '20' },
    { label: 'Location', value: 'Lucknow, India' },
    { label: 'Languages', value: 'Hindi, English' },
    { label: 'Availability', value: 'Open to Work' }
  ]

  const education = [
    { 
      degree: 'Bachelor of Computer Applications (BCA)', 
      institution: 'SRMCEM',
      period: '2022 - 2025',
      status: 'Current'
    },
    { 
      degree: 'High School', 
      institution: 'I.C Convent School',
      period: '2020 - 2022',
      status: 'Completed'
    }
  ]

  const skills = [
    { name: 'MERN Stack', level: 80, category: 'Web Development' },
    { name: 'Python & Django', level: 75, category: 'Backend' },
    { name: 'AI/ML', level: 65, category: 'Machine Learning' },
    { name: 'Java & DSA', level: 50, category: 'Programming' },
    { name: 'JavaScript', level: 80, category: 'Frontend' },
    { name: 'React.js', level: 80, category: 'Frontend' }
  ]

  const techStack = [
    { title: "MERN STACK", img: mern, color: "from-green-500 to-blue-500" },
    { title: "JAVA & DSA", img: java, color: "from-orange-500 to-red-500" },
    { title: "PYTHON & DJANGO", img: python, color: "from-blue-500 to-purple-500" },
    { title: "AI/ML", img: ai, color: "from-purple-500 to-pink-500" }
  ]

  return (
    <section id="About" className="about-section">
      <div className="container">
        <div className="about-header">
          <div className="header-content">
            <span className="section-label">Who I Am</span>
            <h2 className="about-title">
              About 
              <span className="gradient-text"> Me</span>
            </h2>
            <p className="about-description">
              Passionate developer crafting digital experiences with modern technologies and innovative solutions
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="about-info">
            {/* Profile Card */}
            <div className="profile-card reveal reveal-from-left">
              <div className="profile-header">
                <div className="profile-image-container">
                  <div className="image-wrapper">
                    <img src={profileImage} alt="Praharsh Singh" className="profile-image" />
                    <div className="image-glow"></div>
                  </div>
                  <div className="status-indicator">
                    <span className="status-dot"></span>
                    <span className="status-text">Available for work</span>
                  </div>
                </div>
                <div className="profile-details">
                  <h3>Praharsh Singh</h3>
                  <p>Full Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Personal Info Card */}
            <div className="info-card reveal reveal-from-up">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Personal Info</h3>
              </div>
              <div className="info-list">
                {personalInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="info-card reveal reveal-from-up">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 10V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 20H17" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 16V20" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Education</h3>
              </div>
              <div className="education-list">
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="education-content">
                      <h4>{edu.degree}</h4>
                      <p className="institution">{edu.institution}</p>
                      <span className="period">{edu.period}</span>
                    </div>
                    <div className={`status-badge ${edu.status.toLowerCase()}`}>
                      {edu.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-skills">
            {/* Skills Card */}
            <div className="skills-card reveal reveal-from-right">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Skills & Expertise</h3>
              </div>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-category">{skill.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Cards */}
            <div className="tech-stack-grid reveal reveal-from-up">
              {techStack.map((tech, index) => (
                <div key={index} className={`tech-card bg-gradient-to-br ${tech.color}`}>
                  <div className="tech-image">
                    <img src={tech.img} alt={tech.title} />
                  </div>
                  <div className="tech-content">
                    <h4>{tech.title}</h4>
                  </div>
                  <div className="tech-overlay"></div>
                </div>
              ))}
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

export default About
