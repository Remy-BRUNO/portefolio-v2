import { navLinks, socials, profil } from "../data"
import burger from "../assets/burger.svg"
import { useRef, useState } from "react"
import { Link } from "react-scroll"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  const ulRef = useRef()

  const { firstName, secondName } = profil

  const handleShowlinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <nav className="">
      <div className="nav-header">
        <h3>
          <span>{secondName} </span>
          <span>{firstName}</span>
        </h3>
        <button
          className="btn burger"
          style={{ transform: showLinks ? "rotate(90deg)" : "" }}
        >
          <img src={burger} alt="bouton burger" onClick={handleShowlinks} />
        </button>
      </div>
      <div
        className="nav-links"
        style={{
          height: showLinks
            ? ulRef.current.getBoundingClientRect().height
            : "0",
        }}
      >
        <ul ref={ulRef}>
          {navLinks.map((link) => {
            const { id, url, text } = link
            return (
              <li key={id} className="link">
                <Link
                  className="nav-link"
                  to={url}
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                  onClick={handleShowlinks}
                >
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <ul className="nav-socials">
        {socials.map((social) => {
          const { id, url, icon } = social
          return (
            <li key={id} className="social-list">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt="" />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Navbar
