import AboutMeComponent from "./AboutMeComponent"
import HeroComponent from "./HeroComponent"
import ProjectsComponent from "./ProjectsComponent"
import NavBarComponent from "./NavBarComponent"
import ArrowComponent from "./ArrowComponent"
const Portfolio = () => {
  return (
    <div className="portfolio">
        <h1>Desarrolador Web en Rosario, Emiliano Longo</h1>
        <NavBarComponent />
        <HeroComponent />
        <ArrowComponent />
        <AboutMeComponent />
        <ProjectsComponent />
    </div>
  )
}

export default Portfolio