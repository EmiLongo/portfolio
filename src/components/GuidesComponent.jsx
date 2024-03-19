import "../assets/styles/guidesComponent.css";
import { useContext } from "react";
import LanguageContext from "../assets/context/LanguageContext";
import image1 from "../assets/img/guides/image1.webp";
import GuidesCardComponent from "./GuidesCardComponent";
import image2 from "../assets/img/guides/image2.webp";
import image3 from "../assets/img/guides/image3.webp";
import image4 from "../assets/img/guides/image4.webp";
import image5 from "../assets/img/guides/image5.webp";
import image6 from "../assets/img/guides/image6.webp";
import image7 from "../assets/img/guides/image7.webp";
import image8 from "../assets/img/guides/image8.webp";
import image9 from "../assets/img/guides/image9.webp";
import image10 from "../assets/img/guides/image10.webp";
import image11 from "../assets/img/guides/image11.webp";
import image12 from "../assets/img/guides/image12.webp";
import image13 from "../assets/img/guides/image13.webp";
import image14 from "../assets/img/guides/image14.webp";

const GuidesComponent = () => {
  const { texts } = useContext(LanguageContext);

  return (
    <section className="guides" id="guidesSection">
      <h3>{texts.guidesH3}</h3>
      <div className="guide-card-container">
        <GuidesCardComponent
          key={1}
          target=""
          img={image1}
          description="React Documentation"
        />
        <GuidesCardComponent
          key={2}
          target="https://tailwindcss.com/"
          img={image2}
          description="Tailwindcss - Framework Packed With Classes"
        />
        <GuidesCardComponent
          key={3}
          target="https://squoosh.app/"
          img={image3}
          description="Squoosh - Image Optimizer"
        />
        <GuidesCardComponent
          key={4}
          target="https://www.adobe.com/express/feature/image/remove-background"
          img={image4}
          description="Adobe Express - Background Remover"
        />
        <GuidesCardComponent
          key={5}
          target="https://firefly.adobe.com/"
          img={image5}
          description="Adobe Firefly - IA Text to Image"
        />
        <GuidesCardComponent
          key={6}
          target="https://worldvectorlogo.com/"
          img={image6}
          description="World Vector Logo - SVG Brand Logos"
        />
        <GuidesCardComponent
          key={7}
          target="https://9elements.github.io/fancy-border-radius/"
          img={image7}
          description="Fancy Border Radius - CSS Generator"
        />
        <GuidesCardComponent
          key={8}
          target="https://ui.glass/generator/"
          img={image8}
          description="Glass UI - Glassmorphism CSS Generator"
        />
        <GuidesCardComponent
          key={9}
          target="https://mycolor.space/gradient"
          img={image9}
          description="Color Space - Color Gradient Generator"
        />
        <GuidesCardComponent
          key={10}
          target="https://animate.style/"
          img={image10}
          description="Animate.css - Library of CSS Animation"
        />
        <GuidesCardComponent
          key={11}
          target="https://ianlunn.github.io/Hover/"
          img={image11}
          description="CSS Hover Library"
        />
        <GuidesCardComponent
          key={12}
          target="https://www.youtube.com/@midulive"
          img={image12}
          description="MIDUDEV - Streamings FullStack con JavaScript"
        />
        <GuidesCardComponent
          key={13}
          target=""
          img={image13}
          description="SERGIECODE - Tutoriales de Programación"
        />
        <GuidesCardComponent
          key={14}
          target="https://www.svgrepo.com/"
          img={image14}
          description="Open-licensed SVG Icons"
        />
      </div>
    </section>
  );
};

export default GuidesComponent;
