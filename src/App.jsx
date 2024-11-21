import { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css'
import Hero from './Hero'
import Title from './Title'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>  
    <Route path={"/"} element={
    <div className='scroller'>
        <section>
      <Hero/>
      </section>
      <section id="about">
      <Title text="ABOUT ME"/>
      <About/>
      </section>
      <section id="projects">
        <Title text = "PROJECTS"/>
        <Projects/>
      </section>
      <section id="contact">
        <Title text="GET IN TOUCH"/>
        <Contact/>
      </section>
      </div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
