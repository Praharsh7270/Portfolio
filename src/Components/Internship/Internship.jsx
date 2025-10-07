import React from 'react'
import './Internship.css'
import internPhoto from '../../assets/intern/1698679474569 (1).jpeg'

const Internship = () => {
  return (
    <section id='internship' className="internship-section">
      <div className="internship-head">
        <h2 className="internship-title">Internship</h2>
        <p className="internship-subtitle">3 months at Career Corps (Startup)</p>
      </div>

      <div className="internship-card">
        <div className="internship-image">
          <img src={internPhoto} alt="Career Corps" loading="lazy" />
        </div>
        <div className="internship-content">
          <h3 className="role">Web Developer Intern</h3>
          <p className="period">Duration: 3 Months</p>
          <ul className="highlights">
            <li>Built responsive UI components with React and Tailwind.</li>
            <li>Collaborated on API integration and state management.</li>
            <li>Improved Lighthouse scores with performance tweaks.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Internship


