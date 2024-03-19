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
import { useState } from 'react'

const ProjectsComponent = () => {
  const [cardView1, setCardView1] = useState(1)
  const [isInfo1, setIsInfo1] = useState(false)
  const handleView1 = (position) => {
    setCardView1(position);
  }
  const handleInfo1 = () => {
    setIsInfo1(!isInfo1);
  }
  return (
    <div className="projects" id="projectsSection">
      <h3>Proyectos</h3>


          <div className='project-item'>
            <div className='project-card-header'>
                <h4>Clone de Tienda de Ropa Zara Colombia 2023.</h4>
                <p>SIMULACIÓN LABORAL GRUPAL NO-COUNTRY</p>

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
                    <img src={cardView1 == 1 ? desktopKara : 
                              cardView1 == 2 ? tabletKara : mobileKara} 
                        loading='lazy' 
                        alt="Kara desde Desktop" 
                    />
                  </div>
                <div className='project-imgs-footer'>
                    <img src={desktop} loading='lazy' alt="Vista desde Desktop" width='32' onClick={() => handleView1(1)} />
                    <img src={tablet} loading='lazy' alt="Vista desde Tablet" width='32' onClick={() => handleView1(2)} />
                    <img src={mobile} loading='lazy' alt="Vista desde Mobile" width='32' onClick={() => handleView1(3)} />
                </div>
            </div>
            <div className={`project-info ${isInfo1 ? '' : 'novisible' }`}>
                  <div className="project-details">
                      <p>
                        Me encargué del diseño del Front End en React JS con Vite, Creado desde un 
                        Figma, SEO en el Rendimiento, Estilos con CSS y TailWind, Responsive y 
                        Single Page Application.
                      </p>
                  </div>
                  <div className='project-info-footer'>
                      <img src={css} width='32' />
                      <img src={html} width='32' />
                      <img src={javascript} width='32' />
                      <img src={react} width='32' />
                      <img src={tailwind} width='32' />
                      <img src={vitejs} width='32' />
                  </div>
            </div>
       
          </div>
      <br /><br />
      <div className='project-card'>
          <a href="https://mundoadaptogenos.netlify.app/" target="_blank"><div className="project-details">(DESARROLLADOR WEB) MUNDO ADAPTÓGENOS
                Diseño de branding. Creación de Contenidos e Imágenes, 
          Estructura del Proyecto, SEO en el Rendimiento, Estilos con CSS, 
          Responsive y Mobile First, Desarrollo JavaScript Vainilla.</div></a>
          <div className='project-view'>
            <div className='project-imgs-body'>
            <img src={desktopMundo} loading='lazy' alt="Vista desde Desktop" height='100' />

            </div>
            <div className='project-imgs-footer'>
              <img src={desktop} loading='lazy' alt="Vista desde Desktop" width='32' />
              <img src={tablet} loading='lazy' alt="Vista desde Tablet" width='32' />
              <img src={mobile} loading='lazy' alt="Vista desde Mobile" width='32' />
            </div>
          </div>
      </div>

   

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </div>
  )
}

export default ProjectsComponent