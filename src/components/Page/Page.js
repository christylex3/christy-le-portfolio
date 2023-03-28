import React from "react";
// import PageContent from "./PageContent";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
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
