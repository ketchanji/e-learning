import React from 'react'
import Hero from '../component/Hero';
import NavBar from '../component/NavBar';

const home = () => {
  return (
    <div className="main">
        <NavBar />
        <Hero />
      </div>
  )
}

export default home