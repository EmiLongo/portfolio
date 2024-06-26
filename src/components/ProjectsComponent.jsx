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
import react from "../assets/img/projects/react.svg";
import tailwind from "../assets/img/projects/tailwind-css.svg";
import vitejs from "../assets/img/projects/vitejs.svg";
import desktopCW from "../assets/img/projects/cw-desktop.webp";
import tabletCW from "../assets/img/projects/cw-tablet.webp";
import mobileCW from "../assets/img/projects/cw-mobile.webp";
import desktopEureka from "../assets/img/projects/eureka-desktop.webp";
import tabletEureka from "../assets/img/projects/eureka-tablet.webp";
import mobileEureka from "../assets/img/projects/eureka-mobile.webp";
import desktopKara from "../assets/img/projects/kara-desktop.webp";
import mobileKara from "../assets/img/projects/kara-mobile.webp";
import tabletKara from "../assets/img/projects/kara-tablet.webp";
import desktopMundo from "../assets/img/projects/mundo-desktop.webp";
import mobileMundo from "../assets/img/projects/mundo-mobile.webp";
import tabletMundo from "../assets/img/projects/mundo-tablet.webp";
import { useContext, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import LanguageContext from "../assets/context/LanguageContext";

const ProjectsComponent = () => {
  const { texts } = useContext(LanguageContext);
  // project card4
  const [cardView4, setCardView4] = useState(1);
  const [isInfo4, setIsInfo4] = useState(false);
  const handleView4 = (position) => {
    setCardView4(position);
  };
  const handleInfo4 = () => {
    setIsInfo4(!isInfo4);
  };
  // project card3
  const [cardView3, setCardView3] = useState(1);
  const [isInfo3, setIsInfo3] = useState(false);
  const handleView3 = (position) => {
    setCardView3(position);
  };
  const handleInfo3 = () => {
    setIsInfo3(!isInfo3);
  };
  // project card2
  const [cardView1, setCardView1] = useState(1);
  const [isInfo1, setIsInfo1] = useState(false);
  const handleView1 = (position) => {
    setCardView1(position);
  };
  const handleInfo1 = () => {
    setIsInfo1(!isInfo1);
  };
  // project card1
  const [cardView2, setCardView2] = useState(1);
  const [isInfo2, setIsInfo2] = useState(false);
  const handleView2 = (position) => {
    setCardView2(position);
  };
  const handleInfo2 = () => {
    setIsInfo2(!isInfo2);
  };
  const handleNextImg = (setCard, card) => {
    if (card === 3){
      setCard(1)
    } else {
      setCard(card + 1)
    }
  }

  return (
    <section className="projects">
      <h3>{texts.projectsH3}</h3>
      <i id="projectsSection"></i>



      {/* project card3 */}
      <div className="project-item">
        <div className="project-card-header">
          <h4>{texts.projectscard3H4}</h4>
          <p>{texts.projectscard3p}</p>
        </div>
        <div className="project-card-body">
          <div className="project-imgs-header">
            <img
              src={info}
              style={isInfo3 === true ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Info Proyecto"
              width="32"
              onClick={handleInfo3}
            />
              <img
                src={redirect}
                onClick={() => {window.open("https://s14-11-m-java-e5su.vercel.app/", "_blank")}}
                loading="lazy"
                alt="Demo del Proyecto"
                width="32"
              />
              <img
                src={github}
                onClick={() => {window.open("https://github.com/No-Country/s14-11-m-java", "_blank")}}
                loading="lazy"
                alt="Código del Proyecto"
                width="32"
              />
          </div>
          <div className="project-imgs-body">
            <SwitchTransition>
              <CSSTransition
                key={cardView3}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
                classNames="fade"
              >
                <img
                  src={
                    cardView3 == 1
                      ? desktopEureka
                      : cardView3 == 2
                      ? tabletEureka
                      : mobileEureka
                  }
                  loading="lazy"
                  alt="Eureka desde Dispositivos"
                  height="260"
                  onClick={()=>{handleNextImg(setCardView3, cardView3)}}
                />
              </CSSTransition>
            </SwitchTransition>
          </div>

          <div className="project-imgs-footer">
            <img
              src={desktop}
              style={cardView3 === 1 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Vista desde Desktop"
              width="32"
              onClick={() => handleView3(1)}
            />
            <img
              src={tablet}
              style={cardView3 === 2 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Vista desde Tablet"
              width="32"
              onClick={() => handleView3(2)}
            />
            <img
              src={mobile}
              style={cardView3 === 3 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Vista desde Mobile"
              width="32"
              onClick={() => handleView3(3)}
            />
          </div>
        </div>
        {isInfo3 ? (
          <div className="project-info">
            <div className="project-details">
              <p>{texts.projectscard3details}</p>
            </div>
            <div className="project-info-footer">
              <img src={css} width="32" />
              <img src={html} width="32" />
              <img src={javascript} width="32" />
              <img src={react} width="32" />
              <img src={tailwind} width="32" />
              <img src={vitejs} width="32" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="void"></div>

      {/* project card4 */}
      <div className="project-item">
        <div className="project-card-header">
          <h4>{texts.projectscard4H4}</h4>
          <p>{texts.projectscard4p}</p>
        </div>
        <div className="project-card-body">
          <div className="project-imgs-header">
            <img
              src={info}
              style={isInfo4 === true ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Info Proyecto"
              width="32"
              onClick={handleInfo4}
            />
              <img
                src={redirect}
                onClick={() => {window.open("https://capybarawars.netlify.app/", "_blank")}}
                loading="lazy"
                alt="Demo del Proyecto"
                width="32"
              />
              <img
                src={github}
                onClick={() => {window.open("https://github.com/EmiLongo/capybara-wars", "_blank")}}
                loading="lazy"
                alt="Código del Proyecto"
                width="32"
              />
          </div>
          <div className="project-imgs-body">
            <SwitchTransition>
              <CSSTransition
                key={cardView4}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
                classNames="fade"
              >
                <img
                  src={
                    cardView4 == 1
                      ? desktopCW
                      : cardView4 == 2
                      ? tabletCW
                      : mobileCW
                  }
                  loading="lazy"
                  alt="Eureka desde Dispositivos"
                  height="260"
                  onClick={()=>{handleNextImg(setCardView4, cardView4)}}
                />
              </CSSTransition>
            </SwitchTransition>
          </div>

          <div className="project-imgs-footer">
            <img
              src={desktop}
              style={cardView4 === 1 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Vista desde Desktop"
              width="32"
              onClick={() => handleView4(1)}
            />
            <img
              src={tablet}
              style={cardView4 === 2 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Vista desde Tablet"
              width="32"
              onClick={() => handleView4(2)}
            />
            <img
              src={mobile}
              style={{
                ...(cardView4 === 3 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}),
                transform: 'rotate(90deg)'
              }}
              loading="lazy"
              alt="Vista desde Mobile"
              width="32"
              onClick={() => handleView4(3)}
            />
          </div>
        </div>
        {isInfo4 ? (
          <div className="project-info">
            <div className="project-details">
              <p>{texts.projectscard4details}</p>
            </div>
            <div className="project-info-footer">
              <img src={css} width="32" />
              <img src={html} width="32" />
              <img src={javascript} width="32" />
              <img src={react} width="32" />
              <img src={tailwind} width="32" />
              <img src={vitejs} width="32" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="void"></div>

      {/* project card2 */}
      <div className="project-item">
        <div className="project-card-header">
          <h4>{texts.projectscard1H4}</h4>
          <p>{texts.projectscard1p}</p>
        </div>
        <div className="project-card-body">
          <div className="project-imgs-header">
            <img
              src={info}
              style={isInfo1 === true ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Info Proyecto"
              width="32"
              onClick={handleInfo1}
            />
              <img
                src={redirect}
                onClick={() => {window.open("https://zara-clone-reactjs.netlify.app/", "_blank")}}
                loading="lazy"
                alt="Demo del Proyecto"
                width="32"
              />
              <img
                src={github}
                onClick={() => {window.open("https://github.com/No-Country/c16-37-m-java-react/", "_blank")}}
                loading="lazy"
                alt="Código del Proyecto"
                width="32"
              />
          </div>
          <div className="project-imgs-body">
            <SwitchTransition>
              <CSSTransition
                key={cardView1}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
                classNames="fade"
              >
                <img
                  src={
                    cardView1 == 1
                      ? desktopKara
                      : cardView1 == 2
                      ? tabletKara
                      : mobileKara
                  }
                  loading="lazy"
                  alt="Kara desde Dispositivos"
                  height="260"
                  onClick={()=>{handleNextImg(setCardView1, cardView1)}}
                />
              </CSSTransition>
            </SwitchTransition>
          </div>

          <div className="project-imgs-footer">
            <img
              src={desktop}
              style={cardView1 === 1 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Vista desde Desktop"
              width="32"
              onClick={() => handleView1(1)}
            />
            <img
              src={tablet}
              style={cardView1 === 2 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Vista desde Tablet"
              width="32"
              onClick={() => handleView1(2)}
            />
            <img
              src={mobile}
              style={cardView1 === 3 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Vista desde Mobile"
              width="32"
              onClick={() => handleView1(3)}
            />
          </div>
        </div>
        {isInfo1 ? (
          <div className="project-info">
            <div className="project-details">
              <p>{texts.projectscard1details}</p>
            </div>
            <div className="project-info-footer">
              <img src={css} width="32" />
              <img src={html} width="32" />
              <img src={javascript} width="32" />
              <img src={react} width="32" />
              <img src={tailwind} width="32" />
              <img src={vitejs} width="32" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="void"></div>

      {/* project card1 */}
      <div className="project-item">
        <div className="project-card-header">
          <h4>{texts.projectscard2H4}</h4>
          <p>MUNDO ADAPTÓGENOS</p>
        </div>
        <div className="project-card-body">
          <div className="project-imgs-header">
            <img
              src={info}
              style={isInfo2 === true ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Info Proyecto"
              width="32"
              onClick={handleInfo2}
            />
            <img
              src={redirect}
              loading="lazy"
              alt="Demo del Proyecto"
              width="32"
              onClick={() => {window.open("https://mundoadaptogenos.netlify.app/", "_blank")}}
            />
            <img
              src={github}
              loading="lazy"
              alt="Código del Proyecto"
              width="32"
              onClick={() => {window.open("https://github.com/EmiLongo/mundoadaptogenos/", "_blank")}}
            />
          </div>
          <div className="project-imgs-body">
            <SwitchTransition>
              <CSSTransition
                key={cardView2}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
                classNames="fade"
              >
                <img
                  src={
                    cardView2 == 1
                      ? desktopMundo
                      : cardView2 == 2
                      ? tabletMundo
                      : mobileMundo
                  }
                  loading="lazy"
                  alt="Mundo Adaptógenos desde Dispositivos"
                  height="260"
                  onClick={()=>{handleNextImg(setCardView2, cardView2)}}
                />
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className="project-imgs-footer">
            <img
              src={desktop}
              style={cardView2 === 1 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Vista desde Desktop"
              width="32"
              onClick={() => handleView2(1)}
            />
            <img
              src={tablet}
              style={cardView2 === 2 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Vista desde Tablet"
              width="32"
              onClick={() => handleView2(2)}
            />
            <img
              src={mobile}
              style={cardView2 === 3 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
              loading="lazy"
              alt="Vista desde Mobile"
              width="32"
              onClick={() => handleView2(3)}
            />
          </div>
        </div>
        {isInfo2 ? (
          <div className="project-info">
            <div className="project-details">
            <p>{texts.projectscard2details}</p>
            </div>
            <div className="project-info-footer">
              <img src={css} width="32" />
              <img src={html} width="32" />
              <img src={javascript} width="32" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default ProjectsComponent;
