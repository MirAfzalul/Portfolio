import React from 'react'
import '../Works/work.css'
import commingSoon from '../../assets/coming-soon.png';

const Works = () => {
  return (
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className='workDesc'>Write ssomthing here.</span>
            <div className='worksImgs'>
                <img src={commingSoon} alt='' className='workImg'/>
                <img src={commingSoon} alt='' className='workImg'/>
                <img src={commingSoon} alt='' className='workImg'/>
                <img src={commingSoon} alt='' className='workImg'/>
                <img src={commingSoon} alt='' className='workImg'/>
                <img src={commingSoon} alt='' className='workImg'/>
            </div>
            <button className='workBtn'>See more</button>
        </section>
  )
}

export default Works