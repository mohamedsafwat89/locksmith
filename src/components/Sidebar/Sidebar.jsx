import React from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isopen }) => {
	return (
		<div className={isopen ? "sidebar-container active" : "sidebar-container"}>
			{/* <ul className="sidebar-items" onClick={isopen}>
				<li className="sidebar-link">
					<NavLink to="/">Home</NavLink>
				</li>
				<li className="sidebar-link">
					<NavLink to="about">About</NavLink>
				</li>
				<li className="sidebar-link">
					<NavLink to="service">Service</NavLink>
				</li>
				<li className="sidebar-link">
					<NavLink to="contact">Contact</NavLink>
				</li>
			</ul> */}
			<ul className="sidebar-items" onClick={isopen}>
				<li className="sidebar-link">
					<NavLink className="nav-link" to="/">
						Home
					</NavLink>
				</li>
				<li className="sidebar-link">
					<NavLink className="nav-link" to="about">
						About Us
					</NavLink>
				</li>
				<li className="sidebar-link">
					<NavLink className="nav-link" to="service">
						Service
					</NavLink>
				</li>
				<li className="sidebar-link">
					<NavLink className="nav-link" to="contact">
						Contact Us
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
