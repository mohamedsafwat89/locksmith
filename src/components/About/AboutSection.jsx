import React from "react";
import "./aboutSection.scss";
import Image from "../../images/car-lock.jpg";

const AboutSection = () => {
	return (
		<>
			<div id="about" className="about-container sections">
				<div className="about-header">
					<h1 className="about-title">About Us</h1>
					<span className="about-subtitle">
						Let Us Solve Your Car Lockout Issue
					</span>
					<p className="about-desc">
						" An emergency car lockout can be very stressful. At this time, we
						know how important immediate response is. For that, our local mobile
						locksmiths in “Houston, TX” will be at your location as soon as they
						can. They will help you fast and offer you a 24-Roadside Assistance
						service so that you can call us at any time."
					</p>
					<button className="about-btn main-btn">Check</button>
				</div>
				<div className="about-img-holder">
					<img src={Image} alt="lock" className="about-img" />
				</div>
			</div>
		</>
	);
};

export default AboutSection;
