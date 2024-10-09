import "../assets/styles/projectsComponent.css";
import desktopXYZ from "../assets/img/projects/xyz-block-desktop.webp";
import tabletXYZ from "../assets/img/projects/xyz-block-tablet.webp";
import mobileXYZ from "../assets/img/projects/xyz-block-mobile.webp";
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
import { useContext } from "react";
import LanguageContext from "../assets/context/LanguageContext";
import { ProjectCard } from "./ProjectCard";

const ProjectsComponent = () => {
  const { texts } = useContext(LanguageContext);

  const projects = [
    {
      title: texts.projectscard5H4,
      description: texts.projectscard5p,
      details: texts.projectscard5details,
      images: [desktopXYZ, tabletXYZ, mobileXYZ],
      links: [
        { icon: "redirect", url: "https://clone-blockxyz.netlify.app/" },
        { icon: "github", url: "https://github.com/EmiLongo/clone_of_blockxyz" },
      ],
      icons: {css: true, html: true, javascript: true, react: true, tailwind: true, netlify: true, vitejs: true},
    },
    {
      title: texts.projectscard3H4,
      description: texts.projectscard3p,
      details: texts.projectscard3details,
      images: [desktopEureka, tabletEureka, mobileEureka],
      links: [
        { icon: "redirect", url: "https://s14-11-m-java-e5su.vercel.app/" },
        { icon: "github", url: "https://github.com/No-Country/s14-11-m-java" },
      ],
      icons: {css: true, html: true, javascript: true, react: true, tailwind: true, vercel: true, vitejs: true},
    },
    {
      title: texts.projectscard4H4,
      description: texts.projectscard4p,
      details: texts.projectscard4details,
      images: [desktopCW, tabletCW, mobileCW],
      links: [
        { icon: "redirect", url: "https://capybara-wars.com/" },
        { icon: "github", url: "https://github.com/user/capybara-wars" },
      ],
      icons: {css: true, html: true, javascript: true, netlify: true, vitejs: true},
    },
    {
      title: texts.projectscard1H4,
      description: texts.projectscard1p,
      details: texts.projectscard1details,
      images: [desktopKara, tabletKara, mobileKara],
      links: [
        { icon: "redirect", url: "https://zara-clone-reactjs.netlify.app/" },
        { icon: "github", url: "https://github.com/No-Country/c16-37-m-java-react/" },
      ],
      icons: {css: true, html: true, javascript: true, react: true, tailwind: true, netlify: true, vitejs: true},
    },
    {
      title: texts.projectscard2H4,
      description: texts.projectscard2p,
      details: texts.projectscard2details,
      images: [desktopMundo, tabletMundo, mobileMundo,],
      links: [
        { icon: "redirect", url: "https://mundoadaptogenos.netlify.app/" },
        { icon: "github", url: "https://github.com/EmiLongo/mundoadaptogenos/" },
      ],
      icons: {css: true, html: true, javascript: true, netlify: true, vitejs: true},
    },
  ];

  return (
    <section className="projects">
      <h3>{texts.projectsH3}</h3>
      <i id="projectsSection"></i>

      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            projectInfo={project}
          />
        );
      })}
    </section>
  );
};

export default ProjectsComponent;
