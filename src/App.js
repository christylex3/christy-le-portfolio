import React, { useEffect } from "react";
// import Preloader from "./components/Preloader/Preloader";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
// import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
	useEffect(() => {
		// Callback for IntersectionObserver
		const callback = function (entries) {
			entries.forEach((entry) => {
				// Is the element in the viewport?
				if (entry.isIntersecting) {

					// Add the fadeUp class:
					entry.target.classList.add("motion-safe:animate-fadeUp");
				}
				// If I want the element to disappear
				// } else {
				// 	// Otherwise remove the fadeIn class
				// 	entry.target.classList.remove("motion-safe:animate-fadeUp");
				// }
			});
		};

		// Set up a new observer
		const observer = new IntersectionObserver(callback);

		// Get all the elements you want to show on scroll
		const targets = document.querySelectorAll(".js-show-on-scroll");

		// Loop through each of the target
		targets.forEach(function (target) {
			// Hide the element
			target.classList.add("opacity-0");

			// Add the element to the watcher
			observer.observe(target);
		});
	}, []);

	return (
		<main className="bg-hero bg-fixed bg-cover bg-bottom text-white w-full min-h-screen relative">
			<Nav />
			<Header />
			<About />
			<Experience />
			<Portfolio />
			{/* <Resume /> */}
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
