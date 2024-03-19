import { useContext } from 'react'
import LanguageContext from '../assets/context/LanguageContext'
import '../assets/styles/footerComponent.css'
const FooterComponent = () => {
  const { texts } = useContext(LanguageContext)

  return (
    <footer>
      <div className='footer-container'>
        <p>{texts.footerP}</p>
      </div>
      <div className='footer-bg'></div>
    </footer>
  )
}

export default FooterComponent