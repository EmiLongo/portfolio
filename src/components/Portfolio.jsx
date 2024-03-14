import AboutMeComponent from "./AboutMeComponent"
import HeroComponent from "./HeroComponent"
import ProjectsComponent from "./ProjectsComponent"
import NavBarComponent from "./NavBarComponent"
import ArrowComponent from "./ArrowComponent"
import Guides from "./Guides"
import FooterComponent from "./FooterComponent"
const Portfolio = () => {
  return (
    <div className="portfolio">
        <h1>Desarrolador Web en Rosario, Emiliano Longo</h1>
        <NavBarComponent />
        <HeroComponent />
        <ArrowComponent />
        <AboutMeComponent />
        <ProjectsComponent />
        <Guides />
        <FooterComponent />
    </div>
  )
}

export default Portfolio