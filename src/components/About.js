import React from "react";

// My profile picture
import christy_le from "../assets/profile/christy-le.jpg";

function About() {
	return (
		<section className="flex flex-wrap sm:flex-col md:flex-row justify-center content-center space-between ml-5 mr-5 profile">
			<article className="flex flex-col m-5" id="profile-text">
				<h2 className="page-title pt-2 pb-3">About Me</h2>
				<p>
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
				<p>
					Currently learning Java, Python, and C+ from the
					continuation course of Georgia Tech's coding bootcamp.
				</p>
			</article>
			<img
				className="m-5"
				id="profile-img"
				src={christy_le}
				alt="CHRISTY LE"
			/>

			{/* <h2 className="flex justify-center mt-40">Passion</h2>
			<section className="flex flex-wrap sm:flex-col md:flex-row justify-center space-between ml-5 mr-5 skills"></section> */}
		</section>
	);
}

export default About;
