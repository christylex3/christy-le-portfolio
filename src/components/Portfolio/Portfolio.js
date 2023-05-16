import React, { useState } from "react";
import Project from "../Project/Project";

function Portfolio() {
	const [projects] = useState([
		{
			name: "sadLibs",
			description: "HTML/CSS",
			link: "https://christylex3.github.io/sadLibs/",
			repo: "https://github.com/christylex3/sadLibs",
		},
		{
			name: "recipe-finder",
			description: "MERN Stack",
			link: "https://simply-recipe-finder.herokuapp.com/",
			repo: "https://github.com/christylex3/recipefinder",
		},
		{
			name: "weather-dashboard",
			description: "HTML/CSS/JS",
			link: "https://christylex3.github.io/weather-dashboard/",
			repo: "https://github.com/christylex3/work-day-scheduler",
		},
		{
			name: "tech-blog",
			description: "MERN Stack",
			link: "https://simply-tech-blog.herokuapp.com/",
			repo: "https://github.com/christylex3/tech-blog",
		},
		{
			name: "level-up-coding",
			description: "MERN Stack",
			link: "https://level-up-coding.herokuapp.com/",
			repo: "https://github.com/christylex3/Level-Up-Coding",
		},
		{
			name: "cozia",
			description: "MERN Stack",
			link: "https://gocozia.com/",
			// link: "https://cozia.herokuapp.com/",
			repo: "https://github.com/christylex3/cozia",
		},
	]);

	return (
		<section id="portfolio-section" className="bg-neutral-800 pb-28">
			<div className="max-w-4xl mx-auto flex flex-col items-center">
				<h2 className="section-head text-4xl py-8 mt-20 text-center md:text-left font-bold drop-shadow text-transparent bg-clip-text bg-gradient-to-b from-rose-700 to-rose-100 js-show-on-scroll">
					❀ PORTFOLIO ❀
				</h2>
				<article className="flex flex-wrap-reverse flex-row-reverse justify-center items-center">
					{projects.map((project, idx) => (
						<Project project={project} key={"project" + idx} />
					))}
				</article>
			</div>
		</section>
	);
}

export default Portfolio;
