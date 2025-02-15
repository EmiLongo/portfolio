import "../assets/styles/projectsComponent.css";
import desktop from "../assets/img/projects/desktop.svg";
import mobile from "../assets/img/projects/mobile.svg";
import tablet from "../assets/img/projects/tablet.svg";
import info from "../assets/img/projects/info.svg";
import redirect from "../assets/img/projects/web.svg";
import github from "../assets/img/github.svg";
import css from "../assets/img/projects/css.svg";
import html from "../assets/img/projects/html.svg";
import javascript from "../assets/img/projects/javascript.svg";
import reactIcon from "../assets/img/projects/react.svg";
import tailwind from "../assets/img/projects/tailwind-css.svg";
import vitejs from "../assets/img/projects/vitejs.svg";
import { useContext, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import LanguageContext from "../assets/context/LanguageContext";
import { projectData } from "../assets/helpers/projects.mjs";
import { ProjectCard } from "./ProjectCard";

const ProjectsComponent = () => {
  const { texts } = useContext(LanguageContext);

  const [cardView, setCardView] = useState(Array(projectData.length).fill(1));
  const [isInfo, setIsInfo] = useState(Array(projectData.length).fill(false));

  const handleView = (index, position) => {
    const newCardView = [...cardView];
    newCardView[index] = position;
    setCardView(newCardView);
  };

  const handleInfo = (index) => {
    const newIsInfo = [...isInfo];
    newIsInfo[index] = !newIsInfo[index];
    setIsInfo(newIsInfo);
  };

  const handleNextImg = (index) => {
    const newCardView = [...cardView];
    newCardView[index] = cardView[index] === 3 ? 1 : cardView[index] + 1;
    setCardView(newCardView);
  };

  return (
    <section className="projects">
      <h3>{texts.projects.h3}</h3>
      <i id="projectsSection"></i>

      {/* {projectData.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            projectInfo={project}
          />
        );
      })} */}

      {projectData.map((project, index) => (
        <div key={`project-${project.id}`}>
          <div className="project-item">
            <div className="project-card-header">
              <h4>{texts.projects[`projectscard${project.id}`].h4}</h4>
              <p>{texts.projects[`projectscard${project.id}`].p}</p>
            </div>
            <div className="project-card-body">
              <div className="project-imgs-header">
                <img
                  src={info}
                  style={isInfo[index] ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
                  loading="lazy"
                  alt="Info Proyecto"
                  width="32"
                  onClick={() => handleInfo(index)}
                />
                <img
                  src={redirect}
                  onClick={() => window.open(project.demoUrl, "_blank")}
                  loading="lazy"
                  alt="Demo del Proyecto"
                  width="32"
                />
                <img
                  src={github}
                  onClick={() => window.open(project.githubUrl, "_blank")}
                  loading="lazy"
                  alt="Código del Proyecto"
                  width="32"
                />
              </div>
              <div className="project-imgs-body">
                <SwitchTransition>
                  <CSSTransition
                    key={cardView[index]}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames="fade"
                  >
                    <img
                      src={project.images[cardView[index] - 1]}
                      loading="lazy"
                      alt={`Vista de ${texts.projects[`projectscard${project.id}`].h4} desde Dispositivos`}
                      height="260"
                      onClick={() => handleNextImg(index)}
                    />
                  </CSSTransition>
                </SwitchTransition>
              </div>
              <div className="project-imgs-footer">
                <img
                  src={desktop}
                  style={cardView[index] === 1 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
                  loading="lazy"
                  alt="Vista desde Desktop"
                  width="32"
                  onClick={() => handleView(index, 1)}
                />
                <img
                  src={tablet}
                  style={cardView[index] === 2 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
                  loading="lazy"
                  alt="Vista desde Tablet"
                  width="32"
                  onClick={() => handleView(index, 2)}
                />
                <img
                  src={mobile}
                  style={cardView[index] === 3 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
                  loading="lazy"
                  alt="Vista desde Mobile"
                  width="32"
                  onClick={() => handleView(index, 3)}
                />
              </div>
            </div>
            {isInfo[index] ? (
              <div className="project-info" onClick={() => handleInfo(index)}>
                <div className="project-details">
                  <p>{texts.projects[`projectscard${project.id}`].details}</p>
                </div>
                <div className="project-info-footer">
                  <img src={html} alt="HTML" title="HTML" width="32" />
                  <img src={css} alt="CSS" title="CSS" width="32" />
                  <img src={javascript} alt="JavaScript" title="JavaScript" width="32" />
                  <img src={reactIcon} alt="ReactJS" title="ReactJS" width="32" />
                  <img src={tailwind} alt="Tailwind CSS" title="Tailwind CSS" width="32" />
                  <img src={vitejs} alt="ViteJS" title="ViteJS" width="32" />
                </div>
              </div>
            ) : null}
          </div>
          <div className="void"></div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsComponent;