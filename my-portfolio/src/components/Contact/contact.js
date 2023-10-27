import React from 'react'
import '../Contact/contact.css'
import LinkedIn from '../../assets/linkedin.png'


const Contact = () => {
  return (
    <div id='contactPage'>
        <h1 id='contactMePageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please Fill Out The Form</span>
        <form className='contactForm'>
            <input type='text' className='name' placeholder='Your Name'/>
            <input type='text' className='email' placeholder='Your Email'/>
            <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='Links'>
                <img src={LinkedIn} alt='linkedIn' className='link'/>
            </div>
        </form>

    </div>
  )
}

export default Contact