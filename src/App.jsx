import './App.css'
import Footer from './components/common/Footer'

import Navbar from './components/common/Navbar'
import ScrollArrow from './components/common/ScrollArrow'
import About from './components/pages/About'
import Contact from './components/pages/contact/Contact'
import Education from './components/pages/Education'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Skills from './components/pages/Skills'

function App() {
  return (
    <>
      <ScrollArrow />

      <Navbar />

      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </>
  )
}

export default App