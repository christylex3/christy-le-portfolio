import React from "react";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

function Home() {

	return (
		<main className="bg-gradient-to-r from-slate-800 to-slate-600 text-white max-h-screen overflow-y-scroll overflow-x-hidden snap snap-y snap-mandatory">
			<Nav />
			<Header />
			<About />
			<Portfolio />
			<Contact />
		</main>
	);
}

export default Home;
