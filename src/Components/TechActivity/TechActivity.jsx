import React from 'react'
import './TechActivity.css'
import grobotsPhoto from '../../assets/tech activity/Grobots.jpeg'
import gssocPhoto from '../../assets/tech activity/girlscriptsoc_logo.jpeg'
import codeCubiclePhoto from '../../assets/tech activity/codeCubicle.jpeg'
import sihPhoto from '../../assets/tech activity/SIH2.webp'

const TechActivity = () => {
  const activities = [
    {
      id: 1,
      title: "Coordinator - Grobots Club",
      subtitle: "College Robotics Club",
      image: grobotsPhoto,
      badge: "Leadership",
      highlights: [
        "Participated in robotics events at IIT Gwalior",
        "Competed at IIT Roorkee and IIT Jodhpur", 
        "Participated in events at SRMS Bareilly and BBD",
        "Part of organizing team for college Gantavya festival",
        "Engaged in various robotics competitions at SRMU"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "GirlScript Summer of Code 2025",
      subtitle: "Open Source Contributor",
      image: gssocPhoto,
      badge: "Open Source",
      highlights: [
        "Worked on multiple open source projects",
        "Contributed to real-world applications",
        "Collaborated with developers worldwide",
        "Enhanced coding skills through peer reviews"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      title: "Code Cubicle Hackathon",
      subtitle: "Hackathon Participant",
      image: codeCubiclePhoto,
      badge: "Achievement",
      highlights: [
        "Participated in competitive programming event",
        "Received honorable mention certificate",
        "Demonstrated problem-solving skills",
        "Collaborated in team-based coding challenges"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Smart India Hackathon (SIH)",
      subtitle: "National Level Competition",
      image: sihPhoto,
      badge: "National",
      highlights: [
        "Participated in India's premier hackathon",
        "Successfully cleared internal college hackathon",
        "Developed innovative solutions for real problems",
        "Gained experience in rapid prototyping"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id='tech-activity' className="tech-activity-section">
      <div className="container">
        <div className="tech-activity-header">
          <div className="header-content">
            <span className="section-label">Journey & Growth</span>
            <h2 className="tech-activity-title">
              Tech Activities & 
              <span className="gradient-text"> Achievements</span>
            </h2>
            <p className="tech-activity-description">
              Exploring innovation through competitions, open source contributions, and leadership roles
            </p>
          </div>
        </div>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div key={activity.id} className={`activity-card card-${index + 1}`}>
              <div className="card-header">
                <div className="activity-image-container">
                  <div>
                    <img 
                      src={activity.image} 
                      alt={activity.title} 
                      loading="lazy"
                      className="activity-image"
                    />
                    <div className="image-overlay"></div>
                  </div>
                  <div className={`activity-badge bg-gradient-to-r ${activity.color}`}>
                    {activity.badge}
                  </div>
                </div>
              </div>
              
              <div className="card-content">
                <div className="activity-header">
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-subtitle">{activity.subtitle}</p>
                </div>
                
                <div className="highlights-container">
                  <ul className="activity-highlights">
                    {activity.highlights.map((highlight, idx) => (
                      <li key={idx} className="highlight-item">
                        <span className="highlight-icon">▸</span>
                        <span className="highlight-text">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="card-glow"></div>
            </div>
          ))}
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

export default TechActivity