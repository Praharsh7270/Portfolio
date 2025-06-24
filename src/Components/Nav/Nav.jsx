import React, { useRef } from 'react'
import "./Nav.css"
import { Link } from 'react-scroll';
const Nav = () => {
  const menu = useRef() 
  const mobile = useRef()
  console.log(menu)
  console.log(menu.current)
  return (
    <div>
        <nav>
            <h1>PORTFOLIO</h1>

            <ul class = "desktop">
                <Link to='home' smooth= {true} duration={500} activeClass='active' spy= {true}> <li>Home</li> </Link>
                <Link to='About' smooth= {true} duration={500} activeClass='active' spy= {true}>  <li>About</li> </Link>
                <Link to='home' smooth= {true} duration={500} activeClass='active' spy= {true}>  <li>Project</li> </Link>
                <Link to='home' smooth= {true} duration={500} activeClass='active' spy= {true}>  <li>Contact</li> </Link>
            </ul>
            <div class="hamburger" ref={menu} onClick={() =>{
              mobile.current.classList.toggle("activeMobile")
              menu.current.classList.toggle("activeham")
            }}>
              <div class="hma"></div>
              <div class="hma"></div>
              <div class="hma"></div>
              <div class="hma"></div>
            </div>
            <ul class = "mobile" ref = {mobile}>
                <Link to='home' smooth= {true} duration={500} activeClass='active' spy= {true}> <li>Home</li> </Link>
                <Link to='About' smooth= {true} duration={500} activeClass='active' spy= {true}>  <li>About</li> </Link>
                <Link to='home' smooth= {true} duration={500} activeClass='active' spy= {true}>  <li>Project</li> </Link>
                <Link to='home' smooth= {true} duration={500} activeClass='active' spy= {true}>  <li>Contact</li> </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Nav