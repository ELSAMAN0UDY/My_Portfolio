import './services.css'
import {MdDesignServices} from 'react-icons/md'
import {IoIosRocket} from 'react-icons/io'
import {FaCode} from 'react-icons/fa'

function Services() {
  return (
    <section id="services">
       <div className="top_section">
        <h5>What i Offer</h5>
        <h2>Services</h2>
       </div>


       <div className="container container_services">

        <article className='card'>
        <MdDesignServices className='icon' />
        <h3>Web Design</h3>
        <p className="text-light"> I build fully responsive, visually stunning web layouts focused on smooth user experiences and accessibility.</p>
        </article>

        <article className='card'>
        <IoIosRocket className='icon' />
        <h3>Fast Performance</h3>
        <p className="text-light">I build lightning-fast web applications optimized for speed, passing Google Lighthouse audits with near-perfect scores.</p>
        </article>

        <article className='card'>
        <FaCode className='icon' />
        <h3>Clean Code</h3>
        <p className="text-light"> I write semantic HTML, modern CSS, and optimized React code to ensure lightning-fast page loading speeds.</p>
        </article>

       </div>
    </section>
  )
}

export default Services
