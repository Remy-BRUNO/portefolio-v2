import firstProject from "./assets/projet-1.jpg"
import secondProject from "./assets/projet-2.jpg"
import thirdProject from "./assets/projet-3.jpg"
import profilPict from "./assets/profilPict.png"

export const profil = {
  id: 1,
  firstName: "Rémy",
  secondName: "BRUNO",
  image: profilPict,
  job: "Développeur web et web mobile",
  description: `Boujour, je m’appelle BRUNO Rémy originaire de Chambéry en Savoie.
Mordu d’informatique, j’ai commencé à apprendre divers langages informatiques (HTML, CSS et Javascript) en autodidacte et ai été heurté au mur des connaissances.Ce qui m’a conduit à m’inscrire à la formation développeur web et web mobile au sein de FOREACH Academy. Polyvalent, je maîtrise les différentes étapes techniques de la création d’un site ou d’une application web ; de la compréhension des besoins utilisateurs, au développement frontend et backend en passant par la maintenance.
`,
}
export const skills = {
  skill1: "HTML",
  skill2: "CSS",
  skill3: "Javascript",
  skill4: "REACT",
  skill5: "Figma",
  skill6: "Git",
  skill7: "Github",
  skill8: "SQL",
}
export const navLinks = [
  {
    id: "greet",
    url: "greet",
    text: "accueil",
  },
  {
    id: "about",
    url: "about",
    text: "à propos",
  },
  {
    id: "skills",
    url: "skills",
    text: "compétences",
  },
  {
    id: "projects",
    url: "projects",
    text: "projets",
  },
  {
    id: "contact",
    url: "contact",
    text: "contact",
  },
]

export const projects = [
  {
    id: 1,
    image: firstProject,
    name: "projet-1",
    url: "",
    description:
      "Lorem ipsum dolor sit amet. Qui esse perferendis est neque voluptas qui officia.",
  },
  {
    id: 2,
    image: secondProject,
    name: "projet-2",
    url: "",
    description:
      "Lorem ipsum dolor sit amet. Qui esse perferendis est neque voluptas qui officia.",
  },
  {
    id: 3,
    image: thirdProject,
    name: "projet-3",
    url: "",
    description:
      "Lorem ipsum dolor sit amet. Qui esse perferendis est neque voluptas qui officia.",
  },
]
export const socials = [
  {
    id: 1,
    url: "https://github.com/Remy-BRUNO",
    icon: "/icons/icon_github_.svg",
  },
  {
    id: 2,
    url: "https://linkedin.com/in/rémy-bruno",
    icon: "/icons/icon_linkedin_.svg",
  },
  {
    id: 3,
    url: "mailto:bruno.remy.sebastien@gmail.com",
    icon: "/icons/icon_mail_.svg",
  },
]
