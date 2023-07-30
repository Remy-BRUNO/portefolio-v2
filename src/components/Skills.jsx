import { skills } from "../data"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useEffect } from "react"

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const Skills = () => {
  const skillsList = Object.entries(skills).filter((obj) => {
    if (obj[0].includes("skill")) {
      return obj
    }
  })

  const slideToTop = (elem, axeX, axeY, delay) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: axeY,
        x: axeX,
      },
      {
        opacity: 0.6,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
        delay: delay,
        duration: 3,
        ease: "elastic",
      }
    )
  }
  useEffect(() => {
    slideToTop("#logo-html", -400, -500, 0.5)
    slideToTop("#logo-css", 400, -500, 1)
    slideToTop("#logo-js", -400, -500, 1.5)
    slideToTop("#logo-react", 400, -500, 2)
    slideToTop("#logo-figma", -400, -500, 3)
    slideToTop("#logo-github", 400, -500, 2.5)
    slideToTop("#logo-sql", -400, -500, 3.5)
  }, [])

  return (
    <section id="skills" className="section">
      <h3>compétences</h3>
      {skillsList.map((skill) => (
        <h5 key={skill[0]}> {skill[1]}</h5>
      ))}
      <div className="logos">
        <img
          id="logo-html"
          className="logo"
          src="./src/assets/logos/logoHtml.png"
          alt="logo HTML"
        />
        <img
          id="logo-css"
          className="logo"
          src="./src/assets/logos/logoCss.png"
          alt="logo CSS"
        />
        <img
          id="logo-js"
          className="logo"
          src="./src/assets/logos/logoJs.png"
          alt="logo javascript"
        />
        <img
          id="logo-react"
          className="logo"
          src="./src/assets/logos/logoReact.png"
          alt="logo React"
        />
        <img
          id="logo-github"
          className="logo"
          src="./src/assets/logos/logoGithub.png"
          alt="logo Github"
        />
        <img
          id="logo-sql"
          className="logo"
          src="./src/assets/logos/logoSql.png"
          alt="logo SQL"
        />
        <img
          id="logo-figma"
          className="logo"
          src="./src/assets/logos/logoFigma.png"
          alt="logo Figma"
        />
      </div>
    </section>
  )
}
export default Skills
