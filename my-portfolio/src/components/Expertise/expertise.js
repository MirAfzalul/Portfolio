import React from 'react'
import './expertise.css'
import reactImg from'../../assets/react.png'
import vsCodeImg from'../../assets/visual-studio.png'
import gitImg from '../../assets/git.png'
import bootstrapImg from '../../assets/bootstrap.png'
import nodeJs from '../../assets/nodejs.png'
import mongoDB from '../../assets/mongoDb.png'
import fireBase from '../../assets/1firebase.png'
const Expertise = () => {
    
  return (
    
    <div id='expertise'>
        <h1 className='mainTitle'>Skills</h1>
    <section className='tools'>
        <h3 className='toolTitle'>Technologies</h3>
        
        <img src={reactImg} alt='reactimg'className='toolImage'/>
         <img src={nodeJs} alt='dockerimg' className='toolImage'/>
        <img src={mongoDB} alt='dockerimg' className='toolImage'/>
        <img src={fireBase} alt='dockerimg' className='toolImage'/>
        <img src={bootstrapImg} alt='bootsrapimg' className='toolImage'/>
        <img src={vsCodeImg} alt='reactimg'className='toolImage'/>
        <img src={gitImg} alt='reactimg'className='toolImage'/>
        
       
        

    </section>
    
    <section className='progressBar'>
        <h3 className='barsTitle'>Programming Bars</h3>
        <p>JavaScript</p>
        <div className="chart">
        <div className="jsBar"></div>
        <span id="value1">70%</span>
        </div>
    <p>React</p>
        <div className="chart">
        <div className="reactBar"></div>
        <span id="value1">60%</span>
        </div>
    <p>SQL</p>
        <div className="chart">
        <div class="sqlBar"></div>
        <span id="value1">55%</span>
        </div>
    <p>Html/CSS</p>
        <div className="chart">
        <div className="htmlCss"></div>
        <span id="value1">75%</span>
        </div>
    </section>
        
    </div>
  )
}

export default Expertise