import './home.css'
import Me from '../../assets/Me4.png'
import Cv from '../../assets/cv.pdf'
import HomeSocial from './HomeSocial'

function Home() {
  return (
    <div className='home' id='home'>
      <div className="container container_home">


        <h4>Hello I,m</h4>
        <h1>Mahmoued Moustafa</h1>

        <h4 className='text-light'>Frontend Developer || Developer N8n</h4>

        <div className="btns">
          <a href={Cv} className='btn' download>Download cv</a>
          <a href="#" className='btn btn-primary'>Let,s talk</a>
        </div>

        <div className="me">
          <img src={Me} alt="" />
        </div>


        <a href="#about" className='scroll_down'>Scroll Down</a>

        <HomeSocial />
      </div>
    </div>
  )
}

export default Home
