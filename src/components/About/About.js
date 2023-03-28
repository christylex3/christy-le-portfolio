import React from "react";

// My profile picture
import christy_le from "../../assets/profile/christy-le.jpg";

function About() {
	return (
		<section className="flex flex-wrap flex-col md:flex-row justify-center content-center mx-8 max-w-3xl">
			<article className="flex flex-col mx-5 sm:my-5">
				<h2 className="flex flex-wrap justify-center my-3 text-3xl">About Me</h2>
				<p className="text-lg">
					Self-motivated full-stack developer with a background in
					direct sales marketing to build rapports and to generate
					outstanding event sales. Received the certificate in Full
					Stack Flex Web Development from Georgia Tech’s coding
					bootcamp. Specializes in designing full-stack websites with
					JavaScript in mind of mobile-first design. Effective in
					debugging errors and designing for mobile-responsiveness.
					Known among peers for being inquisitive, mission-oriented,
					communicative, and always eager to learn.
				</p>
				<br />
				<p className="text-lg">
					Currently learning Java, Python, and C+ from the
					continuation course of Georgia Tech's coding bootcamp.
				</p>
			</article>
			<img
				className="mx-5 mb-10 px-3 rounded-full object-cover w-full md:w-3/4"
				src={christy_le}
				alt="CHRISTY LE"
			/>
		</section>
	);
}

export default About;
