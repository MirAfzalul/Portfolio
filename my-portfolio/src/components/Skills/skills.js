import React from 'react'
import '../Skills/skills.css'
import edu from '../../assets/graduation.png'
import Camera from '../../assets/camera.png'
import Gaming from '../../assets/game-console.png'


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>As a web developer, I design and create interactive websites that engage users and deliver a seamless online experience. I also ensure websites are responsive, secure, and optimized for performance.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={edu} alt='uiDesgin' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Education</h2>
                    <p> I'm a tech enthusiast with a strong foundation in Computer Science, having earned my bachelor's degree from Independent University, Bangladesh. Currently, I'm deepening my expertise and embracing new challenges as I pursue a master's degree in Information Technology with a focus on Software Management at Washington University of Science and technology.</p>
                </div>
            </div>
            <div className='skillBar'>
            <img src={Camera} alt='webDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Beyond Coding</h2>
                    <p>In the dance between code and creativity, photography is my partner, offering a different kind of canvas to paint with light and shadows. It's a hobby that fuels my imagination, providing a unique lens through which I view the world.</p>
                </div>
            </div>
            
            <div className='skillBar'>
            <img src={Gaming} alt='appDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Gaming</h2>
                    <p>I'm an avid gamer, finding joy in virtual worlds and interactive narratives. The strategic thinking and problem-solving skills honed in gaming seamlessly complement my development journey, adding an extra layer of creativity to my approach.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills