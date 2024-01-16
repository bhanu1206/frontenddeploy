import React from 'react'
import WHome from './welcome/WHome';
import  Work  from './welcome/Work';
import About from './welcome/About';
import Footer from './welcome/Footer';

const Welcome = () => {
  return (
    <>
    <div>
        <WHome/>
    </div>
    <div>
        <About/>
    </div>
    <div>
        <Work/>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Welcome;