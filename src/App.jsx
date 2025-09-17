import { useState } from 'react'

import './App.css'
import Header from './components/Header';
import Body from './components/body';
import About from './components/About';
import Project from './components/project';
import Experience from './components/Experience';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Body/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App;
