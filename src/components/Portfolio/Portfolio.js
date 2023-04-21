import React, { useState } from "react";
import Fade from "react-reveal/Fade";
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
		<section className="flex flex-col items-center mx-auto max-w-4xl w-full">
			<Fade top distance="40%" duration="1800">
				<h2 className="text-4xl py-8 mt-20 text-center font-bold md:text-left drop-shadow text-orange-300">
					❀ PORTFOLIO ❀
				</h2>
			</Fade>

				<article className="flex flex-wrap-reverse flex-row-reverse justify-center items-center max-w-2/3 ">
					{projects.map((project, idx) => (
						<Project project={project} key={"project" + idx} />
					))}
				</article>
			{/* Make half of it as a carousel and the other half displaying the info */}
		</section>
	);
}

export default Portfolio;
