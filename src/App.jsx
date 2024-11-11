import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Hero'
import Title from './Title'
import About from './About'
import Projects from './Projects'

function App() {
 

  return (
    <>
    <div className='scroller'>     
      <section>
      <Hero/>
      </section>
      <section>
      <Title text="ABOUT ME"/>
      <About/>
      </section>
      <section>
        <Title text = "PROJECTS"/>
        <Projects/>
      </section>
      </div>

    </>
  )
}

export default App
