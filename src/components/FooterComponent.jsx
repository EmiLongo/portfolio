import { useContext } from 'react'
import LanguageContext from '../assets/context/LanguageContext'
import '../assets/styles/footerComponent.css'
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

              <button onClick={() => window.location.href = 'mailto:emi.longo@gmail.com'}
                      className='gradient-border'
              >
                {texts.footerButton}
              </button>
                {/* <!-- START Box --> */}
              {/* <div className="center-box">
                <div className="animated-border-box-glow"></div>
                <div className="animated-border-box">
                {texts.footerButton}
                </div>
              </div> */}
                {/* <!-- END --> */}
            </div>
        </div>
        <p>{texts.footerP2}</p>
      </div>
      {/* <div className='footer-bg'></div> */}
    </footer>
  )
}

export default FooterComponent