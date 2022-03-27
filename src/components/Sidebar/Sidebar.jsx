import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = ({ isopen }) => {
	return (
		<div className={isopen ? "sidebar-container active" : "sidebar-container"}>
			<ul className="sidebar-items" onClick={isopen}>
				<li className="sidebar-link">
					<Link to="/">Home</Link>
				</li>
				<li className="sidebar-link">
					<Link to="about">About</Link>
				</li>
				<li className="sidebar-link">
					<Link to="service">Service</Link>
				</li>
				<li className="sidebar-link">
					<Link to="contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
