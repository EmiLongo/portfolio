import '../assets/styles/projectsComponent.css'
import desktop from '../assets/img/projects/desktop.svg'
import mobile from '../assets/img/projects/mobile.svg'
import tablet from '../assets/img/projects/tablet.svg'
import info from '../assets/img/projects/info.svg'
import redirect from '../assets/img/projects/share-plane.svg'
import github from '../assets/img/github.svg'
import css from '../assets/img/projects/css.svg'
import html from '../assets/img/projects/html.svg'
import javascript from '../assets/img/projects/javascript.svg'
import react from '../assets/img/projects/react.svg'
import tailwind from '../assets/img/projects/tailwind-css.svg'
import vitejs from '../assets/img/projects/vitejs.svg'
import desktopKara from '../assets/img/projects/kara-desktop.webp'
import mobileKara from '../assets/img/projects/kara-mobile.webp'
import tabletKara from '../assets/img/projects/kara-tablet.webp'
import desktopMundo from '../assets/img/projects/mundo-desktop.webp'
import mobileMundo from '../assets/img/projects/mundo-mobile.webp'
import tabletMundo from '../assets/img/projects/mundo-tablet.webp'
import { useContext, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import LanguageContext from '../assets/context/LanguageContext'

const ProjectsComponent = () => {
  const { texts } = useContext(LanguageContext)
  // project card1
  const [cardView1, setCardView1] = useState(1)
  const [isInfo1, setIsInfo1] = useState(false)
  const handleView1 = (position) => {
    setCardView1(position);
  }
  const handleInfo1 = () => {
    setIsInfo1(!isInfo1);
  }
  // project card1
  const [cardView2, setCardView2] = useState(1)
  const [isInfo2, setIsInfo2] = useState(false)
  const handleView2 = (position) => {
    setCardView2(position);
  }
  const handleInfo2 = () => {
    setIsInfo2(!isInfo2);
  }

  return (
    <section className="projects">
      <h3>{texts.projectsH3}</h3>
      <i id="projectsSection"></i>


          <div className='project-item'>
            <div className='project-card-header'>
                <h4>{texts.projectscard1H4}</h4>
                <p>{texts.projectscard1p}</p>

            </div>
            <div className='project-card-body'>
                  <div className='project-imgs-header'>
                    <img src={info} loading='lazy' alt="Info Proyecto" width='32' 
                        onClick={handleInfo1}
                    />
                    <a href="https://zara-clone-reactjs.netlify.app/" target="_blank">
                       <img src={redirect} loading='lazy' alt="Demo del Proyecto" width='32' />
                    </a>
                    <a href="https://github.com/No-Country/c16-37-m-java-react/" target="_blank">
                      <img src={github} loading='lazy' alt="Código del Proyecto" width='32' />
                    </a>
                  </div>
                      <div className='project-imgs-body'>
                      <SwitchTransition>
                        <CSSTransition
                          key={cardView1}
                          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                          classNames='fade'
                        >
                        <img src={cardView1 == 1 ? desktopKara : 
                                  cardView1 == 2 ? tabletKara : mobileKara} 
                            loading='lazy' 
                            alt="Kara desde Dispositivos"
                            height='260' 
                        />
                        </CSSTransition>
                      </SwitchTransition>
                      </div>
                      
                <div className='project-imgs-footer'>
                    <img src={desktop} loading='lazy' alt="Vista desde Desktop" width='32' onClick={() => handleView1(1)} />
                    <img src={tablet} loading='lazy' alt="Vista desde Tablet" width='32' onClick={() => handleView1(2)} />
                    <img src={mobile} loading='lazy' alt="Vista desde Mobile" width='32' onClick={() => handleView1(3)} />
                </div>
            </div>
            {isInfo1 ? 
            <div className='project-info'>                        
                  <div className="project-details">
                      <p>{texts.projectscard1details}</p>
                  </div>
                  <div className='project-info-footer'>
                      <img src={css} width='32' />
                      <img src={html} width='32' />
                      <img src={javascript} width='32' />
                      <img src={react} width='32' />
                      <img src={tailwind} width='32' />
                      <img src={vitejs} width='32' />
                  </div>
            </div> : ""}
       
          </div>

          <div className='void'></div>

          <div className='project-item'>
            <div className='project-card-header'>
                <h4>{texts.projectscard2H4}</h4>
                <p>MUNDO ADAPTÓGENOS</p>

            </div>
            <div className='project-card-body'>
                  <div className='project-imgs-header'>
                    <img src={info} loading='lazy' alt="Info Proyecto" width='32' 
                        onClick={handleInfo2}
                    />
                    <a href="https://mundoadaptogenos.netlify.app/" target="_blank">
                       <img src={redirect} loading='lazy' alt="Demo del Proyecto" width='32' />
                    </a>
                    <a href="https://github.com/No-Country/c16-37-m-java-react/" target="_blank">
                      <img src={github} loading='lazy' alt="Código del Proyecto" width='32' />
                    </a>
                  </div>
                  <div className='project-imgs-body'>
                  <SwitchTransition>
                    <CSSTransition
                      key={cardView2}
                      addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                      classNames='fade'
                    >
                      <img src={cardView2 == 1 ? desktopMundo : 
                                cardView2 == 2 ? tabletMundo : mobileMundo} 
                          loading='lazy' 
                          alt="Mundo Adaptógenos desde Dispositivos" 
                          height='260' 
                      />
                      </CSSTransition>
                    </SwitchTransition>
                  </div>
                <div className='project-imgs-footer'>
                    <img src={desktop} loading='lazy' alt="Vista desde Desktop" width='32' onClick={() => handleView2(1)} />
                    <img src={tablet} loading='lazy' alt="Vista desde Tablet" width='32' onClick={() => handleView2(2)} />
                    <img src={mobile} loading='lazy' alt="Vista desde Mobile" width='32' onClick={() => handleView2(3)} />
                </div>
            </div>
            {isInfo2 ? 
            <div className='project-info'>                        
                  <div className="project-details">
                      <p>
                        </p>
                  </div>
                  <div className='project-info-footer'>
                      <img src={css} width='32' />
                      <img src={html} width='32' />
                      <img src={javascript} width='32' />
                  </div>
            </div> : ""}
       
          </div>
     </section>
  )
}

export default ProjectsComponent