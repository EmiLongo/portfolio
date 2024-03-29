import '../assets/styles/navBarComponent.css'
// import logoGitHub from '../assets/img/github.svg'
// import logoLinkedIn from '../assets/img/linkedin.svg'
// import iconLight from '../assets/img/mode-light.svg'
// import iconDark from '../assets/img/mode-dark.svg'
import iconLanguage from '../assets/img/language.svg'
import { useContext, useState } from 'react'
import LanguageContext from '../assets/context/LanguageContext'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
const NavBar = () => {
  const { handleLanguange } = useContext(LanguageContext)
  const [languageSel, setLanguageSel] = useState('ES')
  const [languageNext, setLanguageNext] = useState('EN')
  // const [isDarkTheme, setIsDarkTheme] = useState(true)
  // const handleTheme = () => {
  //   setIsDarkTheme(!isDarkTheme)
  // }
  const handleClick = () => {
    const language = languageSel === 'ES' ? 'EN' : 'ES';
    const nextLanguage = language === 'ES' ? 'EN' : 'ES';
    setLanguageSel(language);
    handleLanguange(language); 
    setLanguageNext(nextLanguage);
  }

  return (
    <nav className="nav-bar">
        <div className='nav-bar-bg'></div>
        <div className="nav-bar-logo">
            <div className='nav-bar-logo-text'
                  onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      })
                    } }
            >
            emi[dev]</div>
        </div>
        {/* <div className='nav-bar-contact'>
            <button>Descargar CV</button>
            <img src={logoGitHub} alt="Perfil GitHub" width='32' />
            <img src={logoLinkedIn} alt="Perfil LinkedIn" width='32' />
        </div> */}
        <div className="nav-bar-side">
            {/* <img src={isDarkTheme ? iconLight : iconDark} 
                alt="Toogle Theme"
                onClick={handleTheme}
                width='32'
            /> */}
            <div className='nav-bar-language' onClick={handleClick}>
              <img src={iconLanguage} alt="Toogle Language" width='32' />
              <SwitchTransition>
                <CSSTransition 
                         key={languageNext}
                         addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                         classNames='fade'
                >
                  <span>{languageNext}</span>
                </CSSTransition>
              </SwitchTransition>
            </div>
        </div>

    </nav>
  )
}

export default NavBar