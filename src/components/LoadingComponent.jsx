import { useEffect, useState } from "react";
import '../assets/styles/loadingComponent.css'

const LoadingComponent = () => {
        // loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 6000);
    
        return () => clearTimeout(timer);
    }, []); // El efecto se ejecuta solo una vez al montar el componente
      
  return (
    <div className={loading ? 'loading-bg' : 'no-visible'}></div>
  )
}

export default LoadingComponent