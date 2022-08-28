import React from "react";
// import { Link } from "react-router-dom";

import christy_le from "../images/christy-le.jpg";
import codingIcon from "../images/coding-svgrepo-com.svg";
import designIcon from "../images/graphic-design-svgrepo-com.svg";
import gameIcon from "../images/gamepad-gamer-svgrepo-com.svg";

const About = () => {
    return (
		<div>
			{/* ABOUT ME */}
			<section id="about-section">
				<h2 className="about-header">ABOUT ME</h2>
				<article className="about-body flex justify-between flex-col lg:flex-row">
					<img id="profile-img" src={christy_le} alt="CHRISTY LE" />
					<section className="who-body">
						<h3 id="name">Christy Le</h3>
						<p className="italic">Full-Stack Developer</p>
						<br />
						<p>
							I graduated from Georgia Institute of Technology with Bachelor of Science in Literature, Media, and Communication and worked at Mod Exposure in direct sales. Though soon later, I wanted to code for a living as I had been coding as a hobby. That's when I came across the GT Coding Bootcamp and made a career change to be a Full-Stack Developer.
						</p>
					</section>
				</article>
			</section>
			{/* PASSION */}
			<section className="passion-section">
				<h2 className="about-me-header">PASSION</h2>
				<section className="flex justify-between flex-col lg:flex-row">
					<article className="passion-content flex flex-col">
						<img
							className="passion-icon"
							src={codingIcon}
							alt="coding icon"
						/>
						<h3 className="passion-header text-center">CODING</h3>
						<p className="passion-body">
							I love coding because not only does it let me design websites and applications, it also challenges me to think in new perspectives.
						</p>
					</article>
					<article className="passion-content flex flex-col">
					<img
							className="passion-icon"
							src={designIcon}
							alt="graphic design icon"
						/>
						<h3 className="passion-header">DESIGN</h3>
						<p className="passion-body">
							Design... 
						</p>
					</article>
					<article className="passion-content flex flex-col">
						<img
							className="passion-icon"
							src={gameIcon}
							alt="gamepad gamer icon"
						/>
						<h3 className="passion-header">GAMES</h3>
						<p className="passion-body">
							Since childhood, I've been a big fan of games since I love to be immersed in another world. I really love it when the game offers world building, puzzles, storytelling, and more. Games definitely play as a major source in my creativity. 
						</p>
					</article>
				</section>
			</section>
			{/* SKILLS */}
			<section className="skills-section">
				<h2 className="about-me-header">SKILLS</h2>
				<section className="flex justify-between flex-col lg:flex-row">
				</section>
			</section>
		</div>
    );
};

export default About;