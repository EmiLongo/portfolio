import { useContext, useState } from 'react'
import LanguageContext from '../assets/context/LanguageContext'
import '../assets/styles/footerComponent.css'
import '../assets/animations/GlowingButton/GlowingButton.css'
import '../assets/animations/heartBeat.css'
import copy from '../assets/img/copy.svg'
import { GlowingButton } from '../assets/animations/GlowingButton/GlowingButton'
const FooterComponent = () => {
  const { texts } = useContext(LanguageContext)

  // copiar mail al portapapeles
  const [alertMsg, setAlertMsg] = useState(false);
  const copyMail = () => {
    navigator.clipboard.writeText('emi.longo@gmail.com')
      .then(() => {
        console.log('¡Texto copiado al portapapeles!');
        setAlertMsg(true);
        setTimeout(() => {
          setAlertMsg(false);
        }, 5000); //
      })
      .catch((error) => {
        console.error('Error al copiar al portapapeles:', error);
      });
  };


  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-conect'>
            <div className='footer-conect-left'>
              <h2 className='heartbeat'>{texts.footer.h3}</h2>
            </div>
            <div className='footer-conect-right'>
              <p>{texts.footer.p1}</p>
              <GlowingButton 
                    action={() => window.location.href = 'mailto:emi.longo@gmail.com'}
              >
                {texts.footer.button}
              </GlowingButton>
                <div className='copyBtn'>
                  <img src={copy} alt="Copiar email" width='24' onClick={copyMail} />
                  {alertMsg && <span>{texts.footer.span}</span>}
                </div>
            </div>
        </div>
        <p className='footer-legend'
          onClick={() => {window.open("https://github.com/EmiLongo/portfolio", "_blank")}}
        >
        {texts.footer.p2}</p>
      </div>
    </footer>
  )
}

export default FooterComponent