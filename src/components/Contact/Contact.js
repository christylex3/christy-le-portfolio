import React from "react";

function Contact() {
	return (
		<section
			id="contact-section"
			className="mx-auto w-full relative px-7 md:px-0"
		>
			<div className="flex flex-col mx-auto justify-center items-center min-h-screen max-w-4xl js-show-on-scroll">
				<h2 className="section-head text-5xl py-8 mt-20 text-center md:text-left font-bold drop-shadow font-staatliches text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-neutral-500">
					CONTACT
				</h2>
				<p className="text-zinc-200 font-medium text-lg text-center md:text-xl md:pr-5 mb-14 max-w-2xl">
					Have questions, or want to work together? Let's connect then!
					<br />Even if you just want to chat, send me a message, and I will do my best to get back to you!
				</p>
				<a
					href="mailto: christylex3@gmail.com"
					className="flex bg-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-indigo-400 hover:text-white border border-neutral-600 hover:border-[#E68598] rounded-xl p-3 text-neutral-600 text-md md:text-xl font-bold px-10 drop-shadow transition ease-in-out duration-300 mx-auto js-show-on-scroll"
				>
					SAY HELLO
				</a>
			</div>
		</section>
	);
}

export default Contact;
