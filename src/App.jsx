import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './app.css' 

function App() {

  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='overlay'>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div> 
    </>
  )
}

export default App
