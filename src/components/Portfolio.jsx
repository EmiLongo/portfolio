import AboutMeComponent from "./AboutMeComponent"
import HeroComponent from "./HeroComponent"
import ProjectsComponent from "./ProjectsComponent"
import NavBarComponent from "./NavBarComponent"
import ArrowComponent from "./ArrowComponent"
import GuidesComponent from "./GuidesComponent"
import FooterComponent from "./FooterComponent"
import AsideComponent from "./AsideComponent"
import TimeLineComponent from "./TimeLineComponent"
// import LoadingComponent from "./LoadingComponent"
import { LanguageProvider } from "../assets/context/LanguageContext"

const Portfolio = () => {
  return (
    <div className="portfolio">
        <h1>Desarrolador Web en Rosario, Argentina, Emiliano Longo</h1>
        <LanguageProvider>
          <NavBarComponent />
          <AsideComponent />
          <main>
            <HeroComponent />
            <AboutMeComponent />
            <TimeLineComponent />
            <ProjectsComponent />
            <GuidesComponent />
          </main>
          <FooterComponent />
        </LanguageProvider>
          <ArrowComponent />
          {/* <LoadingComponent /> */}
    </div>
  )
}

export default Portfolio