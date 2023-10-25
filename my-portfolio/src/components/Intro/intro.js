import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import bg from "../../assets/PortfolioImageMir.png";
const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'> Mir</span><br/>Web Developer</span>
            <p className='introPara'>Weaving code and design to bring websites to life, one pixel at a time.</p>
            <Link><button className='btn'><img src=''alt=''/>Hire me</button></Link>
            
        </div>
        <img src={bg} alt='Profile' className='bg'/>    
    </section>
  )
}

export default Intro;