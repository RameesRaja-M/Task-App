import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import Features from './Features'
import News from './News'
import Footer from './Common/Footer'
import Review from './Review'


function Home() {
  return (
    <>
      <div>
        <Hero/>
        <Stats/>
        <Features/>
        <Review/>
        <News/>
        <Footer/>
        
      </div>
    </>
  )
}

export default Home