import { useState , useEffect } from 'react';
import '../assets/styles/arrowComponent.css'
const ArrowComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(true);
      window.removeEventListener('scroll', handleScroll);
    }
    if (!scrolled) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  
  return (
    <div className={scrolled ? 'mouse_scroll_container scrolled' : 'mouse_scroll_container'}>
      <div className="mouse_scroll">
          <div>
            <span className="m_scroll_arrows one"></span>
            <span className="m_scroll_arrows two"></span>
            <span className="m_scroll_arrows three"></span>
          </div>
      </div>
      <div className="mouse_scroll">

          <div className="mouse">
            <div className="wheel"></div>
          </div>
      </div>
    </div>
  )
}

export default ArrowComponent