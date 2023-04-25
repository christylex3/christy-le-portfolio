import React from "react";
import Fade from "react-reveal/Fade";

// My profile picture
import christy_le from "../../assets/profile/christy-le.jpg";

function About() {
	return (
		<section className="flex flex-col max-w-4xl mx-auto px-7 md:px-0 min-h">
			<Fade top distance="40%" duration={2000}>
				<h2 className="section-head text-4xl py-8 mt-20 text-center md:text-left font-bold drop-shadow text-transparent bg-clip-text bg-gradient-to-b from-amber-500 to-slate-200">
					❀ ABOUT ME ❀
				</h2>
			</Fade>
			<article className="flex flex-col md:flex-row mb-20">
				<Fade left distance="40%" duration={2000}>
					<div className="text-lg md:text-xl md:pr-5 text-neutral-400">
						<p>
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
							mind of mobile-first design. Efficient in debugging
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
				<Fade right distance="40%" duration={2000}>
					<img
						className="rounded-lg object-cover w-full md:w-1/3 hover:cursor-pointer hover:sepia-0 sepia" 
						src={christy_le}
						alt="CHRISTY LE"
					/>
				</Fade>
			</article>
		</section>
	);
}

export default About;
