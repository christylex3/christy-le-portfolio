import React from "react";
import mountains from "../assets/cover/mountains-square.jpg";

function Header (props) {
	return (
		<header>
			<img className="hero" src={mountains} alt="Mountain in the Night Sky by Baggeb"></img>
			<article className="hero-text">
				<h1>Christy Le</h1>
				<p>Full-Stack Web Developer</p>
			</article>
			{props.children}
	  </header>
	)
}

export default Header;