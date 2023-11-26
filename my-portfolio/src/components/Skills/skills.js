import React from 'react'
import '../Skills/skills.css'
import edu from '../../assets/graduation.png'
import Camera from '../../assets/camera.png'
import Gaming from '../../assets/game-console.png'


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>
            As a web developer, I design and create interactive websites that engage users and deliver a seamless
         online experience. I also ensure websites are responsive, secure, and optimized for performance.
         </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={edu} alt='uiDesgin' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Education</h2>
                    <p> 
                        Computer Science graduate from Independent University, 
                        currently pursuing a Master's in Software Management from WUST to deepen expertise in the dynamic field of
                         software development and project leadership.
                    </p>
                </div>
            </div>
            <div className='skillBar'>
            <img src={Camera} alt='webDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Beyond Coding</h2>
                    <p>
                    Capturing moments through the lens, 
                    I navigate the world with a camera in hand. Photography enthusiast blending technical precision with an artistic eye.
                    </p>
                </div>
            </div>
            
            <div className='skillBar'>
            <img src={Gaming} alt='appDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Gaming</h2>
                    <p>
                    Passionate gamer who finds joy in exploring virtual worlds. 
                    Enjoys expressing creativity through writing beyond the lines of code.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills