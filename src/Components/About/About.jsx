import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import ai from "../../assets/ai_ml.png"
import python from "../../assets/django_python.jpg"
const About = () => {
  return (
    <div id="About">
      <div className="left">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="aboutDeatls">
            <div className="personalInfo">
                <h1>Personal Info</h1>
            <ul>
                <li>
                    <span>NAME</span> : Praharsh Singh
                </li>
                <li>
                    <span>AGE</span> : 20
                </li>
                <li>
                    <span>Gender</span> : MALE
                </li>
                <li>
                    <span>Lang</span> : Hindi,English
                </li>
            </ul>
            </div>

            <div className="Education">
                <h1>Education</h1>
            <ul>
                <li>
                    <span>Course</span> : BCA
                    <span>From</span> : SRMCEM
                </li>
                <li>
                    <span>School</span> : I.C convent School
                </li>
            </ul>
            </div>

            <div className="Skills">
                <h1>Skills</h1>
            <ul>
                <li>
                    Mern Stack 
                </li>
                <li>
                    Python & Django
                </li>
                <li>
                    AI/ML
                </li>
                <li>
                    Java
                </li>
                <li>
                    DSA & Algorithm
                </li>
            </ul>
            </div>
        </div>
      </div>

      <div className="right">
        {/* Add right side content here */}
        <Card title="MERN STACK" img={mern}/>
        <Card title="JAVA & DSA" img={java}/>
        <Card title="PYTHON & DJANGO" img={python}/>
        <Card title="AI/ML" img={ai}/>
      </div>
    </div>
  )
}

export default About
