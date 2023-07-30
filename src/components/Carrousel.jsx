import { projects } from "../data"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.css"
const Carrousel = () => {
  return (
    <section id="projects" className="section">
      <h3>mes projet</h3>
      <Carousel>
        {projects.map((project) => {
          const { id, image, name, url, description } = project
          return (
            <div key={id} className="project">
              <h4 className="project-title">{name}</h4>
              <img src={image} alt={name} className="project-vignette" />
              <p className="project-info">{description} </p>
              <a
                className="project-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
          )
        })}
      </Carousel>
    </section>
  )
}
export default Carrousel
