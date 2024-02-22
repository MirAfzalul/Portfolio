import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
// import bg from "../../assets/2PortfolioImageMir2.png";
import FancyText from '@carefully-coded/react-text-gradient';
import arrow from "../../assets/diagonal-arrow.png";

const Intro = () => {
  // const[showMenu, setShowmenu]=useState(false);
  
  return (
    <section id='intro'>
        
        <div className='introContent' >
        {/* <img src={bg} alt='Profile' className='bg'/>  */}
        
            <span className='hello'>Hello,</span>
            <span className='introText'>
              I am <br/>
              <span className='introName'>
                 Mir Bashar</span><br/>
                 <FancyText  gradient={{ from: '#FF3B00 ', to: '#77156C', type: 'linear' }}
      animate
      animateDuration={1000}>
                  Web Developer
                 </FancyText>
                 
                 </span>
            <p className='introPara'>Weaving code and design to bring websites to life, one pixel at a time.</p>
            <Link  spy={true} smooth={true} offset={-70} duration={500} className='contactBtn'>
            <button className='btn' onClick={()=>window.open("https://drive.google.com/file/d/1yoeeMmR3y2Ec25JnL_AGrkf-llCvR6VG/view?usp=sharing","_blank")}><img src={arrow} alt='arrow' className='arrow'/>Resume</button>
            </Link>
            
        </div>
          
    </section>
  )
}

export default Intro;