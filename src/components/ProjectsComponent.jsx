import '../assets/styles/projectsComponent.css'
import desktop from '../assets/img/projects/desktop.svg'
import mobile from '../assets/img/projects/mobile.svg'
import tablet from '../assets/img/projects/tablet.svg'
import desktopKara from '../assets/img/projects/kara-desktop.webp'
import mobileKara from '../assets/img/projects/kara-mobile.webp'
import tabletKara from '../assets/img/projects/kara-tablet.webp'
import desktopMundo from '../assets/img/projects/mundo-desktop.webp'
import mobileMundo from '../assets/img/projects/mundo-mobile.webp'
import tabletMundo from '../assets/img/projects/mundo-tablet.webp'

const ProjectsComponent = () => {
  return (
    <div className="projects" id="projectsSection">
      <h3>Proyectos</h3>
      <div className='project-card'>
          <a href="https://zara-clone-reactjs.netlify.app/" target="_blank"><div className="project-details">
          SIMULACIÓN LABORAL GRUPAL NO-COUNTRY
          Proyecto Clone de la Tienda de ropa Zara Colombia 2023.
          Diseño del Front End en React JS con Vite, Creado desde un 
          Figma, SEO en el Rendimiento, Estilos con CSS, Responsive y 
          Single Page Application, Desarrollo con TailWind.
          </div></a>
          <div className='project-view'>
          <div className='project-imgs-body'>
            <img src={desktopKara} loading='lazy' alt="Kara desde Desktop" height='100' />
            <img src={tabletKara} loading='lazy' alt="Kara desde Tablet" height='100' />
            <img src={mobileKara} loading='lazy' alt="Kara desde Mobile" height='100' />

          </div>
          <div className='project-imgs-footer'>
          <img src={desktop} loading='lazy' alt="Vista desde Desktop" width='32' />
              <img src={tablet} loading='lazy' alt="Vista desde Tablet" width='32' />
              <img src={mobile} loading='lazy' alt="Vista desde Mobile" width='32' />
          </div>
        </div>
      </div>
      <div className='project-card'>
          <a href="https://mundoadaptogenos.netlify.app/" target="_blank"><div className="project-details">(DESARROLLADOR WEB) MUNDO ADAPTÓGENOS
                Diseño de branding. Creación de Contenidos e Imágenes, 
          Estructura del Proyecto, SEO en el Rendimiento, Estilos con CSS, 
          Responsive y Mobile First, Desarrollo JavaScript Vainilla.</div></a>
          <div className='project-view'>
            <div className='project-imgs-body'>
            <img src={desktopMundo} loading='lazy' alt="Vista desde Desktop" height='100' />
            <img src={tabletMundo} loading='lazy' alt="Vista desde Tablet" height='100' />
            <img src={mobileMundo} loading='lazy' alt="Vista desde Mobile" height='100' />

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