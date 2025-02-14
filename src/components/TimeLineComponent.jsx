import { useContext } from 'react';
import '../assets/styles/timeLineComponent.css';
import LanguageContext from '../assets/context/LanguageContext';
import qoop from '../assets/img/experience/qoop.svg';
import nocountry from '../assets/img/experience/nocountry.svg';
import mundoAdaptogenos from '../assets/img/experience/mundo_adaptogenos.svg';

const TimeLineComponent = () => {
  const { texts } = useContext(LanguageContext);
  return (
    <section className="timeline">
      <h3>{texts.timelineH3}</h3>
      <i id="experienceSection"></i>
      <div className="timeline-container">


        <div className="timeline-item">
          <div className="point-container">
            <div className="line"></div>
            <div className="point"></div>
          </div>
          <div className="item-content">
            <div>
              <img src={qoop} width="40" alt="Experience Logo" />
              <p>2024-10</p>
              <p>2024-07</p>
            </div>
            <div>
              <h3>qoop.Ai</h3>
              <p>Descripción del evento 1.</p>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="point-container">
            <div className="line"></div>
            <div className="point"></div>
          </div>
          <div className="item-content">
            <div>
              <img src={nocountry} width="40" alt="Experience Logo" />
              <p>2024-10</p>
              <p>2024-07</p>
            </div>
            <div>
              <h3>No Country</h3>
              <p>Descripción del evento 2.</p>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="point-container">
            <div className="line"></div>
            <div className="point"></div>
          </div>
          <div className="item-content">
            <div>
              <img src={mundoAdaptogenos} width="40" alt="Experience Logo" />
              <p>2024-10</p>
              <p>2024-07</p>
            </div>
            <div>
              <h3>Mundo Adaptógenos</h3>
              <p>Descripción del evento 3.</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default TimeLineComponent;
