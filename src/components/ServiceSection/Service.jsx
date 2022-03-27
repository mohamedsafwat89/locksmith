import React from "react";
import Card from "./Card/Card";
import { Link } from "react-router-dom";
import "./service.scss";
import img from "../../images/open-car.jpg";
import img2 from "../../images/key.jpg";
import img3 from "../../images/repair.jpg";
import img4 from "../../images/safe.jpg";

const Service = () => {
	const scrollTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<>
			<div className="service-container dark-bg sections section" id="service">
				<div className="service-header">
					<h2 className="service-title main-title">Our Services</h2>
					<span className="service-sub">
						Our locksmiths can handle all types of lockouts, key extractions,
						rekeying, and lock changing services.
					</span>
				</div>
				<div className="service-card-container">
					<Card
						title="Transponder Key"
						img={img}
						desc="Do you want a reliable service to help you with your transponder key
					problems? We are here for you!"
					/>
					<Card
						title="Car Key Replacement"
						img={img2}
						desc="Do you have an appointment, and want to be on time, but you do not find your car keys? Do not worry.!"
					/>
					<Card
						title="Ignition Key"
						img={img3}
						desc="If you live in “Houston, Texas” and you face issues with your ignition key, contact us at any time."
					/>
					<Card
						title="Rekey/ Change Locks"
						img={img4}
						desc="Are your car keys stolen? 911 Car Lockout Houston TX will rekey/change your lock and solve your lockout problem."
					/>
				</div>
				<div className="service-btn-holder">
					<Link
						className="service-btn main-btn"
						to="/service"
						onClick={scrollTop}
					>
						Read More
					</Link>
				</div>
			</div>
		</>
	);
};

export default Service;
