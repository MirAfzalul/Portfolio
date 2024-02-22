import React from 'react'
import '../Works/work.css'
import commingSoon from '../../assets/coming-soon.png';

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
                  <img src={commingSoon} alt='' className='workImg'/>
                <button className='demo'>Live</button>
                <button className='details'>Code</button>
                </div>
                <div className='project1'>
                  <img src={commingSoon} alt='' className='workImg'/>
                <button className='demo'>Live</button>
                <button className='details'>Code</button>
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