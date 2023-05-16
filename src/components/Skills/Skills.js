import React from "react";

function Skills() {
	return (
		<section
			id="skills-section"
			className="bg-neutral-800 flex flex-col px-7 md:px-0"
		>
			<div className="max-w-4xl mx-auto js-show-on-scroll">
				<h2 className="section-head text-4xl py-8 mt-20 text-center font-bold drop-shadow text-transparent bg-clip-text bg-gradient-to-b from-rose-700 to-rose-100">
					❀ EXPERIENCE & SKILLS ❀
				</h2>
				{/* </Fade> */}
				<article className="flex flex-col mb-20">
					<div className="text-neutral-400 text-lg md:text-xl md:pr-5">
						<div className="flex flex-col">
							<p className="font-bold">Frontend</p>
						</div>
						<br />
						<div>
							<p className="font-bold">Backend</p>
							<div className="backend"></div>
						</div>
						<br />
						<div>
							<p className="font-bold">Deployment</p>
							<div className="deployment"></div>
						</div>
					</div>
					<ul className="tech-stack text-neutral-400 font-firamono">
						<li className="font-firamono">Adobe XD</li>
						<li>Adobe Photoshop</li>
						<li>Amazon Web Services</li>
						<li>Bootstrap</li>
						<li>CSS</li>
						<li>Express.js</li>
						<li>Figma</li>
						<li>GraphQL</li>
						<li>Heroku</li>
						<li>HTML</li>
						<li>Java</li>
						<li>JavaScript</li>
						<li>JQuery</li>
						<li>MongoDB</li>
						<li>MySQL</li>
						<li>Node.js</li>
						<li>Premiere Pro</li>
						<li>React</li>
						<li>Tailwind CSS</li>
					</ul>
				</article>
			</div>
		</section>
	);
}

export default Skills;
