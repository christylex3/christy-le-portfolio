import React from "react";
import Reveal from "react-reveal/Reveal";
import RubberBand from "react-reveal/RubberBand";

function Header() {
	return (
		<section id="header-section" className="relative w-full h-screen">
			<Reveal cascade>
				<article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mb-20 p-8 pb-32 md:pb-40 max-w-4xl rounded-lg w-full">
					<h1 className="text-lg font-bold text-left md:text-2xl drop-shadow font-firamono">
						Good morning, good afternoon, or good evening!
					</h1>
					<RubberBand delay={1000}>
						<h1 className="text-lg font-bold font-firamono text-left md:text-3xl mt-2.5 drop-shadow">
							I'm{" "}
							<span
								id="name"
								className="text-4xl lg:text-6xl mb-1 drop-shadow md:drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-b from-rose-400 to-indigo-500"
							>
								CHRISTY LE.
							</span>
						</h1>
					</RubberBand>
					<h3 className="text-lg font-bold font-firamono text-left md:text-2xl mt-2.5 drop-shadow">
						Full-Stack Web Developer in Atlanta, Georgia, USA.
					</h3>
					<h3 className="text-lg text-left md:text-xl mt-8 drop-shadow mb-14">
						Recently, I just finished developing{" "}
						<span className="text-indigo-600 font-semibold animated-underline">
							<a href="https://gocozia.com">Cozia</a>
						</span>
						, a pseudo-ecommerce website, and I'm now pursuing to
						get an AWS certificate and while learning Java, Go, Vue,
						and more! Drop by my inbox if you have any questions for
						me, or if you want to chat!
					</h3>
					<a
						href="mailto: christylex3@gmail.com"
						className="bg-transparent bg-gradient-to-r hover:from-indigo-400 hover:to-rose-400 hover:text-white border hover:border-0 border-indigo-600 hover:border-transparent rounded-xl p-3 text-indigo-600 text-md md:text-xl font-bold px-10 drop-shadow transition ease-in-out duration-300 "
					>
						GET IN TOUCH
					</a>
				</article>
			</Reveal>
		</section>
	);
}

export default Header;
