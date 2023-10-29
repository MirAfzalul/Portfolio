import React, { useState } from 'react'
import './navbar.css'
import logo from'../../assets/mir-logo.png'
import night from '../../assets/night.png'
import {Link} from 'react-scroll'
const Navbar = () => {
  const[showMenu, setShowmenu]=useState(false );
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link  activeClass='active' to ='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
            <Link  activeClass='active' to ='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            <Link  className='desktopMenuListItem'>Skills</Link>
        </div>
        <button className='desktopMenuBtn'>
          
            <img src={night}alt='' className='desktopMenuImg'/>
            
        </button>
        <img src='' alt='Logo' className='moMenu'/>
        <div className='navMenu' style={{display: showMenu?'flex':'none'}}>
            <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowmenu(false)}>Home</Link>
            <Link  activeClass='active' to ='skills' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowmenu(false)}> About</Link>
            <Link  activeClass='active' to ='works' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowmenu(false)}>Portfolio</Link>
            <Link className='ListItem' >Skills</Link>
        </div>
    </nav>
  )
}

export default Navbar