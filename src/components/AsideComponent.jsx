import { useState ,useEffect } from 'react';
import '../assets/styles/asideComponent.css'

const AsideComponent = () => {
  const [isActiveAboutMe, setIsActiveAboutMe] = useState(false);
  const [isActiveProjects, setIsActiveProjects] = useState(false);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    const sectionFixed = section.offsetTop - 3 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    window.scrollTo({ top: sectionFixed, behavior: 'smooth' });
  };

  useEffect(() => {
    const aboutMeSection = document.getElementById('aboutMeSection');
    const projectsSection = document.getElementById('projectsSection');
    const aboutMePosition = aboutMeSection.offsetTop - 3 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const projectsPosition = projectsSection.offsetTop - 3 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      
      if (currentScrollPosition >= aboutMePosition && currentScrollPosition < projectsPosition) {
        setIsActiveAboutMe(true);
        setIsActiveProjects(false);
      } else if (currentScrollPosition >= projectsPosition) {
        setIsActiveAboutMe(false);
        setIsActiveProjects(true);
      } else {
        setIsActiveAboutMe(false);
        setIsActiveProjects(false);
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
            <span>SOBRE MI</span>
        </div>
        <div className={`aside-item ${isActiveProjects ? 'isactive' : ''}`}
          onClick={()=>handleClick('projectsSection')}
        >
            <div className="aside-line"></div>
            <span>PROYECTOS</span>
        </div>
        <div className="aside-item"
        onClick={()=>handleClick('guidesSection')}
        >
            <div className="aside-line"></div>
            <span>INSPIRACIÓN</span>
        </div>
    </aside>
  )
}

export default AsideComponent;
