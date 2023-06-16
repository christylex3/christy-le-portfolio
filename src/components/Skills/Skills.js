import React from "react";

function Skills() {
	return (
		<section
			id="skills-section"
			className="bg-indigo pb-28"
		>
			<div className="max-w-4xl mx-auto flex flex-col px-7">
				<h2 className="section-head text-4xl mt-20 py-8 text-center font-bold drop-shadow text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-white js-show-on-scroll">
					❀ SKILLS ❀
				</h2>
				<p className="text-slate-400 md:font-medium text-lg md:text-xl mb-8 js-show-on-scroll">Here are some technologies I've been working with:</p>
				{/* Skills list */}
				<article className="mb-20">
					<div className="text-slate-400 grid grid-cols-2 gap-5 ml-6 md:ml-0 md:flex md:justify-between js-show-on-scroll">
						<div className="md:flex md:flex-col md:mr-8">
							<p className="timberworld font-bold text-lg md:text-xl mb-3">
								FRONTEND
							</p>
							<ul className="list-disc pl-4 mb-8">
								<li className="font-firamono">Bootstrap</li>
								<li className="font-firamono">CSS</li>
								<li className="font-firamono">Handlebars</li>
								<li className="font-firamono">HTML</li>
								<li className="font-firamono">JavaScript</li>
								<li className="font-firamono">JQuery</li>
								<li className="font-firamono">React</li>
								<li className="font-firamono">Tailwind CSS</li>
							</ul>
						</div>
						<div className="flex flex-col md:mr-4">
							<p className="timberworld font-bold text-lg md:text-xl mb-3">
								BACKEND
							</p>
							<ul className="list-disc pl-4 mb-4">
								<li className="font-firamono">Express.js</li>
								<li className="font-firamono">GraphQL</li>
								<li className="font-firamono">Java</li>
								<li className="font-firamono">MongoDB</li>
								<li className="font-firamono">Mongoose</li>
								<li className="font-firamono">MySQL</li>
								<li className="font-firamono">Node.js</li>
								<li className="font-firamono">Sequelize</li>
							</ul>
						</div>
						<div className="flex flex-col mr-8">
							<p className="timberworld font-bold text-lg md:text-xl mb-3">
								DEPLOYMENT
							</p>
							<ul className="list-disc pl-4 mb-4">
								<li className="font-firamono">AWS</li>
								<li className="font-firamono">Heroku</li>
								<li className="font-firamono">GitHub Pages</li>
							</ul>
						</div>
						<div>
							<p className="timberworld font-bold text-lg md:text-xl mb-3">
								OTHER
							</p>
							<ul className="list-disc pl-4 mb-4">
								<li className="font-firamono">Photoshop</li>
								<li className="font-firamono">Illustrator</li>
								<li className="font-firamono">Premiere Pro</li>
								<li className="font-firamono">Figma</li>
								<li className="font-firamono">Lucid Charts</li>
							</ul>
						</div>
					</div>
					{/* Skill Bars */}
					<div className="skill-items mt-8 md:mt-4 js-show-on-scroll">
						<p className="text-slate-300 text-xl text-center font-bold">
							TOP SKILLS
						</p>
						<article className="skill-item my-4">
							<div className="skill-info flex justify-between text-slate-400">
								<p className="font-medium font-firamono">
									JavaScript (ES6+)
								</p>
								<p className="font-medium font-firamono">88%</p>
							</div>
							<div className="progress-line w-full bg-slate-700 h-3 rounded-full drop-shadow mb-5">
								<div
									className="bg-pink-400 h-3 rounded-full transition"
									style={{ width: "88%" }}
								></div>
							</div>
						</article>
						<article className="skill-item">
							<div className="skill-info flex justify-between text-slate-400">
								<p className="font-medium font-firamono">
									React
								</p>
								<p className="font-medium font-firamono">82%</p>
							</div>
							<div className="w-full bg-slate-700 h-3 rounded-full drop-shadow mb-5">
								<div
									className="bg-pink-400 h-3 rounded-full"
									style={{ width: "82%" }}
								></div>
							</div>
						</article>
						<article className="skill-item">
							<div className="skill-info flex justify-between text-slate-400">
								<p className="font-semibold">Tailwind CSS</p>
								<p className="font-medium">80%</p>
							</div>
							<div className="progress-line w-full bg-slate-700 h-3 rounded-full drop-shadow mb-5">
								<div
									className="bg-pink-400 h-3 rounded-full"
									style={{ width: "80%" }}
								></div>
							</div>
						</article>
						<article className="skill-item">
							<div className="skill-info flex justify-between text-slate-400">
								<p className="font-semibold">Node.js</p>
								<p className="font-medium">77%</p>
							</div>
							<div className="progress-line w-full bg-slate-700 h-3 rounded-full drop-shadow mb-5">
								<div
									className="bg-pink-400 h-3 rounded-full"
									style={{ width: "77%" }}
								></div>
							</div>
						</article>
						<article className="skill-item">
							<div className="skill-info flex justify-between text-slate-400">
								<p className="font-semibold">MongoDB</p>
								<p className="font-medium">70%</p>
							</div>
							<div className="progress-line w-full bg-slate-700 h-3 rounded-full drop-shadow mb-5">
								<div
									className="bg-pink-400 h-3 rounded-full"
									style={{ width: "70%" }}
								></div>
							</div>
						</article>
					</div>
				</article>
			</div>
		</section>
	);
}

export default Skills;
