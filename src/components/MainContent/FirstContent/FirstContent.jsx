import React from "react";
import "./firstContent.scss";
import Driver from "../../../images/driver.jpg";

const FirstContent = () => {
	return (
		<>
			<div className="first-content-container dark-bg">
				<div className="first-content-img-holder">
					<img src={Driver} alt="" className="first-img section-img" />
				</div>
				<div className="first-content">
					<h2 className="first-title main-title">
						Get You Back Into Your Car!
					</h2>
					<p className="first-desc section-desc">
						Have you left your keys inside your car, or lost them somewhere
						else? Has your ignition key broken? Is your transponder key or fob
						key not working? Then you will not be able to go anywhere in your
						car. All you have to do is to call 911 Car Lockout “Houston, TX” to
						offer you help. Our professional and experienced locksmiths in
						“Houston, Texas” can replace your ignition key, transponder, or fob
						key. They are equipped with the most advanced tools and knowledge to
						unlock your car. They will get you back into your car safely and do
						not cause any damages to your vehicle. Our service is certified and
						trained well to work on your vehicle. We provide high-quality
						service for all the car brands, including Dodge, Mitsubishi, Kia,
						and Mazda. You will be happy as you will receive the best service
						ever.
					</p>
				</div>
			</div>
		</>
	);
};

export default FirstContent;
