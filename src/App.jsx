import About from "./Components/About/About"
import Home from "./Components/Home/Home"
import Nav from "./Components/Nav/Nav"
import Project from "./Components/Project/Project"  
import Contact from "./Components/Contact/Contact"
import Internship from "./Components/Internship/Internship"
import TechActivity from "./Components/TechActivity/TechActivity"
import Footer from "./Components/Footer/Footer"

function App() {
  

  return (
    <>
      <Nav/>
      <Home/>
      <div className="about-container" style={{padding: "10px"}}>
        <About/>
      </div>
      <Project/>
      <Internship/>
      <TechActivity/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
