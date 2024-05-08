import React from 'react'
import '../Works/work.css'
import commingSoon from '../../assets/coming-soon.png';
import Project3 from '../../assets/Project3.png'
import quizApp from '../../assets/quizApp1.png'

const Works = () => {
  return (
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className='workDesc'>Elevating ideas into immersive digital realities - explore my diverse portfolio of innovative web projects.</span>
            <div className='worksImgs'>
              {/* <div className='project1'>
                <img src={commingSoon} alt='' className='workImg'/>
                <button className='demo'>Live</button>
                <button className='details'>Code</button>
              </div> */}
                {/* <div className='project1'>
                <img src={commingSoon} alt='' className='workImg'/>
                <button className='demo'>Live</button>
                <button className='details'>Code</button>
                </div> */}
                <div className='project1'>
                    <img src={commingSoon} alt='' className='workImg'/>
                <button className='demo'>Live</button>
                <button className='details'>Code</button>
                </div>
                <div className='project1'>
                <img src={commingSoon} alt='' className='workImg'/>
                <button className='demo'>Live</button>
                <button className='details'>Code</button>
                </div>
                <div className='project1'>
                  <img src={Project3} alt='' className='workImg'/>
                  <p className='projectName'>Password Generator</p>
                <button className='demo' onClick={()=>{window.open("https://mirafzalulbashar.com/project1/")}}>Live</button>
                <button className='details' onClick={()=>{window.open("https://github.com/MirAfzalul/Merg-Password-Generator-and-QR-Generator")}}>Code</button>
                </div>
                <div className='project1'>
                  <img src={quizApp} alt='' className='workImg'/>
                  <p className='projectName'>Quiz App</p>
                <button className='demo'onClick={()=>{window.open("https://project2.mirafzalulbashar.com/")}}>Live</button>
                <button className='details' onClick={()=>{window.open("https://github.com/MirAfzalul/QuizApp.git")}}>Code</button>
                </div>
                
                {/* <div className='project1'>
                  <img src={commingSoon} alt='' className='workImg'/>
                <button className='demo'>Demo</button>
                <button className='details'>Details</button>
                </div> */}
                
                
               
               
                
            </div>
            <button className='workBtn'>See more</button>
        </section>
  )
}

export default Works