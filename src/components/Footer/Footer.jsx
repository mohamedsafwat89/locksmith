import React from "react";
import "./footer.scss";
import { ImLocation } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<div className="footer-container sections">
				<div className="footer-details">
					<div className="column">
						<div className="footer-logo">
							<span className="logo">LockSmith</span>
						</div>
						<div className="footer-msg">
							Are you locked out of your car at night, and you do not know what
							to do? You do not need to panic or to break your windows, trying
							to enter your auto. Call 911 Car Lockout Houston TX now to help
							you and solve your auto lockout problem.
						</div>
					</div>
					<div className="footer-contact column">
						<h3 className="footer-contact-title">Contact Us</h3>
						<ul className="footer-contact-list">
							<li>
								<ImLocation className="icon" />
								1303 NASA Road 1 , Houston , TX 77058
							</li>
							<li>
								<FiMail className="icon" />
								service@911carlockout.com
							</li>
							<li>
								<FaPhoneAlt className="icon" />
								877-887-4951
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-rights">
				<span>CopyRight &copy; 2022 - Mohamed Safwat</span>
			</div>
		</>
	);
};

export default Footer;
