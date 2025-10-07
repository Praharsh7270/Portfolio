import React, { useState, useEffect } from 'react'
import "./Project.css"

// Import project images from assets
import bankapp from "../../assets/projects/bankapp.png"
import chatapp from "../../assets/projects/chatapp.png"
import gptClone from "../../assets/projects/gptClone.png"
import kkDrone from "../../assets/projects/kk drone.jpg"
import mentorMgmt from "../../assets/projects/mentor management.png"
import movieRec from "../../assets/projects/movie recommendar.png"
import potatoDisease from "../../assets/projects/potato desiase pedictor.png"
import textToImage from "../../assets/projects/text to image.png"
import weaponDetector from "../../assets/projects/weapon detector.jpg"

const projects = [
  { 
    img: bankapp, 
    name: 'Bank App', 
    category: 'FinTech', 
    desc: 'Secure banking application with accounts, transfers and analytics.',
    tech: ['React', 'Node.js', 'MongoDB'],
    url: 'https://github.com/Praharsh7270/Banking',
    type: 'github',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    img: chatapp, 
    name: 'Chat App', 
    category: 'Communication', 
    desc: 'Real-time chat with sockets, groups, media sharing and auth.',
    tech: ['Socket.io', 'React', 'Express'],
    url: 'https://github.com/Praharsh7270/chatApp',
    type: 'github',
    color: 'from-green-500 to-emerald-500'
  },
  { 
    img: gptClone, 
    name: 'ChatGPT Clone', 
    category: 'AI/ML', 
    desc: 'AI chat interface with streaming responses and prompt history.',
    tech: ['React', 'OpenAI API', 'Tailwind'],
    url: 'https://github.com/Praharsh7270/chatgpt_clone',
    type: 'github',
    color: 'from-purple-500 to-violet-500'
  },
  { 
    img: kkDrone, 
    name: 'KK Drone', 
    category: 'Hardware', 
    desc: 'Custom drone with advanced flight controls and camera system.',
    tech: ['Arduino', 'Sensors', 'Hardware'],
    type: 'hardware',
    color: 'from-orange-500 to-red-500'
  },
  { 
    img: mentorMgmt, 
    name: 'Mentor Management', 
    category: 'Education', 
    desc: 'Mentor-mentee allocation and performance tracking portal.',
    tech: ['React', 'Firebase', 'Material-UI'],
    url: 'https://github.com/Praharsh7270/Mentor',
    type: 'github',
    color: 'from-indigo-500 to-blue-500'
  },
  { 
    img: movieRec, 
    name: 'Movie Recommender', 
    category: 'AI/ML', 
    desc: 'Content-based movie recommendation using similarity scoring.',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
    url: 'https://github.com/Praharsh7270/Movie-Recommendar',
    type: 'github',
    color: 'from-pink-500 to-rose-500'
  },
  { 
    img: potatoDisease, 
    name: 'Potato Disease Predictor', 
    category: 'Computer Vision', 
    desc: 'Image classification to detect potato leaf diseases.',
    tech: ['TensorFlow', 'CNN', 'FastAPI'],
    url: 'https://github.com/Praharsh7270/potato-disease',
    type: 'github',
    color: 'from-yellow-500 to-orange-500'
  },
  { 
    img: textToImage, 
    name: 'Text to Image', 
    category: 'GenAI', 
    desc: 'Generate images from prompts with stable diffusion APIs.',
    tech: ['Stable Diffusion', 'React', 'Python'],
    url: 'https://github.com/Praharsh7270/ImageGenrator',
    type: 'github',
    color: 'from-teal-500 to-cyan-500'
  },
  { 
    img: weaponDetector, 
    name: 'Weapon Detector', 
    category: 'Hardware', 
    desc: 'Real-time weapon detection system using computer vision and hardware integration.',
    tech: ['YOLO', 'OpenCV', 'Hardware'],
    type: 'hardware',
    color: 'from-red-500 to-pink-500'
  }
]

const Project = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle body scroll lock when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  const handleProjectClick = (project) => {
    if (project.type === 'hardware') {
      setSelectedProject(project);
      setShowPopup(true);
    } else {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProject(null);
  };

  // Handle escape key to close popup
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showPopup) {
        closePopup();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showPopup]);
  return (
    <section id='projects' className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div className="header-content">
            <span className="section-label">My Work</span>
            <h2 className="projects-title">
              Featured 
              <span className="gradient-text"> Projects</span>
            </h2>
            <p className="projects-description">
              A collection of projects showcasing my skills in web development, AI/ML, and software engineering
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card card-${index + 1}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleProjectClick(project);
                }
              }}
            >
              <div className="card-header">
                <div className="project-image-container">
                  <div className="image-wrapper">
                    <img 
                      src={project.img} 
                      alt={project.name} 
                      loading="lazy"
                      className="project-image"
                    />
                    <div className="image-overlay"></div>
                  </div>
                  <div className={`project-badge bg-gradient-to-r ${project.color}`}>
                    {project.category}
                  </div>
                  <button 
                    className="project-fab" 
                    onClick={() => handleProjectClick(project)}
                    aria-label={`View ${project.name} project`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="card-content">
                <div className="project-header">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.desc}</p>
                </div>
                
                <div className="tech-stack">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <button 
                    onClick={() => handleProjectClick(project)} 
                    className="project-btn primary"
                    aria-label={`View ${project.name} project`}
                  >
                    <span>{project.type === 'hardware' ? 'View Details' : 'View Project'}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className="project-btn secondary"
                    aria-label={`Bookmark ${project.name}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add bookmark functionality here if needed
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M9 19C-2 19 -2 5 9 5C20 5 20 19 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 13L12 10L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Hardware Project Popup */}
      {showPopup && selectedProject && (
        <div 
          className="popup-overlay" 
          onClick={closePopup}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <div 
            className="popup-content" 
            onClick={(e) => e.stopPropagation()}
            role="document"
          >
            <div className="popup-header">
              <h3 id="popup-title" className="popup-title">{selectedProject.name}</h3>
              <button 
                className="popup-close" 
                onClick={closePopup}
                aria-label="Close popup"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className="popup-body">
              <div className="popup-image">
                <img src={selectedProject.img} alt={selectedProject.name} />
              </div>
              
              <div className="popup-info">
                <div className={`popup-badge bg-gradient-to-r ${selectedProject.color}`}>
                  {selectedProject.category}
                </div>
                
                <p className="popup-description">{selectedProject.desc}</p>
                
                <div className="popup-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {selectedProject.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="popup-note">
                  <div className="note-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p>This is a hardware project that uses physical devices and components. The source code is not publicly available as it involves proprietary hardware implementations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="section-bg-decoration">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
    </section>
  )
}

export default Project