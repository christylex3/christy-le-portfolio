import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Preloader from "./components/Preloader/Preloader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* TODO: DO I NEED THIS? */}
		<Preloader />
		<App />
	</React.StrictMode>
);

reportWebVitals();
