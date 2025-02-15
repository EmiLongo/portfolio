import '../assets/styles/aboutMeComponent.css'
import LanguageContext from '../assets/context/LanguageContext'
import { useContext } from 'react'
const AboutMeComponent = () => {
  const { texts } = useContext(LanguageContext)
  return (
    <div className="aboutme">
        <h3>{texts.aboutme.h3}</h3><i id="aboutMeSection"></i>
        <div className="aboutme-text-container">
            <div className="aboutme-text">
                <h4>{texts.aboutme.h4}<i>{texts.aboutme.h4I}</i></h4>
                <p>{texts.aboutme.p1}</p>
                <p>{texts.aboutme.p2}</p>
                <p>{texts.aboutme.p3}</p>
                <p>{texts.aboutme.p4}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMeComponent