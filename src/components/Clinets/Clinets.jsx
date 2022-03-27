import React from "react";
import "./clinets.scss";
import Ford from "../../images/ford.svg";
import Jeeb from "../../images/jeep.svg";
import Honda from "../../images/honda.svg";
import BMW from "../../images/bmw.svg";
import Skoda from "../../images/skoda.svg";
import Subaru from "../../images/subaru.svg";
import Hundai from "../../images/hyundai.svg";

const Clinets = () => {
	return (
		<>
			<div className="clinets-container sections" id="clinets">
				<h2 className="clinets-header main-title">Our Clinets</h2>
				<div className="clinets-brands">
					<div className="brand">
						<img src={Ford} alt="Ford" />
					</div>
					<div className="brand">
						<img src={Jeeb} alt="jeeb" />
					</div>
					<div className="brand">
						<img src={Honda} alt="honda" />
					</div>
					<div className="brand">
						<img src={BMW} alt="bmw" />
					</div>
					<div className="brand">
						<img src={Skoda} alt="skoda" />
					</div>
					<div className="brand">
						<img src={Subaru} alt="subaru" />
					</div>
					<div className="brand">
						<img src={Hundai} alt="hundai" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Clinets;
