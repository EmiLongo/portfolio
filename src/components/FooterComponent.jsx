import { useContext } from 'react'
import LanguageContext from '../assets/context/LanguageContext'
import '../assets/styles/footerComponent.css'
import '../assets/animations/GlowingButton/GlowingButton.css'
import '../assets/animations/heartBeat.css'
import { GlowingButton } from '../assets/animations/GlowingButton/GlowingButton'
const FooterComponent = () => {
  const { texts } = useContext(LanguageContext)

  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-conect'>
            <div className='footer-conect-left'>
              <h2 className='heartbeat'>{texts.footerH3}</h2>
            </div>
            <div className='footer-conect-right'>
              <p>{texts.footerP1}</p>
              <GlowingButton 
                    action={() => window.location.href = 'mailto:emi.longo@gmail.com'}
              >
                {texts.footerButton}
              </GlowingButton>
            </div>
        </div>
        <p className='footer-legend'
          onClick={() => {window.open("https://github.com/EmiLongo/portfolio", "_blank")}}
        >
        {texts.footerP2}</p>
      </div>
      {/* <div className='footer-bg'></div> */}
    </footer>
  )
}

export default FooterComponent