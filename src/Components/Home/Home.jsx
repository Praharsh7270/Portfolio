import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { Typewriter } from 'react-simple-typewriter';


const Home = () => {
    return (
        <div id='home'>

            <div className="left">

                <div className="detail">
                    <div className="line1">I'M </div>
                    <div className="line2">PRAHARSH SINGH</div>
                    <div className="line3">
                        <Typewriter
                            words={[
                                "WEB DEVELOPER",
                                "FULL STACK MERN DEVELOPER",
                                "PYTHON & DJANGO DEVELOPER",
                                "AI/ML ENTHUSIAST",
                                "TECH ENTHUSIAST",
                                "PROBLEM SOLVER"
                            ]}
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                    <button>Hire me</button>
                </div>
            </div>

            <div className="right">
                <img src={man} alt="" />
            </div>
        </div>
    )
}

export default Home