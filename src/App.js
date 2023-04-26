import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import "./App.css";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
	// const [pages] = useState([
	// 	{ name: "about me" },
	// 	{ name: "portfolio" },
	// 	{ name: "contact" },
	// 	{ name: "resume" },
	// ]);

	// const [currentPage, setCurrentPage] = useState(pages[0]);

	return (
		// <Router>
		// 	{/* <Nav /> */}
		// 	<Routes>
		// 		<Route path="/christy-le-portfolio" element={<Home />} />
		// 	</Routes>
		// 	<Footer />
		// </Router>
		<main className="bg-hero bg-fixed bg-center bg-cover object-cover w-full min-h-screen text-neutral-700">
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