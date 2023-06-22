import React, { useState } from "react";
import Project from "../Project/Project";

function Portfolio() {
	const [projects] = useState([
		{
			name: "cozia",
			link: "https://gocozia.com/",
			description: "The pseudo-clothing ecommerce website where you can become both a buyer and seller. Upload pictures of clothes that you want to sell, browse for trending clothes, leave reviews on clothes, and view your orders that you've sold or purchased.",
			stack: "MERN (MySQL, Express.js, React, Node.js), GraphQL, Tailwind CSS, REST API, AWS, Heroku, Stripe, Figma",
			aws: "https://gocozia.com/",
			heroku: "https://cozia.herokuapp.com/",
			repo: "https://github.com/christylex3/cozia",
			figma: "https://www.figma.com/file/odknIKVYg5htw1EwxBJY0f/Cozia?type=design&node-id=497-456",
		},
		{
			name: "level-up-coding",
			link: "https://level-up-coding.herokuapp.com/",
			description: "An easy way to view other coding tutorial videos all in one website! Each videos are organized by difficulty levels: beginner, intermediate, or advanced. You can watch videos, upload videos, and sign up or log in to comment on them.",
			stack: "MERN (MySQL, Express.js, React, Node.js), Heroku, GraphQL, Tailwind CSS, Excalidraw, Lucid",
			heroku: "https://level-up-coding.herokuapp.com/",
			excalidraw: "https://excalidraw.com/#room=271ea528f02042a30d4f,IqJCZ-dk48Qv4matA76Z2A",
			repo: "https://github.com/christylex3/Level-Up-Coding",
		},
		{
			name: "tech-blog",
			link: "https://simply-tech-blog.herokuapp.com/",
			description: "A space where you can blog and nerd out about technology or coding. Simply just login and post! Then check out what others have to say. You're also welcome to edit and delete your blogs.",
			stack: "MERN (MySQL, Express.js, React, Node.js), Heroku",
			heroku: "https://simply-tech-blog.herokuapp.com/",
			repo: "https://github.com/christylex3/tech-blog",
		},
		{
			name: "weather-dashboard",
			link: "https://christylex3.github.io/weather-dashboard/",
			description: "The weather dashboard that dynamically gives you the 5-Day forecast based on the city you search up. You can also use the search history to view previous searches.",
			stack: "JavaScript, API",
			repo: "https://github.com/christylex3/weather-dashboard",
		},
		{
			name: "recipe-finder",
			link: "https://simply-recipe-finder.herokuapp.com/",
			description: "A place where you can share recipes among each other. Login and upload a recipe to share with the community!",
			stack: "MERN, Tailwind CSS, Heroku",
			heroku: "https://simply-recipe-finder.herokuapp.com/",
			repo: "https://github.com/christylex3/recipefinder",
		},
	]);

	return (
		<section id="portfolio-section" className="bg-indigo pb-28">
			<div className="max-w-8xl mx-auto flex flex-col items-center">
				<h2 className="section-head text-4xl py-8 mt-20 text-center md:text-left font-bold drop-shadow text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-white js-show-on-scroll">
					❀ PORTFOLIO ❀
				</h2>
				<p className="text-slate-400 md:font-medium text-lg md:text-xl mb-8 js-show-on-scroll">Check out my work below!</p>
				<article className="flex flex-wrap justify-center items-center">
					{projects.map((project, idx) => (
						<Project project={project} key={"project" + idx} />
					))}
				</article>
			</div>
		</section>
	);
}

export default Portfolio;
