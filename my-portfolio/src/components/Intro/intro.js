import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import bg from "../../assets/PortfolioImageMir2.png";
import arrow from "../../assets/diagonal-arrow.png";
const Intro = () => {
  return (
    <section id='intro'>
        
        <div className='introContent'>
        <img src={bg} alt='Profile' className='bg'/> 
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'> Mir</span><br/>Web Developer</span>
            <p className='introPara'>Weaving code and design to bring websites to life, one pixel at a time.</p>
            <Link><button className='btn'><img src={arrow} alt='arrow' className='arrow'/>Contact me</button></Link>
            
        </div>
          
    </section>
  )
}

export default Intro;