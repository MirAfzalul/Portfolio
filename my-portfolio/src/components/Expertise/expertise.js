import React from 'react'
import './expertise.css'
const Expertise = () => {
    
  return (
    <div id='expertise'>
        <h1>Skills</h1>
    <section class='tools'>
        <h2>Tools I Use</h2>
    </section>
    
    <section class='progressBar'>
        <p>JavaScript</p>
        <div class="chart">
        <div class="jsBar"></div>
        <span id="value1">68</span>
        </div>
    <p>React</p>
        <div class="chart">
        <div class="reactBar"></div>
        <span id="value1">68</span>
        </div>
    <p>SQL</p>
        <div class="chart">
        <div class="jsBar"></div>
        <span id="value1">68</span>
        </div>
    <p>C++</p>
        <div class="chart">
        <div class="jsBar"></div>
        <span id="value1">68</span>
        </div>
    </section>
        
    </div>
  )
}

export default Expertise