// src/assets/helpers/languages.js
export const translation = {
    ES: {
        hero: {
            h4: 'Hola!',
            h2i: 'Soy',
            button: 'Descargar CV'
        },
        aside: {
            aboutMe: 'ACERCA DE MI',
            experience: 'EXPERIENCIA',
            projects: 'PROYECTOS',
            inspiration: 'INSPIRACIÓN'
        },
        aboutme: {
            h3: 'ACERCA DE MI',
            h4: 'Todo lo que imaginas ',
            h4i: 'lo puedes programar',
            p1: 'Aporto lo mejor de mi desde Rosario, una hermosa ciudad de  Argentina.',
            p2: 'He trabajado por 11 años en empresas multinacionales y he sido emprendedor por 8 años más. Entiendo muy bien como manejarme en grupos interdisciplinarios.',
            p3: 'Busco actualizarme constantemente con nuevas ideas para mejorar proyectos, y además, aprecio mucho el feedback.',
            p4: 'Hago foco en los requerimientos del cliente. Proporciono soluciones efectivas y adaptadas a sus necesidades.'
        },
        timeline:{
            h3: 'EXPERIENCIA',
            experiences: {
                becode:
                {
                  name: "BeCode",
                  startDate: "2024-10",
                  endDate: "Actual",
                  location: "Colombia – Remoto",
                  description: {
                    0: "Desarrollo Front End de una Plataforma Educativa de Idiomas, implementando una arquitectura modular con React.js.",
                    1: "Creación de componentes reutilizables para mejorar la mantenibilidad y escalabilidad del código.",
                    2: "Gestión eficiente del estado global con Redux Toolkit y consumo de APIs REST.",
                    3: "Configuración de enrutado dinámico con React Router DOM para mejorar la navegación.",
                    4: "Personalización de componentes con Material UI, asegurando consistencia visual y accesibilidad.",
                    5: "Implementación y optimización del despliegue en Vercel para entornos de desarrollo y producción.",
                  },
                },
                qoop:
                {
                  name: "qoop.Ai",
                  startDate: "2024-07",
                  endDate: "2024-10",
                  location: "Mexico – Remoto",
                  description: {
                    0: "Desarrollo y mantenimiento de una aplicación de asistencia personal con IA, utilizando React.js.",
                    1: "Implementación de Redux Toolkit para una gestión de estado fluida y eficiente.",
                    2: "Integración de APIs desarrolladas en FastAPI, optimizando la comunicación entre frontend y backend con Axios.",
                    3: "Personalización avanzada de UI con Material UI, asegurando coherencia visual y experiencia de usuario optimizada.",
                    4: "Configuración de React Router DOM para un enrutamiento dinámico e intuitivo.",
                    5: "Despliegue automatizado en Vercel, garantizando estabilidad en producción.",
                  },
                },
                nocountry:
                {
                  name: "No Country",
                  startDate: "2024-07",
                  endDate: "2024-10",
                  location: "Argentina - Remoto",
                  description: {
                    0: "Simulación Laboral Grupal. Desarrollo de MVPs para proyectos innovadores.",
                    1: "Implementación con React.js, Vite, Redux y React Router, optimizando rendimiento y desarrollo ágil.",
                    2: "Aplicación de SEO técnico para mejorar la indexación y velocidad de carga.",
                    3: "Diseño responsive con Tailwind CSS y arquitectura SPA (Single Page Application).",
                    4: "Trabajo bajo metodologías ágiles (Scrum) y control de versiones con GitFlow.",
                  },
                },
                mundoAdaptogenos:
                {
                  name: "Mundo Adaptógenos",
                  startDate: "2024-07",
                  endDate: "2024-10",
                  location: "Argentina – Freelancer Remoto",
                  description: {
                    0: "Desarrollo de un e-commerce desde cero con JavaScript Vanilla.",
                    1: "Optimización de SEO y rendimiento, mejorando tiempos de carga y accesibilidad.",
                    2: "Diseño responsive con CSS puro bajo enfoque Mobile First.",
                    3: "Despliegue en Netlify, asegurando estabilidad y disponibilidad del sitio.",
                  },
                },
            }
        },
        projects: {
            h3: 'PROYECTOS',
            // LA NUMERACION DE LA TARJETA TIENE QUE SER EL MISMO QUE EL ID EN PROJECTDATA
            projectscard5: {
                h4: 'CLONE DE BLOCK.XYZ',
                p: 'DESARROLLO WEB CON THREE.JS',
                details: 'Proyecto técnico desarrollado desde cero como parte de una prueba técnica para un puesto de Front End. Implementación de librerías de Three.js para React, con diseño responsivo y estilos en CSS.'
            },
            projectscard4: {
                h4: 'E-commerce del Emprendimiento',
                p: 'MUNDO ADAPTÓGENOS',
                details: 'Hice el diseño de branding. Creación de Contenidos e Imágenes, Estructura del Proyecto, SEO en el Rendimiento, Estilos con CSS, Responsive y Mobile First, Desarrollo JavaScript Vainilla.'
            },
            projectscard3: {
                h4: 'EUREKA - Plataforma de cursos y aprendizaje en línea',
                p: 'SIMULACIÓN LABORAL GRUPAL NO-COUNTRY',
                details: 'Me encargué del desarrollo completo del HOME, BARRA NAVEGACIÓN, FOOTER y EQUIPO. Hice las funcionalidaes del DASHBOARD ALUMNO. Usamos User Stories, Scrum y Trello. Desarrollo en React JS desde un Figma, metodología GitFlow, Estilos TailWind, Responsive y Single Page Application.'
            },
            projectscard2: {
                h4: 'Clone de Tienda de Ropa Zara Colombia 2023',
                p: 'SIMULACIÓN LABORAL GRUPAL NO-COUNTRY',
                details: 'Me encargué del diseño del Front End en React JS con Vite. Creado desde un Figma, SEO en el Rendimiento, Estilos con CSS y TailWind, Responsive y Single Page Application.'
            },
            projectscard1: {
                h4: 'CAPYBARA WARS - Juego similar a batalla naval. EN PRODUCCIÓN',
                p: 'PROYECTO FINAL DE "CODO A CODO"',
                details: 'Me encargué del desarrollo completo del Front End y de las User Stories. Hice la lógica del Tablero y del Juego, se guardan los resultados en la Base de Datos. Usamos User Stories, Scrum. Desarrollo en Vainilla JS desde un Figma, metodología GitFlow, Estilos CSS, Responsive.'
            }
        },
        guides: {
            h3: 'INSPIRACIÓN Y APRENDIZAJE'
        },
        footer: {
            h3: '¡Conectemos!',
            p1: '¿Tienes algún proyecto en mente?',
            p2: 'Portfolio de Emiliano Longo, 2024',
            button: 'Enviar email',
            span: 'Email copiado!'
        }
    },
    EN: {
        hero: {
            h4: 'Hi!',
            h2i: "I'm",
            button: 'Download CV'
        },
        aside: {
            aboutMe: 'ABOUT ME',
            experience: 'EXPERIENCE',
            projects: 'PROJECTS',
            inspiration: 'INSPIRATION'
        },
        aboutme: {
            h3: 'ABOUT ME',
            h4: 'Everything you imagine ',
            h4i: 'you can code it',
            p1: 'I bring out the best of me from Rosario, a beautiful city in Argentina.',
            p2: 'I worked for 11 years in multinational companies, I have been an entrepreneur for 8 more years. I know very well how to handle myself in interdisciplinary groups.',
            p3: 'I constantly seek to update myself with new ideas to improve projects. I highly appreciate feedback.',
            p4: 'I focus on client requirements. I provide effective solutions tailored to their needs.'
        },
        timeline: {
            h3: "EXPERIENCE",
            experiences: {
              becode: {
                name: "BeCode",
                startDate: "2024-10",
                endDate: "Present",
                location: "Colombia – Remote",
                description: {
                  0: "Front-End development of a Language Learning Platform, implementing a modular architecture with React.js.",
                  1: "Created reusable components to improve code maintainability and scalability.",
                  2: "Efficiently managed global state using Redux Toolkit and consumed REST APIs.",
                  3: "Configured dynamic routing with React Router DOM to enhance navigation.",
                  4: "Customized components with Material UI, ensuring visual consistency and accessibility.",
                  5: "Implemented and optimized deployment on Vercel for development and production environments.",
                },
              },
              qoop: {
                name: "qoop.Ai",
                startDate: "2024-07",
                endDate: "2024-10",
                location: "Mexico – Remote",
                description: {
                  0: "Developed and maintained a personal assistant application powered by AI using React.js.",
                  1: "Implemented Redux Toolkit for smooth and efficient state management.",
                  2: "Integrated APIs built with FastAPI, optimizing frontend-backend communication using Axios.",
                  3: "Advanced UI customization with Material UI, ensuring visual coherence and an optimized user experience.",
                  4: "Configured React Router DOM for dynamic and intuitive routing.",
                  5: "Automated deployment on Vercel, ensuring production stability.",
                },
              },
              nocountry: {
                name: "No Country",
                startDate: "2024-07",
                endDate: "2024-10",
                location: "Argentina – Remote",
                description: {
                  0: "Group Work Simulation. Developed MVPs for innovative projects.",
                  1: "Implemented React.js, Vite, Redux, and React Router to optimize performance and agile development.",
                  2: "Applied technical SEO to improve indexing and loading speed.",
                  3: "Designed responsive layouts using Tailwind CSS and SPA (Single Page Application) architecture.",
                  4: "Worked under agile methodologies (Scrum) and version control with GitFlow.",
                },
              },
              mundoAdaptogenos: {
                name: "Mundo Adaptógenos",
                startDate: "2024-07",
                endDate: "2024-10",
                location: "Argentina – Freelancer Remote",
                description: {
                  0: "Developed an e-commerce platform from scratch using Vanilla JavaScript.",
                  1: "Optimized SEO and performance, improving load times and accessibility.",
                  2: "Designed a responsive layout with pure CSS using a Mobile-First approach.",
                  3: "Deployed on Netlify, ensuring site stability and availability.",
                },
              },
            },
          },
        projects: {
            h3: 'PROJECTS',
            projectscard5: {
                h4: "BLOCK.XYZ's CLONE",
                p: 'WEB DEVELOPMENT WITH THREE.JS',
                details: 'Technical project developed from scratch as part of a technical assessment for a Front-End position. Implemented Three.js libraries for React, with responsive design and CSS styling.'
            },
            projectscard4: {
                h4: 'Entrepreneurship E-commerce',
                p: 'MUNDO ADAPTÓGENOS',
                details: 'I did the branding design. Content and Image Creation, Project Structure, SEO Performance, Styles with CSS, Responsive and Mobile First, Vanilla JavaScript Development'
            },
            projectscard3: {
                h4: 'EUREKA - Online Courses and Learning Platform',
                p: 'NO COUNTRY GROUP WORK SIMULATION',
                details: 'I was responsible for the complete development of the HOME, NAVIGATION BAR, FOOTER, and TEAM. I implemented the functionalities of the STUDENT DASHBOARD. We used User Stories, Scrum, and Trello. Development in React JS from a Figma design, GitFlow methodology, TailWind Styles, Responsive design, and Single Page Application.'
            },
            projectscard2: {
                h4: "Zara's Colombia Clothing Store Clone 2023",
                p: 'NO COUNTRY GROUP WORK SIMULATION',
                details: 'I was in charge of the Front End design in React JS with Vite. Created from a Figma, SEO in Performance, Styles with CSS and TailWind, Responsive and Single Page Application.'
            },
            projectscard1: {
                h4: 'CAPYBARA WARS - Game similar to Battleship. IN PRODUCTION',
                p: '"CODO A CODO" Final Project',
                details: 'I was responsible for the complete development of the Front End. I implemented the logic of the BOARD and GAME in the Front to storage the results on the Database. We used User Stories, Scrum. Development in React JS from a Figma design, GitFlow methodology, CSS Styles, Responsive design.'
            }
        },
        guides: {
            h3: 'INSPIRATION AND LEARNING'
        },
        footer: {
            h3: "Let's Connect!",
            p1: 'Are you minded a project?',
            p2: "Emiliano Longo's Portfolio, 2024",
            button: 'Send email',
            span: 'Email copied!'
        }
    }
}