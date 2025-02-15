import "../assets/styles/heroComponent.css";
import emiliano from "../assets/img/emiliano.webp";
import logoGitHub from "../assets/img/github.svg";
import logoLinkedIn from "../assets/img/linkedin.svg";
import cvemi from "../assets/CV-Emiliano Longo.pdf";
import { useContext } from "react";
import LanguageContext from "../assets/context/LanguageContext";
import { GlowingButton } from "../assets/animations/GlowingButton/GlowingButton";
import Typewriter from 'typewriter-effect';

const HeroComponent = () => {
  const { texts } = useContext(LanguageContext);

  // // texto flote sobre el loading
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 6000);

  // // El efecto se ejecuta solo una vez al montar el componente
  //   return () => clearTimeout(timer);
  // }, []); 

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
            {texts.hero.h4}</h4>
          <h2>
            <i>{texts.hero.h2I}</i> Emiliano Longo
          </h2>
          {/* <h3 className={loading ? 'loading-text' : ''}> */}
          <h3>
              <Typewriter
                options={{
                  delay: 75,
                }}
              onInit={(typewriter) => {
                typewriter.typeString('')
                  .pauseFor(500)
                  // .typeString('<i>'+ texts.heroTextH4 + '</i>')
                  // .deleteAll()
                  // .pauseFor(500)
                  // .typeString('<i>' + texts.heroTextH2I + '</i> Emiliano Longo')
                  // .deleteAll()
                  .pauseFor(500)
                  .typeString('Front End <i>Developer</i>')
                  .start()
                  ;
              }}
            />

            {/* <Typewriter
                options={{
                  strings: ['Front End <i>Developer</i>'],
                  delay: 100,
                }}
            /> */}
          </h3>
          {/* <h3>
            Front End <i>Developer</i>
          </h3> */}

          <div className="hero-contact">
            <GlowingButton action={() => window.open(cvemi, "_blank")}>
              {texts.hero.button}
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
      <div id="bg-animation"></div>
    </div>
  );
};

export default HeroComponent;
