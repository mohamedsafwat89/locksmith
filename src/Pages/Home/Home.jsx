import React from "react";
import AboutSection from "../../components/About/AboutSection";
import Clinets from "../../components/Clinets/Clinets";
import Contact from "../../components/Contact/Contact";
import HeroSection from "../../components/HeroSection/HeroSection";
import FirstContent from "../../components/MainContent/FirstContent/FirstContent";
import SecondContent from "../../components/MainContent/SecondContent/SecondContent";
import Service from "../../components/ServiceSection/Service";

const Home = () => {
	return (
		<div>
			<HeroSection />
			<AboutSection />
			<FirstContent />
			<SecondContent />
			<Service />
			<Clinets />
			<Contact />
		</div>
	);
};

export default Home;
