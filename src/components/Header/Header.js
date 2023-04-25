import React from "react";
import Reveal from "react-reveal/Reveal";
import RubberBand from "react-reveal/RubberBand";

function Header() {
	return (
		<section id="header-section" className="relative bg-hero bg-fixed bg-cover object-cover bg-center w-full h-screen">
			<Reveal cascade>
				<article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mb-20 p-8 pb-12 max-w-4xl rounded-lg w-full">
					<h1 className="text-lg font-bold text-left md:text-2xl drop-shadow font-fira-mono">
						Good morning, good afternoon, or good evening!
					</h1>
					<RubberBand delay={1000}>
						<h1 className="text-lg font-bold font-fira-mono text-left md:text-3xl mt-2.5 drop-shadow">
							I'm{" "}
							<span
								id="name"
								className="text-4xl lg:text-6xl mb-1 drop-shadow text-transparent bg-clip-text bg-gradient-to-t from-rose-400 to-indigo-600"
							>
								CHRISTY LE.
							</span>
						</h1>
					</RubberBand>
					<h3 className="text-lg font-bold font-fira-mono text-left md:text-2xl mt-2.5 drop-shadow">
						Full-Stack Web Developer in Atlanta, Georgia.
					</h3>
					<h3 className="text-lg text-left md:text-xl text-neutral-700 mt-8 drop-shadow mb-14">
						Recently, I just finished developing{" "}
						<span className="text-rose-600 font-semibold hover:underline">
							<a href="https://gocozia.com">Cozia</a>
						</span>
						, a pseudo-ecommerce website, and I'm now pursuing to
						get an AWS certificate and while learning Java, Go, Vue,
						and more! Drop by my inbox if you have any questions for
						me, or if you want to chat!
					</h3>
					<a
						href="mailto: christylex3@gmail.com"
						className="bg-transparent bg-gradient-to-r hover:from-white hover:to-rose-400 hover:text-black border border-rose-600 hover:border-transparent rounded-xl p-3 text-rose-600 text-md md:text-xl hover:animate-pulse font-bold px-10"
					>
						GET IN TOUCH
					</a>
				</article>
			</Reveal>
			{/* {props.children} */}
		</section>
	);
}

export default Header;
