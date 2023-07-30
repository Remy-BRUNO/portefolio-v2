import { profil } from "../data"
const About = () => {
  const { description } = profil
  return (
    <section id="about" className="section">
      <h3>à propos</h3>
      <p>{description}</p>
      <img className="dev_img" src="./src/assets/dev_img.png" alt="dev_img" />
    </section>
  )
}
export default About
