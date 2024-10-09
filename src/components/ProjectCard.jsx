import { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import desktop from "../assets/img/projects/desktop.svg";
import mobile from "../assets/img/projects/mobile.svg";
import tablet from "../assets/img/projects/tablet.svg";
import info from "../assets/img/projects/info.svg";
import redirect from "../assets/img/projects/web.svg";
import github from "../assets/img/github.svg";
import css from "../assets/img/projects/css.svg";
import html from "../assets/img/projects/html.svg";
import javascript from "../assets/img/projects/javascript.svg";
import react from "../assets/img/projects/react.svg";
import tailwind from "../assets/img/projects/tailwind-css.svg";
import netlify from "../assets/img/projects/netlify.svg";
import vercel from "../assets/img/projects/vercel.svg";
import vitejs from "../assets/img/projects/vitejs.svg";

export const ProjectCard = ({ projectInfo }) => {

	const {	title, 
		description,
		details, 
		images, 
		links, 
		icons, } = projectInfo
	const [cardView, setCardView] = useState(1);
  const [isShowInfo, setIsShowInfo] = useState(false);

	const handleNextImg = () => {
		if (cardView === 3) {
			setCardView(1);
		} else {
			setCardView(cardView + 1);
		}
	};

	return (<>
		<div className="project-item">
			<div className="project-card-header">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
			<div className="project-card-body">
				<div className="project-imgs-header">
					{links.map(({ icon, url }, index) => (
						<img
							key={index}
							src={icon === "redirect" ? redirect : icon === "github" && github}
							onClick={() => window.open(url, "_blank")}
							alt="Link"
							loading="lazy"
							width="32"
						/>
					))}
					<img
						src={info}
						style={isShowInfo ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
						alt="Info Proyecto"
						width="32"
						onClick={()=>{setIsShowInfo(!isShowInfo)}}
					/>
				</div>
				<div className="project-imgs-body">
					<SwitchTransition>
						<CSSTransition
							key={cardView}
							addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
							classNames="fade"
						>
							<img
								src={images[cardView - 1]}
								alt="Vista del Proyecto"
								loading="lazy"
								height="260"
								onClick={handleNextImg}
							/>
						</CSSTransition>
					</SwitchTransition>
				</div>
				<div className="project-imgs-footer">
					{images.map((_, index) => (
						<img
							key={index}
							src={index === 0 ? desktop : index === 1 ? tablet : mobile}
							style={cardView === index + 1 ? { filter: 'invert(100%) drop-shadow(0 0 10px #00ff6a)' } : {}}
							alt={`Vista desde ${index === 0 ? 'Desktop' : index === 1 ? 'Tablet' : 'Mobile'}`}
							width="32"
							onClick={() => setCardView(index + 1)}
						/>
					))}
				</div>
				{isShowInfo && (
					<div className="project-info">
						<div className="project-details">
							<p>{details}</p>
						</div>
						<div className="project-info-footer">
							{icons.css && <img src={css} width="32" alt="css" />}
							{icons.html && <img src={html} width="32" alt="html" />}
							{icons.javascript && <img src={javascript} width="32" alt="javascript" />}
							{icons.react && <img src={react} width="32" alt="react" />}
							{icons.tailwind && <img src={tailwind} width="32" alt="tailwind" />}
							{icons.netlify && <img src={netlify} width="32" alt="netlify" />}
							{icons.vercel && <img src={vercel} width="32" alt="vercel" />}
							{icons.vitejs && <img src={vitejs} width="32" alt="vitejs" />}
						</div>
						{/* <div className="project-info-footer">
							{icons.map((icon, index) => (
								<img key={index} src={icon} width="32" alt="Tecnología" />
							))}
							
						</div> */}
					</div>
				)}
			</div>
		</div>
		<div className="void" />
	</>);
};
  