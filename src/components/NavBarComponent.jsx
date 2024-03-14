import '../assets/styles/navBarComponent.css'
// import logoGitHub from '../assets/img/github.svg'
// import logoLinkedIn from '../assets/img/linkedin.svg'
import iconLight from '../assets/img/mode-light.svg'
import iconDark from '../assets/img/mode-dark.svg'
import iconLanguage from '../assets/img/language.svg'
import { useState } from 'react'
const NavBar = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const handleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }
  return (
    <div className="nav-bar">
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
            emi.dev</div>
        </div>
        {/* <div className='nav-bar-contact'>
            <button>Descargar CV</button>
            <img src={logoGitHub} alt="Perfil GitHub" width='32' />
            <img src={logoLinkedIn} alt="Perfil LinkedIn" width='32' />
        </div> */}
        <div className="nav-bar-side">
            <img src={isDarkTheme ? iconDark : iconLight} 
                alt="Toogle Theme"
                onClick={handleTheme}
                width='32'
            />
            <img src={iconLanguage} alt="Toogle Language" width='32' />
        </div>

    </div>
  )
}

export default NavBar