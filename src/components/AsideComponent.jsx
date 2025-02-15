// src/components/AsideComponent.jsx
import { useState, useEffect, useContext } from 'react';
import '../assets/styles/asideComponent.css'
import LanguageContext from '../assets/context/LanguageContext'
const AsideComponent = () => {
  const { texts } = useContext(LanguageContext)
  const [isActiveAboutMe, setIsActiveAboutMe] = useState(false);
  const [isActiveProjects, setIsActiveProjects] = useState(false);
  const [isActiveGuides, setIsActiveGuides] = useState(false);
  const [isActiveExperience, setIsActiveExperience] = useState(false);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    const sectionFixed = section.offsetTop - 4 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    window.scrollTo({ top: sectionFixed, behavior: 'smooth' });
  };

  useEffect(() => {
    const aboutMeSection = document.getElementById('aboutMeSection');
    const projectsSection = document.getElementById('projectsSection');
    const guidesSection = document.getElementById('guidesSection');
    const experienceSection = document.getElementById('experienceSection');
    const aboutMePosition = aboutMeSection.offsetTop - 8 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const projectsPosition = projectsSection.offsetTop - 8 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const guidesPosition = guidesSection.offsetTop - 8 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const experiencePosition = experienceSection.offsetTop - 8 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      
      if (currentScrollPosition >= aboutMePosition && currentScrollPosition < experiencePosition) {
        setIsActiveAboutMe(true);
        setIsActiveProjects(false);
        setIsActiveGuides(false)
        setIsActiveExperience(false)
      } else if (currentScrollPosition >= experiencePosition && currentScrollPosition < projectsPosition) {
        setIsActiveAboutMe(false);
        setIsActiveExperience(true);
        setIsActiveProjects(false);
        setIsActiveGuides(false)
      } else if (currentScrollPosition >= projectsPosition && currentScrollPosition < guidesPosition) {
        setIsActiveAboutMe(false);
        setIsActiveProjects(true);
        setIsActiveGuides(false)
        setIsActiveExperience(false)
      } else if (currentScrollPosition >= guidesPosition) {
        setIsActiveAboutMe(false);
        setIsActiveProjects(false);
        setIsActiveGuides(true)
        setIsActiveExperience(false)
      } else {
        setIsActiveAboutMe(false);
        setIsActiveProjects(false);
        setIsActiveExperience(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <aside className="aside">
        <div className={`aside-item ${isActiveAboutMe ? 'isactive' : ''}`}
          onClick={()=>handleClick('aboutMeSection')}
        >
            <div className="aside-line"></div>
            <span>{texts.aside.aboutMe}</span>
        </div>
        <div className={`aside-item ${isActiveExperience ? 'isactive' : ''}`}
          onClick={()=>handleClick('experienceSection')}
        >
            <div className="aside-line"></div>
            <span>{texts.aside.experience}</span>
        </div>
        <div className={`aside-item ${isActiveProjects ? 'isactive' : ''}`}
          onClick={()=>handleClick('projectsSection')}
        >
            <div className="aside-line"></div>
            <span>{texts.aside.projects}</span>
        </div>
        <div className={`aside-item ${isActiveGuides ? 'isactive' : ''}`}
        onClick={()=>handleClick('guidesSection')}
        >
            <div className="aside-line"></div>
            <span>{texts.aside.inspiration}</span>
        </div>
    </aside>
  )
}

export default AsideComponent;
