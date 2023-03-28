import React from "react";
import mountains from "../../assets/cover/mountains-square.jpg";

function Header(props) {
	return (
		<section className="relative top-0 left-0 bg-mountains bg-center bg-cover object-cover w-full h-screen">
			<article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black drop-shadow">
				<h1 className="text-4xl font-bold mb-1">Christy Le</h1>
				<p className="italic">Full-Stack Web Developer</p>
				<button className="bg-gradient-to-r from-black to-cyan-600 hover:from-white hover:to-yellow-500 rounded-full p-3 hover:text-black text-white mt-5 text-2xl font-semibold">
					Get In Touch
				</button>
			</article>
			{props.children}
		</section>
	);
}

export default Header;
