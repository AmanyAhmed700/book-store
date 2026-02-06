import React from 'react';
import { IoMdMail } from "react-icons/io";
import './contact.css'
const Contact = () => {
  return (
 <section className="contact">
  <div className="contact-wrapper">
    <div className="contact-title">
         <IoMdMail className='iconform' />
    <h1>Get In Touch</h1>
     
        </div>
    <div className="icon">
  
      <p>Send Me a Message</p>
    </div>
    <div className="contact-infor">
      <form className='form-info'>
      <input type='text' placeholder='Your Name' className='input' />
      <input type='email' placeholder='Email' className='input' />
      <textarea placeholder='Message'/>
      <button>Send Message</button>
      </form>
   </div>
  </div>
 </section>
  )
}

export default Contact