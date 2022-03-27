import "./App.scss";
import React, { useState } from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import ServicePage from "./Pages/ServicePage/ServicePage";
import Sidebar from "./components/Sidebar/Sidebar";
import AboutPage from "./Pages/About/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
		console.log(isOpen);
	};
	return (
		<Router className="App">
			<Navbar toggle={toggle} />
			<Sidebar isopen={isOpen} />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/service" element={<ServicePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
