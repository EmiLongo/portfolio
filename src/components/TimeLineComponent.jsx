import { useContext, useState } from 'react';
import '../assets/styles/timeLineComponent.css';
import LanguageContext from '../assets/context/LanguageContext';
import qoop from '../assets/img/experience/qoop.svg';
import nocountry from '../assets/img/experience/nocountry.svg';
import mundoAdaptogenos from '../assets/img/experience/mundo_adaptogenos.svg';
import becode from '../assets/img/experience/BeCode.png';

const TimeLineComponent = () => {
  const { texts } = useContext(LanguageContext);
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (tag) => {
    setExpanded((prev) => ({ ...prev, [tag]: !prev[tag] }));
  };

  const experiences = [
    {
      logo: becode,
      name: "BeCode",
      tag: "becode",
    },
    {
      logo: qoop,
      name: "qoop.Ai",
      tag: "qoop",
    },
    {
      logo: nocountry,
      name: "No Country",
      tag: "nocountry",
    },
    {
      logo: mundoAdaptogenos,
      name: "Mundo Adaptógenos",
      tag: "mundoAdaptogenos",
    },
  ];

  return (
    <section className="timeline">
      <h3>{texts.timeline.h3}</h3>
      <i id="experienceSection"></i>

      <div className="timeline-container">
        <div className="timeline-top isNonMobile">
          <div className="timeline-top-point"></div>
          <div className="timeline-topline"></div>
          <div className="timeline-topline-space-two"></div>
          <div className="timeline-topline-space-three"></div>
        </div>
        {experiences.map((exp, index) => {
          const expData = texts.timeline.experiences[exp.tag];
          const isExpanded = expanded[exp.tag];
          const descriptionItems = Object.values(expData.description);
          const shouldShowButton = descriptionItems.length > 2;

          return (
            <div className="timeline-item"
              key={`timeline-item-${index}-${exp.name.split(' ').join('_')}`}
            >
              <div className="date-container isNonMobile">
                <img src={exp.logo} width="40" alt={`${exp.name} Logo`} />
                <p>{expData.endDate}</p>
                <p>{expData.startDate}</p>
              </div>
              <div className="point-container">
                <div className="line"></div>
                <div className="point"></div>
              </div>
              <div className="item-content">
                <h3>{exp.name}</h3>
                <p className='timeline-item-location'>{expData.location}</p>
                <img className='isMobile timeline-item-img' src={exp.logo} width="40" alt={`${exp.name} Logo`} />
                <p className='isMobile timeline-item-dates'>{expData.endDate} - {expData.startDate}</p>
                {descriptionItems
                  .slice(0, isExpanded ? undefined : 2)
                  .map((item, index) => (
                    <p key={index} className='timeline-item-description'>{item}</p>
                  ))
                }
                {shouldShowButton && (
                  <div className="button-container">
                    <button onClick={() => toggleExpand(exp.tag)}>
                      {isExpanded ? 'Ver menos' : '...Ver más'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="timeline-bottom isNonMobile">
          <div className="timeline-bottom-point"></div>
          <div className="timeline-bottomline-space"></div>
          <div className="timeline-bottomline"></div>
          <div className="timeline-bottomline-two"></div>
        </div>
      </div>
    </section>
  );
};

export default TimeLineComponent;