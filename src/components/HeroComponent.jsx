import "../assets/styles/heroComponent.css";
import emiliano from "../assets/img/emiliano.webp";
import logoGitHub from "../assets/img/github.svg";
import logoLinkedIn from "../assets/img/linkedin.svg";
import cvemi from "../assets/CV-Emiliano Longo-SP-EN.pdf";
import { useContext } from "react";
import LanguageContext from "../assets/context/LanguageContext";
import { GlowingButton } from "../assets/animations/GlowingButton/GlowingButton";
import Typewriter from 'typewriter-effect';

const HeroComponent = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <div className="hero-component">
      <div className="hero-component-filter">
        <div className="hero-bg-container">
          <div className="hero-bg">
            <div className="hero-bg-filter"></div>
          </div>
        </div>
        <div className="img-container">
          <div className="img-profile">
            <img src={emiliano} alt="Foto de Emiliano" className="slide-top" />
          </div>
        </div>
        <div className="hero-text">
          <h4>
            {texts.heroTextH4}</h4>
          <h2>
            <i>{texts.heroTextH2I}</i> Emiliano Longo
          </h2>
          <h3>
              <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('')
                  .pauseFor(500)
                  .typeString('Front End <i>Developer</i>')
                  .start()
                  ;
              }}
            />
          </h3>
          {/* <h3>
            Front End <i>Developer</i>
          </h3> */}

          <div className="hero-contact">
            <GlowingButton action={() => window.open(cvemi, "_blank")}>
              {texts.heroTextButton}
            </GlowingButton>
              <img
                className="logo-github"
                src={logoGitHub}
                alt="Perfil GitHub"
                width="32"
                onClick={()=>window.open("https://github.com/EmiLongo", '_blank')}
                />
              <img
                className="logo-linkedin"
                src={logoLinkedIn}
                alt="Perfil LinkedIn"
                width="32"
                onClick={()=>window.open("https://www.linkedin.com/in/emilianojlongo/", '_blank')}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
