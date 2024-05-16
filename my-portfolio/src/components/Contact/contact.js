import React, { useRef , useState, } from 'react'
import emailjs from '@emailjs/browser';
import '../Contact/contact.css'
import LinkedIn from '../../assets/linkedin.png'
import Github from '../../assets/github.png'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

  const Contact = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const[text,setText]=useState("");
  const form = useRef();

 const handleSubmit = (e)=>{
    e.preventDefault();
    setName("");
    setEmail("");
    setText("");
      emailjs.sendForm('service_jp0147d', 'template_3w2eceq', form.current, 'dRdOtioLmUmErRkcf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);

        }        
        );
        toast.success('Message was sent successfully!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000, // Close the notification after 3 seconds
        });  
  
  }
  return (
    <div id='contactPage'>
        <h1 id='contactMePageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please Fill Out The Form</span>

        <form className='contactForm' ref={form} onSubmit={handleSubmit}>
            <input type='text' className='name' placeholder='Your Name*'name='from_name' value={name} onChange={(e)=>setName(e.target.value)} required/>
            <input type='email' className='email' placeholder='Your Email*' name='from_email'value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <textarea className='msg' name='message' rows='5' placeholder='Your Message*'value={text} onChange={(e)=>setText(e.target.value)} required></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='links'>
             
              {/* <img src={LinkedIn} alt='linkedIn' className='link' onClick={()=>window.open('https://www.linkedin.com/in/mir-afzalul-bashar-36b52018b')}/> */}
              <img src={Github} alt='linkedIn' className='git' onClick={()=>window.open('https://github.com/MirAfzalul')}/>
                
            </div>
        </form>

    </div>
    
    
  )
}

export default Contact