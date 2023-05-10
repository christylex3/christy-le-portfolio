import React from "react";

// My profile picture
import christy_le from "../../assets/profile/christy-le.jpg";

function About() {
	return (
		<section
			id="about-section"
			className="bg-neutral-800 flex flex-col px-7 md:px-0"
		>
			<div className="max-w-4xl mx-auto">
				<h2 className="section-head text-4xl py-8 mt-20 text-center md:text-left font-bold drop-shadow text-transparent bg-clip-text bg-gradient-to-b from-rose-500 to-white js-show-on-scroll">
					❀ ABOUT ME ❀
				</h2>
				{/* </Fade> */}
				<article className="flex flex-col md:flex-row mb-20">
					<div className="text-neutral-400 text-lg md:text-xl md:pr-5">
						<p className="js-show-on-scroll">
							Hello, it's Christy. I recently made a career change
							from{" "}
							<span className="text-[#FAB1BE] font-semibold animated-underline">
								<a
									className="animated-underline"
									target="_blank"
									href="https://www.modexposure.com/"
									rel="noreferrer"
								>
									direct sales marketing
								</a>
							</span>{" "}
							to become a full-stack developer. I received the
							certificate of{" "}
							<span className="text-[#FAB1BE] font-semibold animated-underline">
								<a
									className="animated-underline"
									target="_blank"
									href="download:"
									rel="noreferrer"
								>
									Full Stack Flex Web Development
								</a>
							</span>{" "}
							from Georgia Tech’s coding bootcamp. Specializes in
							designing full-stack websites with JavaScript in
							mind of mobile-first design. Efficient in debugging
							errors and designing for mobile-responsiveness.{" "}
							<span className="text-[#FAB1BE] font-semibold animated-underline">
								<a
									className="animated-underline"
									target="_blank"
									href="https://www.facebook.com/modexposure/photos/a.118722550442286/275320554782484/"
									rel="noreferrer"
								>
									Known among peers
								</a>
							</span>{" "}
							for being inquisitive, mission-oriented,
							collaborative, communicative, and always eager to
							learn.
						</p>
						<br />
						<p className="mb-8 js-show-on-scroll">
							Currently learning Java, Python, and C+ from the
							continuation course of Georgia Tech's coding
							bootcamp.
						</p>
					</div>
					<img
						className="rounded-lg object-cover w-full md:w-1/3 hover:cursor-pointer mix-blend-luminosity hover:mix-blend-normal drop-shadow js-show-on-scroll"
						src={christy_le}
						alt="CHRISTY LE"
					/>
				</article>
			</div>
		</section>
	);
}

export default About;
