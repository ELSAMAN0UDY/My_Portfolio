import './about.css'
import Image from '../../assets/Me5.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

function About() {
  return (
    <div>
      <section className="about" id='about'>
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Image} alt="" />
          </div>
        </div>

      <div className="about_content">

        <div className="about_cards">


          <div className="about_card">
            <FaAward className='about_icon' />
            <h5>Experience</h5>
            <small>1+ years working</small>
          </div>

          <div className="about_card">
            <FiUsers className='about_icon' />
            <h5>Clients</h5>
            <small>200+ worldwide</small>
          </div>

          <div className="about_card">
            <VscFolderLibrary className='about_icon' />
            <h5>Project</h5>
            <small>80+ completed</small>
          </div>

        </div>

        <p>Hi, I'm Mahmoud, a Frontend React Developer passionate about engineering high-performance web applications with clean, maintainable code. I bridge the gap between complex functionality and beautiful, responsive UI design to deliver seamless user experiences.</p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>


      </div>
      </section>
    </div>
  )
}

export default About
