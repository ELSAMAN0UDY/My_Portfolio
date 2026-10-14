import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaDribbble } from "react-icons/fa"

function HomeSocial() {
  return (
    <div className="home_socials">
      <a href="https://www.linkedin.com/in/mahmoued-elsamanoudy-213ba1342" target="_blank"> <FaLinkedin /> </a>
      <a href="https://github.com/ELSAMAN0UDY" target="_blank">   <FaGithub /> </a>
      <a href="#" target="_blank"> <FaDribbble /> </a>
    </div>
  )
}

export default HomeSocial
