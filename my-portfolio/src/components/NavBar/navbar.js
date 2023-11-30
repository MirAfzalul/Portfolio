import React, { useState } from 'react'
import './navbar.css'
import logo from'../../assets/mir-logo.png'
import night from '../../assets/night.png'
import burgerMenu from '../../assets/menu.png'
import {Link} from 'react-scroll'
const Navbar = () => {
  const[showMenu, setShowmenu]=useState(false);
  return (
    <nav className='navbar'>
      <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500}  onClick={()=>setShowmenu(false)}>
      <img src={logo} alt='Logo' className='logo'  />
      </Link>
        
        <div className='desktopMenu'>
            <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={()=>setShowmenu(false)} >Home</Link>
            <Link  activeClass='active' to ='skills' spy={true} smooth={true} offset={-90} duration={500} className='desktopMenuListItem' onClick={()=>setShowmenu(false)}>About</Link>
            <Link  activeClass='active' to ='works' spy={true} smooth={true} offset={-89} duration={500} className='desktopMenuListItem' onClick={()=>setShowmenu(false)}>Portfolio</Link>
            <Link activeClass='active' to ='expertise' spy={true} smooth={true} offset={-89} duration={500} onClick={()=>setShowmenu(false)} className='desktopMenuListItem'>Skills</Link>
           
        </div>
        <button className='desktopMenuBtn'>
          
            {/* <img src={night}alt='' className='desktopMenuImg'/>
             */}
              <Link activeClass='active' to ='contactPage' spy={true} smooth={true} offset={-89} duration={500} onClick={()=>setShowmenu(false)} className='desktopMenuListItem_contact'>Contact</Link>
            
        </button>
        <img src={burgerMenu} alt='Logo' className='moMenu' onClick={()=>setShowmenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu?'flex':'none'}}>
            <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowmenu(false)}>Home</Link>
            <Link  activeClass='active' to ='skills' spy={true} smooth={true} offset={-95} duration={500} className='ListItem' onClick={()=>setShowmenu(false)}> About</Link>
            <Link  activeClass='active' to ='works' spy={true} smooth={true} offset={-90} duration={500} className='ListItem' onClick={()=>setShowmenu(false)}>Portfolio</Link>
            <Link activeClass='active' to ='expertise' spy={true} smooth={true} offset={-90} duration={500} className='ListItem' onClick={()=>setShowmenu(false)}>Skills</Link>
            <Link activeClass='active' to ='contactPage' spy={true} smooth={true} offset={-90} duration={500} className='ListItem' onClick={()=>setShowmenu(false)}>Contact</Link>

        </div>
    </nav>
  )
}

export default Navbar