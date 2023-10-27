import React from 'react'
import '../Skills/skills.css'
import UIDesgin from '../../assets/ui-design.png'
import WebDesign from '../../assets/coding.png' 
import AppDesign from '../../assets/user-interface.png'


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>As a web developer, I design and create interactive websites that engage users and deliver a seamless online experience. I also ensure websites are responsive, secure, and optimized for performance.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesgin} alt='uiDesgin' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>Content</p>
                </div>
            </div>
            <div className='skillBar'>
            <img src={WebDesign} alt='webDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>content</p>
                </div>
            </div>
            
            <div className='skillBar'>
            <img src={AppDesign} alt='appDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>Content</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills