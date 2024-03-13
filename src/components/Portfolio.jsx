import AboutMeComponent from "./AboutMeComponent"
import HeroComponent from "./HeroComponent"
import ProjectsComponent from "./ProjectsComponent"
import NavBarComponent from "./NavBarComponent"
const Portfolio = () => {
  return (
    <div className="portfolio">
        <NavBarComponent />
        <HeroComponent />
        <AboutMeComponent />
        <ProjectsComponent />
    </div>
  )
}

export default Portfolio