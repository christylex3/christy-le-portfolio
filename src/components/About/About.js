import React from "react";

// My profile picture
import christy_le from "../../assets/profile/christy-le.jpg";

function About() {
	return (
		<section
			id="about-section"
			className="bg-indigo flex flex-col px-7 md:px-10 lg:px-0"
		>
			<div className="max-w-4xl mx-auto flex flex-col">
				<h2 className="section-head text-4xl py-8 mt-20 text-center md:text-left font-bold drop-shadow text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-white js-show-on-scroll">
					❀ ABOUT ME ❀
				</h2>
				{/* </Fade> */}
				<article className="flex flex-col md:flex-row mb-20">
					<div className="text-slate-400 md:font-medium text-lg md:text-xl md:pr-5">
						<p className="js-show-on-scroll">
							Hello, I'm Christy, a full-stack developer who
							recently changed career from{" "}
							<span className="hot-pink font-semibold animated-underline">
								<a
									className="animated-underline"
									target="_blank"
									href="https://www.modexposure.com/"
									rel="noreferrer"
								>
									direct sales marketing
								</a>
							</span>
							. I pursued coding as a hobby since 2018, and by
							late 2022, I decided to take coding further by
							completing Georgia Tech's Coding Bootcamp for the{" "}
							<span className="hot-pink font-semibold animated-underline">
								<a
									className="animated-underline"
									target="_blank"
									href="download:"
									rel="noreferrer"
								>
									Full Stack Flex Web Development
								</a>
							</span>{" "}
							certification.
						</p>
						<br />
						<p className="js-show-on-scroll">
							I specialize in developing MERN stack applications
							with the approach of Agile and Mobile-First Design.
							I am{" "}
							<span className="hot-pink font-semibold animated-underline">
								<a
									className="animated-underline"
									target="_blank"
									href="https://www.facebook.com/modexposure/photos/a.118722550442286/275320554782484/"
									rel="noreferrer"
								>
									known among peers
								</a>
							</span>{" "}
							for being inquisitive, mission-oriented,
							collaborative, communicative, and always eager to
							learn.
						</p>
						<br />
						<p className="mb-8 js-show-on-scroll">
							As my goal is to become a lead developer, I strive
							to build smoother responsive full-stack applications
							and learn new frameworks that can make applications more accessible and maintainable.
						</p>
					</div>
					<img
						className="rounded-lg object-cover w-full md:w-1/3 h-[350px] hover:cursor-pointer mix-blend-luminosity hover:mix-blend-normal drop-shadow js-show-on-scroll"
						src={christy_le}
						alt="CHRISTY LE"
					/>
				</article>
			</div>
		</section>
	);
}

export default About;
