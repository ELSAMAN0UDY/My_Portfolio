import { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser'

const ContactData= [
  {
    id:1,
    icon: <MdOutlineEmail/>,
    title:"Email",
    info:"mahmouedalsmanoudy@gmail.com",
    link:"mailto:mahmouedalsmanoudy@gmail.com",
  },
  {
    id:2,
    icon: <RiMessengerLine/>,
    title:"Messenger",
    info:"Mahmoued",
    link:"https://m.me/mahmoued.Elsamanoudy",
  },
  {
    id:3,
    icon: <BsWhatsapp/>,
    title:"WhatsApp",
    info:"01027162871",
    link:"https://api.whatsapp.com/send?phone=01027162871",
  },
]

function Contact() {
  const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ryc3ahh', 'template_08d86ke', form.current,  'R2QIRumWNBJstM5Rg',
      )
      e.target.reset()
  };
  return (
    <section className='contact' id='contact'>
      <div className="top_section">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_contanier">
            <div  className="contact_options">
          {ContactData.map(({id,icon,title,info,link})=>(
            <article className='contact_option' key={id}>
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank">Send Message</a>
            </article>
          ))}
          </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Full Name' name='name' />
          <input type="email" placeholder='Your Email' name='email' />
          <textarea rows={10} name="message" id="" placeholder='Enter Your Message'></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
