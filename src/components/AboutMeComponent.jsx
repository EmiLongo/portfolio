import '../assets/styles/aboutMeComponent.css'
import LanguageContext from '../assets/context/LanguageContext'
import { useContext } from 'react'
const AboutMeComponent = () => {
  const { texts } = useContext(LanguageContext)
  return (
    <div className="aboutme">
        <h3>{texts.aboutmeH3}</h3><i id="aboutMeSection"></i>
        <div className="aboutme-text-container">
            <div className="aboutme-text">
                <h4>{texts.aboutmeH4}<i>{texts.aboutmeH4I}</i></h4>
                <p>{texts.aboutmeP1}</p>
                <p>{texts.aboutmeP2}</p>
                <p>{texts.aboutmeP3}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMeComponent