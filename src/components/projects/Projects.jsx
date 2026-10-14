import './projects.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const ImageData = [
  {
    id:1,
    image:IMG1,
    title:'☕ Coffe Shop',
    github:'https://github.com/ELSAMAN0UDY/Template_2.git',
    demo:'https://elsaman0udy.github.io/Template_2/'
  },
  {
    id:2,
    image:IMG2,
    title:'portfolio item 2',
    github:'https://github.com/project2',
    demo:'https://demo2.com'
  },
  {
    id:3,
    image:IMG3,
    title:'portfolio item 3',
    github:'https://github.com/project3',
    demo:'https://demo3.com'
  },
  {
    id:4,
    image:IMG4,
    title:'portfolio item 4',
    github:'https://github.com/project4',
    demo:'https://demo4.com'
  },
  {
    id:5,
    image:IMG5,
    title:'portfolio item 5',
    github:'https://github.com/project5',
    demo:'https://demo5.com'
  },
  {
    id:6,
    image:IMG6,
    title:'portfolio item 6',
    github:'https://github.com/project6',
    demo:'https://demo6.com'
  },
]

function Projects() {
  return (
    <section className='projects' id='projects'>
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>

      <div className="container projects_container">

        {ImageData.map(({id,title,image,github,demo})=>(

        <article key={id} className='portfolio_item'>
          <div className="portflio_item_img">
              <img src={image} alt={title} />
          </div>

          <h3>{title}</h3>


          <div className="portoflio_item_btn">
            <a target="_blank" href={github} className='btn'>Github</a>
            <a target="_blank" href={demo} className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        ))}

      </div>
    </section>
  )
}

export default Projects
