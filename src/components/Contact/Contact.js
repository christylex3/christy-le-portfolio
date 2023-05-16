import React from "react";

function Contact() {
	return (
		<section
			id="contact-section"
			className="mx-auto w-full relative px-7 md:px-0"
		>
			<div className="flex flex-col mx-auto justify-center items-center min-h-screen max-w-4xl  js-show-on-scroll">
				<h2 className="section-head text-neutral-700 text-4xl py-8 mt-20 text-center md:text-left font-bold drop-shadow">
					❀ CONTACT ❀
				</h2>
				<p className="text-lg md:text-xl md:pr-5 mb-14">
					My inbox is always open, so don't be shy and let's connect!
				</p>
				<a
					href="mailto: christylex3@gmail.com"
					className="bg-transparent bg-gradient-to-r hover:from-indigo-400 hover:to-rose-400 hover:text-white border hover:border-0 border-neutral-700 hover:border-transparent rounded-xl p-3 text-neutral-700 text-md md:text-xl font-bold px-10 drop-shadow transition ease-in-out duration-300"
				>
					SAY HELLO
				</a>
			</div>
		</section>
	);
}

export default Contact;
