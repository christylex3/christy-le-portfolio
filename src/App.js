import React, { useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
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
				} else {
					// Otherwise remove the fadeIn class
					entry.target.classList.remove("motion-safe:animate-fadeUp");
				}
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
		<main className="bg-hero bg-fixed bg-center bg-cover object-cover w-full min-h-screen text-[#4F4451] relative">
			<Nav />
			<Header />
			<About />
			<Portfolio />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
