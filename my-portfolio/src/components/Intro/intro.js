import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
// import bg from "../../assets/2PortfolioImageMir2.png";
import arrow from "../../assets/diagonal-arrow.png";

const Intro = () => {
  // const[showMenu, setShowmenu]=useState(false);
  return (
    <section id='intro'>
        
        <div className='introContent' >
        {/* <img src={bg} alt='Profile' className='bg'/>  */}
            <span className='hello'>Hello,</span>
            <span className='introText'>I am <br/><span className='introName'> Mir Afzalul Bashar</span><br/>Web Developer</span>
            <p className='introPara'>Weaving code and design to bring websites to life, one pixel at a time.</p>
            <Link activeClass='active' to ='contactPage' spy={true} smooth={true} offset={-70} duration={500} className='contactBtn'>
            <button className='btn'><img src={arrow} alt='arrow' className='arrow'/>Resume</button>
            </Link>
            
        </div>
          
    </section>
  )
}

export default Intro;