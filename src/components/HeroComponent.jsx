import '../assets/styles/heroComponent.css'
import emiliano from '../assets/img/emiliano.webp'
import logoGitHub from '../assets/img/github.svg'
import logoLinkedIn from '../assets/img/linkedin.svg'
import cvemi from '../assets/CV-Emiliano Longo-SP-EN.pdf'
const HeroComponent = () => {
  return (
    <div className="hero-component">
        <div className='hero-bg-container'>
          <div className='hero-bg'><div className='hero-bg-filter'></div></div>
        </div>
        <div className='img-container'>
          <div className='img-profile'>
            <img src={emiliano} alt="Foto de Emiliano" className='slide-top'/>
          </div>
        </div>
        <div className='hero-text'>
          <h4>Hola!</h4>
          <h2><i>Soy</i> Emiliano Longo</h2>
          <h3>Front End <i>Developer</i></h3>
          <div className='hero-contact'>
              <a download='CV-Emiliano-Longo-ES-EN.pdf' href={cvemi}>
                <button>Descargar CV</button>
              </a>
              <img src={logoGitHub} alt="Perfil GitHub" width='32' />
              <img src={logoLinkedIn} alt="Perfil LinkedIn" width='32' />
          </div>
        </div>
    </div>
  )
}

export default HeroComponent