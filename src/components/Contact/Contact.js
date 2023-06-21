import React from "react";

function Contact() {
	return (
		<section
			id="contact-section"
			className="mx-auto w-full relative px-7 md:px-0"
		>
			<div className="flex flex-col mx-auto justify-center items-center min-h-screen max-w-4xl js-show-on-scroll">
				<h2 className="section-head text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-white text-4xl py-8 mt-20 text-center md:text-left font-bold drop-shadow">
					❀ CONTACT ❀
				</h2>
				<p className="timberworld font-medium text-lg text-center md:text-xl md:pr-5 mb-14 max-w-2xl">
					Have questions, or want to work together? Let's connect then!
					<br />Even if you just want to chat, send me a message, and I will do my best to get back to you!
				</p>
				<a
					href="mailto: christylex3@gmail.com"
					className="bg-transparent bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white border border-pink-400 hover:border-[#172247] rounded-xl p-3 text-pink-400 text-md md:text-xl font-bold px-10 drop-shadow transition ease-in-out duration-300"
				>
					SAY HELLO
				</a>
			</div>
		</section>
	);
}

export default Contact;
