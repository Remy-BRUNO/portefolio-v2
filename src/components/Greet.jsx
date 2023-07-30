import { profil } from "../data"

const Greet = () => {
  const { image, job } = profil
  return (
    <section id="greet" className="parallax">
      <div className="greet-center">
        <img src={image} alt="photo de profil" className="img-profil" />
        <h2 className="job">{job} </h2>
      </div>
    </section>
  )
}
export default Greet
