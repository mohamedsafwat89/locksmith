import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./navbar.scss";

const Navbar = ({ toggle }) => {
	const scrollTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div className="nav-wrapper">
			<div className="contaier">
				<span className="logo">
					<NavLink className="logo-link" to="/">
						LockSmith
					</NavLink>
				</span>
				<FaBars className="sidebar-icon" onClick={toggle} />
				<ul className="nav-container">
					<li className="nav-item">
						<NavLink className="nav-link" to="/" onClick={scrollTop}>
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="about">
							About Us
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="service">
							Service
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="contact">
							Contact Us
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
