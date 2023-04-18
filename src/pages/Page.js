import React from "react";
// import PageContent from "./PageContent";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Resume from "../components/Resume/Resume";
// import { capitalizeFirstLetter } from '../utils/helpers';

function Page({ currentPage }) {
	const renderPage = () => {
		switch (currentPage.name) {
			case "about me":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return <About />;
		}
	};

	return <section className="page">{renderPage()}</section>;
}

export default Page;
