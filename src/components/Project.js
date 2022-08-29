import React from "react";

import recipeFinder from "../images/recipefinder.png";
import sadLibs from "../images/sadLibs.jpg";
import techblog from "../images/techblog.png";
import weatherDashboard from "../images/weather-dashboard.jpg";

const Project = () => {
	return (
		<div>
			<h2>WORK</h2>
			<section className="project-gallery flex justify-between flex-col lg:flex-row">
				<article className="project-card">
					<a
						href="https://mike-gonz0.github.io/sadLibs/"
						target="_blank"
						rel="noreferrer"
					>
						<h3>sadLibs</h3>
						<img src={sadLibs} alt="sadLibs" />
					</a>
				</article>
				<article className="project-card">
					<a
						href="https://salty-island-34746.herokuapp.com/"
						target="_blank"
						rel="noreferrer"
					>
						<h3>Recipe Finder</h3>
						<img
							src={recipeFinder}
							alt="Recipe Finder"
						/>
					</a>
				</article>
			</section>
			<section className="project-gallery flex justify-between flex-col lg:flex-row">
			<article className="project-card">
					<a
						href="https://christylex3.github.io/weather-dashboard/"
						target="_blank"
						rel="noreferrer"
					>
						<h3>Weather Dashboard</h3>
						<img src={weatherDashboard} alt="Weather Dashboard" />
					</a>
				</article>
				<article className="project-card">
					<a
						href="https://simply-tech-blog.herokuapp.com/"
						target="_blank"
						rel="noreferrer"
					>
						<h3>Tech Blog</h3>
						<img
							src={techblog}
							alt="The Tech Blog"
						/>
					</a>
				</article>
			</section>
		</div>
	);
};

export default Project;
