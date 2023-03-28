import React, { useState } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Page from "./components/Page/Page";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
	const [pages] = useState([
		{ name: "about me" },
		{ name: "portfolio" },
		{ name: "contact" },
		{ name: "resume" },
	]);

	const [currentPage, setCurrentPage] = useState(pages[0]);

	return (
		<div>
			<Nav
				pages={pages}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			></Nav>
			<Header />
			<main className="bg-gradient-to-r from-slate-800 to-slate-600 text-white flex justify-center">
				<Page currentPage={currentPage}></Page>
			</main>
			<Footer />
		</div>
	);
}

export default App;