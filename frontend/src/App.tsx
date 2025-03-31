import React from 'react'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Portfolio from './components/porfolio/Portfolio'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <section id='hero'>
        <Hero />
      </section>
      <section id='#services'>
        <Services />
      </section>
      <section id='#portfolio'>
        <Portfolio />
      </section>
      <section id='#contact'>
        <Contact />
      </section>
    </>
  )
}

export default App
