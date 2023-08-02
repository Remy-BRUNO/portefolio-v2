import { profil } from "../data"
import devImg from "../assets/dev_img.png"

const About = () => {
  const { description } = profil
  return (
    <section id="about" className="section">
      <h3>à propos</h3>
      <p>{description}</p>
      <img className="dev_img" src={devImg} alt="dev_img" />
    </section>
  )
}
export default About
