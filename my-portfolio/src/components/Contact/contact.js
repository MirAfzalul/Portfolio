import React, { useRef , useState } from 'react'
import emailjs from '@emailjs/browser';
import '../Contact/contact.css'
import LinkedIn from '../../assets/linkedin.png'


const Contact = () => {

  const [name,setName]=useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    setName("");
  }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jp0147d', 'template_3w2eceq', form.current, 'dRdOtioLmUmErRkcf')
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

        <form className='contactForm' ref={form} onSubmit={sendEmail && handleSubmit}>
            <input type='text' className='name' placeholder='Your Name'name='from_name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type='text' className='email' placeholder='Your Email' name='from_email'/>
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