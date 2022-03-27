import React from "react";
import "./secondSection.scss";
import Locked from "../../../images/car-locked.jpg";

const SecondContent = () => {
	return (
		<>
			<div className="second-content-container">
				<div className="second-content">
					<h2 className="second-title main-title">
						Your safety Is Our Priority
					</h2>
					<p className="second-desc section-desc">
						Does a thief break into your car and damage your door locks? Do you
						have broken automotive locks? Do not worry. 911 Car Lockout
						“Houston, TX” is near you and will help you with all your lock and
						key issues. Our licensed and insured locksmiths in “Houston, Texas”
						will change and rekey your car locks. They will install
						high-security locks and increase your safety. They make you resume
						your regular schedule and make your day much better. People think
						that car locksmith service costs are high. But our Company will
						always offer cheap car lockout service and affordable costs. We will
						not add any hidden charges to the original price and will not empty
						your pocket.
					</p>
				</div>
				<div className="second-content-img-holder">
					<img src={Locked} alt="locked" className="second-img section-img" />
				</div>
			</div>
		</>
	);
};

export default SecondContent;
