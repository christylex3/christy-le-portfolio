import React from "react";

// My profile picture
import christy_le from "../../assets/profile/christy-le.jpg";
import certificate from "../../assets/certificate/christy-le-certificate.pdf";

function About() {
	return (
		<section
			id="about-section"
			className="bg-neutral-800 flex flex-col px-7 md:px-10 lg:px-0"
		>
			<div className="max-w-4xl mx-auto flex flex-col">
				<h2 className="section-head text-5xl py-8 mt-20 text-center md:text-left font-bold drop-shadow font-staatliches text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-white js-show-on-scroll">
					ABOUT ME
				</h2>
				{/* </Fade> */}
				<article className="flex flex-col md:flex-row mb-20">
					<div className="text-neutral-400 text-lg md:text-xl md:pr-5">
						<p className="js-show-on-scroll">
							Hello, I'm Christy, a full-stack developer who
							recently changed career from{" "}
							<span className="text-rose-300 font-semibold animated-underline">
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
							<span className="text-rose-300 font-semibold animated-underline">
								<a
									className="animated-underline"
									target="_blank"
									href={certificate}
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
							I am known among peers for being mission-oriented,
							collaborative, communicative, and inquisitive.
						</p>
						<br />
						<p className="mb-8 js-show-on-scroll">
							As my goal is to become a lead developer, I strive
							to build smoother responsive full-stack applications
							and learn new frameworks that can make applications
							more accessible and maintainable.
						</p>
					</div>
					<img
						className="object-cover object-scale-down rounded-xl w-full md:[350px] h-[350px] hover:cursor-pointer mix-blend-luminosity hover:mix-blend-normal drop-shadow js-show-on-scroll"
						src={christy_le}
						alt="CHRISTY LE"
					/>
				</article>
			</div>
		</section>
	);
}

export default About;
