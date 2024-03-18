import AboutMeComponent from "./AboutMeComponent"
import HeroComponent from "./HeroComponent"
import ProjectsComponent from "./ProjectsComponent"
import NavBarComponent from "./NavBarComponent"
import ArrowComponent from "./ArrowComponent"
import GuidesComponent from "./GuidesComponent"
import FooterComponent from "./FooterComponent"
import AsideComponent from "./AsideComponent"
import { LanguageProvider } from "../assets/context/LanguageContext"

const Portfolio = () => {
  return (
    <div className="portfolio">
        <h1>Desarrolador Web en Rosario, Emiliano Longo</h1>
        <LanguageProvider>
          <NavBarComponent />
          <HeroComponent />
          <AsideComponent />
          <AboutMeComponent />
        </LanguageProvider>
          <ProjectsComponent />
          <GuidesComponent />
          <FooterComponent />
          <ArrowComponent />
    </div>
  )
}

export default Portfolio