import React from "react";
import "./content.scss";
import contact from "../../images/undraw_online_friends_re_eqaj.svg";

const Contact = () => {
	return (
		<>
			<div className="contact-container sections" id="contact">
				<div className="contact-img-holder">
					<img src={contact} alt="contact" className="section-img" />
				</div>
				<div className="contact-form">
					<h3 className="contact-tilte main-title">Get In Touch</h3>
					<form className="form">
						<div className="name">
							<input type="text" placeholder="First Name" />
							<input type="text" placeholder="Last Name" />
						</div>
						<textarea
							type="text"
							placeholder="Your Massege"
							className="textarea"
						></textarea>
					</form>
					<button className="submit dark-btn"> Submit</button>
				</div>
			</div>
		</>
	);
};

export default Contact;
