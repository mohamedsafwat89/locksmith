import React from "react";
import { Link } from "react-scroll/modules";
import Video from "../../videos/Pexels Videos 2070044.mp4"
import "./heroSection.scss";

const HeroSection = () => {
	return (
		<>
			<div className="hero-container sections section">
				<div className="hero-bg">
					<video
						src={Video}
						type="video/mp4"
						autoPlay
						loop
						muted
					></video>
				</div>
				<div className="wrapper">
					<h1 className="hero-title">Transponder Key Houston TX</h1>
					<p className="hero-desc">
						Do you want a reliable service to help you with your transponder key
						problems? We are here for you! Our trusted locksmiths in “Houston,
						TX” will offer all transponder key services, including repair,
						replacement and programming.
					</p>
					<Link
						className="hero-btn main-btn"
						to="contact"
					>
						Call Now
					</Link>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
