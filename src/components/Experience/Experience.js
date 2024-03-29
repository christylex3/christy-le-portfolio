import React from "react";

function Skills() {
	return (
		<section id="experience-section" className="bg-neutral-800 pb-28">
			<div className="max-w-4xl mx-auto flex flex-col px-7">
				<h2 className="section-head text-5xl mt-20 py-8 text-center font-bold drop-shadow font-staatliches text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-white js-show-on-scroll">
					EXPERIENCE & SKILLS
				</h2>
				<article className="text-neutral-300 font-bold text-lg md:text-xl mb-3 flex flex-wrap justify-between md:justify-normal mb-3 js-show-on-scroll">
					<div className="flex flex-col md:flex-row">
						<p className="font-normal md:ml-2 md:mr-0">
							Code Coach, @
						</p>
						<a
							href="https://www.thecoderschool.com/locations/suwanee/"
							target="_blank"
							rel="noreferrer"
							alt="theCoderSchool"
						>
							theCoderSchool
						</a>
					</div>
					<p className="flex md:items-center font-thin text-sm text-neutral-400 md:ml-2">
						Sep 2023 - Present
					</p>
				</article>
				<ul className="list-disc pl-4 mb-8 text-neutral-400 text-lg md:text-xl js-show-on-scroll">
					<li>
						Devised unique and engaging Python, Java, Robotics
						curriculums
					</li>
					<li>
						Assisted in hosting a Halloween Hackathon event and fall
						camps
					</li>
					<li>
						Coached in one-on-one sessions and in traditional
						classroom settings
					</li>
				</ul>
				{/* <article className="text-neutral-300 font-bold text-lg md:text-xl mb-3 flex flex-wrap justify-between md:justify-normal mb-3 js-show-on-scroll">
					<div className="flex flex-col md:flex-row">
						<a
							href="https://www.modexposure.com/"
							alt="Mod Exposure"
						>
							Mod Exposure,
						</a>
						<p className="font-normal md:ml-2 md:mr-0">
							Direct Sales Representative
						</p>
					</div>

					<p className="flex md:items-center font-thin text-sm text-neutral-400 md:ml-2">
						Feb - Apr 2022
					</p>
				</article>
				<ul className="list-disc pl-4 mb-8 text-neutral-400 text-lg md:text-xl js-show-on-scroll">
					<li>
						<span className="text-rose-300 font-semibold">
							<a
								className="animated-underline"
								target="_blank"
								href="https://www.facebook.com/modexposure/photos/a.118722550442286/275320554782484/"
								rel="noreferrer"
							>
								Recognized as a rising star
							</a>
						</span>{" "}
						and achieved leadership role within first 3 weeks
					</li>
					<li>
						Built high rapport with clients and conducted frequent
						product research
					</li>
					<li>Managed and executed events, set-ups, and teardowns</li>
					<li>
						Generated exceptional sales and trained new trainees
					</li>
				</ul> */}
				<p className="text-neutral-400 md:font-medium text-lg md:text-xl mb-8 js-show-on-scroll">
					Also, here are some technologies I've been working with:
				</p>
				<article className="mb-20">
					{/* Skills list */}
					<div className="text-neutral-400 grid grid-cols-2 md:grid-cols-4 gap-5 md:flex md:justify-evenly js-show-on-scroll">
						<div className="md:flex md:flex-col md:w-1/4 md:mr-8">
							<p className="text-neutral-300 uppercase font-bold text-lg md:text-xl mb-3">
								Programming Languages
							</p>
							<ul className="list-disc pl-4 mb-8">
								<li className="font-firamono">CSS</li>
								<li className="font-firamono">GraphQL</li>
								<li className="font-firamono">HTML</li>
								<li className="font-firamono">Java</li>
								<li className="font-firamono">JavaScript</li>
								<li className="font-firamono">MongoDB</li>
								<li className="font-firamono">MySQL</li>
								<li className="font-firamono">Python</li>
							</ul>
						</div>
						<div className="flex flex-col md:mr-4 md:w-1/4 md:mr-8">
							<p className="text-neutral-300 uppercase font-bold text-lg md:text-xl mb-3">
								Frameworks & Libraries
							</p>
							<ul className="list-disc pl-4 mb-4">
								<li className="font-firamono">
									Apollo Server Client
								</li>
								<li className="font-firamono">Bootstrap</li>
								<li className="font-firamono">Express.js</li>
								<li className="font-firamono">jQuery</li>
								<li className="font-firamono">Mongoose</li>
								<li className="font-firamono">Node.js</li>
								<li className="font-firamono">React</li>
								<li className="font-firamono">Sequelize</li>
								<li className="font-firamono">Tailwind CSS</li>
							</ul>
						</div>
						<div className="flex flex-col mr-8 md:w-1/4">
							<p className="text-neutral-300 uppercase font-bold text-lg md:text-xl mb-3">
								Deployment
							</p>
							<ul className="list-disc pl-4 mb-4">
								<li className="font-firamono">AWS</li>
								<li className="font-firamono">Heroku</li>
								<li className="font-firamono">GitHub Pages</li>
							</ul>
						</div>
						<div className="md:flex md:flex-col md:w-1/4">
							<p className="text-neutral-300 uppercase font-bold text-lg md:text-xl mb-3">
								Other Tools
							</p>
							<ul className="list-disc pl-4 mb-4">
								<li className="font-firamono">
									Adobe Illustrator
								</li>
								<li className="font-firamono">
									Adobe Photoshop
								</li>
								<li className="font-firamono">
									Adobe Premiere Pro
								</li>
								<li className="font-firamono">Excalidraw</li>
								<li className="font-firamono">Figma</li>
								<li className="font-firamono">Lucidchart</li>
								<li className="font-firamono">Trello</li>
							</ul>
						</div>
					</div>
					{/* Skill Bars */}
					<div className="skill-items mt-8 md:mt-4 js-show-on-scroll">
						<p className="text-neutral-300 text-xl text-center font-bold">
							TOP SKILLS
						</p>
						<article className="skill-item my-4">
							<div className="skill-info flex justify-between text-neutral-400">
								<p className="font-medium font-firamono">
									React
								</p>
								<p className="font-medium font-firamono">88%</p>
							</div>
							<div className="progress-line w-full bg-neutral-700 h-3 rounded-full drop-shadow mb-5">
								<div
									className="bg-rose-300 h-3 rounded-full transition"
									style={{ width: "88%" }}
								></div>
							</div>
						</article>
						<article className="skill-item">
							<div className="skill-info flex justify-between text-neutral-400">
								<p className="font-medium font-firamono">
									Tailwind CSS
								</p>
								<p className="font-medium font-firamono">82%</p>
							</div>
							<div className="w-full bg-neutral-700 h-3 rounded-full drop-shadow mb-5">
								<div
									className="bg-rose-300 h-3 rounded-full"
									style={{ width: "82%" }}
								></div>
							</div>
						</article>
						<article className="skill-item">
							<div className="skill-info flex justify-between text-neutral-400">
								<p className="font-medium font-firamono">
									JavaScript (ES6+)
								</p>
								<p className="font-medium">80%</p>
							</div>
							<div className="progress-line w-full bg-neutral-700 h-3 rounded-full drop-shadow mb-5">
								<div
									className="bg-rose-300 h-3 rounded-full"
									style={{ width: "80%" }}
								></div>
							</div>
						</article>
						<article className="skill-item">
							<div className="skill-info flex justify-between text-neutral-400">
								<p className="font-medium font-firamono">
									Node.js
								</p>
								<p className="font-medium">77%</p>
							</div>
							<div className="progress-line w-full bg-neutral-700 h-3 rounded-full drop-shadow mb-5">
								<div
									className="bg-rose-300 h-3 rounded-full"
									style={{ width: "77%" }}
								></div>
							</div>
						</article>
						<article className="skill-item">
							<div className="skill-info flex justify-between text-neutral-400">
								<p className="font-medium font-firamono">
									Python
								</p>
								<p className="font-medium">75%</p>
							</div>
							<div className="progress-line w-full bg-neutral-700 h-3 rounded-full drop-shadow mb-5">
								<div
									className="bg-rose-300 h-3 rounded-full"
									style={{ width: "75%" }}
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
