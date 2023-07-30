import { socials } from "../data"
const Footer = () => {
  return (
    <footer id="contact" className="section">
      <h3>me contacter</h3>
      <div className="socials">
        {socials.map((social) => {
          const { id, url, icon } = social
          return (
            <div key={id} className="social social-list">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={url} />
              </a>
              <p>{url}</p>
            </div>
          )
        })}
      </div>
    </footer>
  )
}
export default Footer
