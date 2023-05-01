import React from "react";
import Fade from "react-reveal/Fade";

function Contact() {
	return (
		<Fade>
			<section
				id="contact-section"
				className="flex flex-col justify-center items-center mx-auto w-full min-h-screen"
			>
				<h2 className="section-head text-4xl py-8 mt-20 text-center md:text-left font-bold drop-shadow">
					❀ LET'S CONNECT ❀
				</h2>
				<p className="text-lg md:text-xl md:pr-5">Why don't we chat?</p>
			</section>
		</Fade>
	);
}

export default Contact;
