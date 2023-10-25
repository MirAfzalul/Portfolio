import React from 'react'
import './navbar.css'
import logo from'../../assets/mir-logo.png'
import message from '../../assets/contact-form.png'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
            <Link className='desktopMenuListItem'>Skills</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={message}alt='' className='desktopMenuImg'/>
            Contact Me
        </button>
    </nav>
  )
}

export default Navbar