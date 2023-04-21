import React from "react";
import Fade from "react-reveal/Fade";

// My profile picture
import christy_le from "../../assets/profile/christy-le.jpg";

function About() {
	return (
		<section className="flex flex-col max-w-4xl mx-auto px-7 md:px-0">
			<Fade top distance="40%" duration="2000">
				<h2 className="text-4xl py-8 mt-20 text-center md:text-left font-bold drop-shadow text-orange-300">
					❀ ABOUT ME ❀
				</h2>
			</Fade>
			<article className="flex flex-col md:flex-row mb-20">
				<Fade left distance="40%" duration="2000">
					<div className="text-lg text-slate-400 md:pr-5">
						<p className="">
							Self-motivated full-stack developer with a
							background in direct sales marketing to build
							rapports and to generate outstanding event sales.
							Received the certificate in{" "}
							<span className="text-orange-200 hover:underline hover:cursor-pointer">
								<a href="download:">
									Full Stack Flex Web Development
								</a>
							</span>{" "}
							from Georgia Tech’s coding bootcamp. Specializes in
							designing full-stack websites with JavaScript in
							mind of mobile-first design. Effective in debugging
							errors and designing for mobile-responsiveness.
							Known among peers for being inquisitive,
							mission-oriented, communicative, and always eager to
							learn.
						</p>
						<br />
						<p className="mb-8">
							Currently learning Java, Python, and C+ from the
							continuation course of Georgia Tech's coding
							bootcamp.
						</p>
					</div>
				</Fade>
				<Fade right distance="40%" duration="2000">
					<img
						className="rounded-xl object-cover w-full md:w-1/3"
						src={christy_le}
						alt="CHRISTY LE"
					/>
				</Fade>
			</article>
		</section>
	);
}

export default About;
