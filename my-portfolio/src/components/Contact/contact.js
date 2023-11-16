import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../Contact/contact.css'
import LinkedIn from '../../assets/linkedin.png'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_84dwawr', 'template_3w2eceq', form.current, 'ruPPCjvwvggT68QA3wAkN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='contactPage'>
        <h1 id='contactMePageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please Fill Out The Form</span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name'name='user_name'/>
            <input type='text' className='email' placeholder='Your Email' name='your_email'/>
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