import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
		<div>
			<section id="about-section">
				<h2 className="about-header">ABOUT ME</h2>
				<article className="about-body flex justify-between flex-col xl:flex-row">
					<img id="profile-img" src="../test-images/christy-le.png" alt="CHRISTY LE" />
					<p className="who-body">
						I graduated from Georgia Institute of Technology with Bachelor of Science in Literature, Media, and Communication and worked at Mod Exposure in direct sales. Though soon later, I wanted to code for a living as I had been coding as a hobby. That's when I came across the GT Coding Bootcamp and made a career change to be a Full-Stack Developer.
					</p>
				</article>
			</section>

			<section className="passion-section">
				<h2 className="about-me-header">PASSION</h2>
				<section className="flex justify-between flex-col xl:flex-row">
					<article className="passion-content flex flex-col">
						<h3 className="passion-header">coding</h3>
						<p className="passion-body">
							I love coding because not only does it let me design websites and applications, it also challenges me to think in new perspectives.
						</p>
					</article>
					<article className="passion-content flex flex-col">
						<h3 className="passion-header">design</h3>
						<p className="passion-body">
							Design... 
						</p>
					</article>
					<article className="passion-content flex flex-col">
						<img className="passion-icon" src="" alt="" />
						<h3 className="passion-header">games</h3>
						<p className="passion-body">
							Since childhood, I've been a big fan of games since I love to be immersed in another world. I really love it when the game offers world building, puzzles, storytelling, and more. 
						</p>
					</article>
				</section>
			</section>

			<section className="skills-section">
				<h3 className="about-me-header">SKILLS</h3>
			</section>
		</div>
    );
};

export default About;