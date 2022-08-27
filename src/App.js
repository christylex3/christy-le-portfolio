import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Work from "./pages/Work";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
  	return (
    	<Router>
			<Header />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/work"
						element={<Work />}
					/>
				</Routes>
			<Footer />
      	</Router>
  	);
}

export default App;
