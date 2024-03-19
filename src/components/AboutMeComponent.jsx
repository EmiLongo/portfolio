import '../assets/styles/aboutMeComponent.css'
import LanguageContext from '../assets/context/LanguageContext'
import { useContext } from 'react'
const AboutMeComponent = () => {
  const { texts } = useContext(LanguageContext)
  return (
    <section className="aboutme" id="aboutMeSection">
        <h3>{texts.aboutmeH3}</h3>
        <h4>{texts.aboutmeH4}<i>{texts.aboutmeH4I}</i></h4>
        <div className="aboutme-text-container">
            <div className="aboutme-text">
                <p>{texts.aboutmeP1}</p>
                <p>{texts.aboutmeP2}</p>
                <p>{texts.aboutmeP3}</p>
            </div>
        </div>
    </section>
  )
}

export default AboutMeComponent