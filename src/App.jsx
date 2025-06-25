import About from "./Components/About/About"
import Home from "./Components/Home/Home"
import Nav from "./Components/Nav/Nav"
import Project from "./Components/Project/Project"  
import Contact from "./Components/Contact/Contact"
function App() {
  

  return (
    <>
      <Nav/>
      <Home/>
      <div className="about-container" style={{padding: "10px"}}>
        <About/>
      </div>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
