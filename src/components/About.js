import React from "react";
// import { Link } from "react-router-dom";

// My Profile picture
import christy_le from "../images/christy-le.jpg";

// Passion icons
import codingIcon from "../images/coding-svgrepo-com.svg";
import designIcon from "../images/graphic-design-svgrepo-com.svg";
import gameIcon from "../images/gamepad-gamer-svgrepo-com.svg";

// Skills icon - core
import java from "../images/skills/java-colored.svg";
import javaScript from "../images/skills/javascript-colored.svg";

// Skills icon - frontend
import html from "../images/skills/html5-colored.svg";
import css from "../images/skills/css3-colored.svg";
import react from "../images/skills/react-colored.svg";
import jquery from "../images/skills/jquery-colored.svg";
import bootstrap from "../images/skills/bootstrap-colored.svg";
import tailwindcss from "../images/skills/tailwindcss-colored.svg";
import webpack from "../images/skills/webpack-colored.svg";
import babel from "../images/skills/babel-colored.svg";

// Skills icon - backend and database
import nodejs from "../images/skills/nodejs-colored.svg";
import expressjs from "../images/skills/express-colored.svg";
import heroku from "../images/skills/heroku-colored.svg";
import mysql from "../images/skills/mysql-colored.svg";
import mongodb from "../images/skills/mongodb-colored.svg";
import graphql from "../images/skills/graphql-colored.svg";


// Skills icon - software
import photoshop from "../images/skills/photoshop-colored.svg";
import illustrator from "../images/skills/photoshop-colored.svg";
import premierePro from "../images/skills/premierepro-colored.svg";
import adobexd from "../images/skills/xd-colored.svg";
import figma from "../images/skills/figma-colored.svg";

const About = () => {
	return (
		<div>
			{/* ABOUT ME */}
			<section id="about-section">
				<h2 className="about-header">MY STORY</h2>
				<article className="about-body flex justify-between flex-col lg:flex-row">
					<img id="profile-img" src={christy_le} alt="CHRISTY LE" />
					<section className="who-body">
						<h3 id="name">Christy Le</h3>
						<p className="italic">Full-Stack Developer</p>
						<br />
						<p>
							I graduated from Georgia Institute of Technology
							with Bachelor of Science in Literature, Media, and
							Communication and worked at Mod Exposure in direct
							sales. Though soon later, I wanted to code for a
							living as I had been coding as a hobby. That's when
							I came across the GT Coding Bootcamp and made a
							career change to be a Full-Stack Developer.
						</p>
					</section>
				</article>
			</section>
			{/* PASSION */}
			<section className="passion-section">
				<h2 className="about-me-header">PASSION</h2>
				<section className="flex justify-between flex-col lg:flex-row">
					<article className="passion-card flex flex-col">
						<img
							className="passion-icon"
							src={codingIcon}
							alt="coding icon"
						/>
						<h3 className="passion-header text-center">CODING</h3>
						<p className="passion-body">
							{/* I love coding because not only does it let me design websites and applications, it also challenges me to think in new perspectives. */}
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
						</p>
					</article>
					<article className="passion-card flex flex-col">
						<img
							className="passion-icon"
							src={designIcon}
							alt="graphic design icon"
						/>
						<h3 className="passion-header text-center">DESIGN</h3>
						<p className="passion-body">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
						</p>
					</article>
					<article className="passion-card flex flex-col">
						<img
							className="passion-icon"
							src={gameIcon}
							alt="gamepad gamer icon"
						/>
						<h3 className="passion-header text-center">GAMES</h3>
						<p className="passion-body">
							{/* Since childhood, I've been a big fan of games since I love to be immersed in another world. I really love it when the game offers world building, puzzles, storytelling, and more. Games definitely play as a major source in my creativity.  */}
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
						</p>
					</article>
				</section>
			</section>
			{/* SKILLS */}
			<section className="skills-section">
				<h2 className="about-me-header">SKILLS</h2>
				<section className="flex flex-wrap justify-between flex-row">
						<img
							class="skills-icon"
							src={java}
							alt="Java"
						/>
						<img
							class="skills-icon"
							src={javaScript}
							alt="JavaScript"
						/>
						<img
							class="skills-icon"
							src={html}
							alt="HTML5"
						/>
						<img
							class="skills-icon"
							src={css}
							alt="CSS"
						/>
						<img
							class="skills-icon"
							src={react}
							alt="React.js"
						/>
						<img
							class="skills-icon"
							src={jquery}
							alt="jQuery"
						/>
						<img
							class="skills-icon"
							src={bootstrap}
							alt="Bootstrap"
						/>
						<img
							class="skills-icon"
							src={tailwindcss}
							alt="TailwindCSS"
						/>
						<img
							class="skills-icon"
							src={webpack}
							alt="Webpack"
						/>
						<img
							class="skills-icon"
							src={babel}
							alt="Babel"
						/>
						<img
							class="skills-icon"
							src={nodejs}
							alt="Node.js"
						/>
						<img
							class="skills-icon"
							src={expressjs}
							alt="Express.js"
						/>
						<img
							class="skills-icon"
							src={heroku}
							alt="Express.js"
						/>
						<img
							class="skills-icon"
							src={mysql}
							alt="MySQL"
						/>
						<img
							class="skills-icon"
							src={mongodb}
							alt="MongoDB"
						/>
						<img
							class="skills-icon"
							src={graphql}
							alt="GraphQL"
						/>
						<img
							class="skills-icon"
							src={photoshop}
							alt="Adobe Photoshop"
						/>
						<img
							class="skills-icon"
							src={illustrator}
							alt="Adobe Illustrator"
						/>
						<img
							class="skills-icon"
							src={premierePro}
							alt="Adobe Premiere Pro"
						/>
						<img
							class="skills-icon"
							src={adobexd}
							alt="AdobeXd"
						/>
						<img
							class="skills-icon"
							src={figma}
							alt="Figma"
						/>
				</section>
			</section>
		</div>
	);
};

export default About;
