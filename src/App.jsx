import './App.css'

import ScrollArrow from './components/common/ScrollArrow'
import Navbar from './components/common/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
import Projects from './components/pages/Projects'
import Certificates from './components/pages/Certificates'
import Education from './components/pages/Education'
import Contact from './components/pages/contact/Contact'
import Footer from './components/common/Footer'

function App() {
  return (
    <>
      <ScrollArrow />

      <Navbar />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Education />
      <Contact />

      <Footer />
    </>
  )
}

export default App