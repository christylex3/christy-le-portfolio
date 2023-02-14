import React, { useState } from "react";
import Project from "./Project";

function Portfolio() {
	const [projects] = useState([
		{
			// fix link for this
			name: "sadLibs",
			description: "HTML/CSS",
			link: "",
			repo: "https://github.com/christylex3/sadLibs"
		},
		{
			// fix link for this
			name: "recipe-finder",
			description: "MERN Stack",
			link: "",
			repo: "https://github.com/christylex3/recipefinder",
		},
		{
			name: "weather-dashboard",
			description: "HTML/CSS/JS",
			link: "https://christylex3.github.io/weather-dashboard/",
			repo: "https://github.com/christylex3/work-day-scheduler",
		},
		{
			// fix link for this
			name: "tech-blog",
			description: "MERN Stack",
			link: "",
			repo: "https://github.com/christylex3/tech-blog",
		},
		// {
		// 	// fix link for this
		// 	name: "level-up-coding",
		// 	description: "MERN Stack",
		// 	link: "",
		// 	repo: "https://github.com/christylex3/Level-Up-Coding",
		// },
	])

	return (
		<section className="">
			<h2 className="flex justify-center pt-5">Portfolio</h2>
			<article className="flex flex-wrap flex-row justify-center ml-5 mr-5">
				{projects.map((project, idx) => (
					<Project 
						project={project}
						key={"project" + idx}
					/>
				))}
			</article>
			{/* Make half of it as a carousel and the other half displaying the info */}
		</section>
	);
}

export default Portfolio;