import React from "react";

function Header(props) {
	return (
		<section className="relative top-0 left-0 bg-mountains fixed bg-center bg-cover object-cover w-full h-screen">
			<article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black drop-shadow pb-20">
				<h1 className="text-4xl font-bold mb-1">Christy Le</h1>
				<p className="italic">Full-Stack Web Developer</p>
				<button className="bg-gradient-to-r from-black to-blue-400 hover:from-white hover:to-yellow-500 rounded-full p-3 hover:text-black text-white mt-5 text-xl font-bold w-[250px]">
					Get in touch
				</button>
			</article>
			{/* {props.children} */}
		</section>
	);
}

export default Header;
