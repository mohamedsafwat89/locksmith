import React from "react";
import "./card.scss";

const Card = ({ img, title, desc }) => {
	return (
		<>
			<div className="card-container">
				<div className="img-holder">
					<img src={img} alt="key" className="card-img" />
				</div>
				<div className="card-wrapper">
					<div className="card-desc">
						<h3 className="card-title">{title}</h3>
						<p className="card-sub">{desc}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
