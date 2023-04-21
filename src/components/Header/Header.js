import React from "react";
import Reveal from "react-reveal/Reveal";
import RubberBand from "react-reveal/RubberBand";

function Header() {
	return (
		<section className="relative bg-fixed bg-flowers bg-cover object-cover w-full min-h-screen">
			<Reveal cascade>
				<article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-slate-300 mb-20 p-8 pb-12 max-w-4xl bg-opacity-50 rounded-lg w-full backdrop-blur-sm">
					<h1 className="text-lg font-bold text-left md:text-2xl drop-shadow font-fira-mono">
						Good morning, good afternoon, or good evening!
					</h1>
					<RubberBand delay="1000">
						<h1 className="text-lg font-bold font-fira-mono text-left md:text-3xl mt-2.5">
							I'm{" "}
							<span
								id="name"
								className="text-4xl lg:text-6xl mb-1 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-b from-rose-500 to-rose-300"
							>
								CHRISTY LE.
							</span>
						</h1>
					</RubberBand>
					{/* <h2 className="text-4xl lg:text-5xl font-bold mb-1 drop-shadow-lg text-left">Christy Le</h2> */}
					<h3 className="text-lg font-bold text-slate-200 font-fira-mono text-left md:text-2xl mt-2.5 drop-shadow">
						Full-Stack Web Developer in Atlanta, Georgia.
					</h3>
					<h3 className="text-lg text-left md:text-xl mt-8 manatee drop-shadow mb-14">
						Recently, I just finished developing{" "}
						<span className="text-orange-300 font-semibold hover:underline">
							<a href="https://gocozia.com">Cozia</a>
						</span>
						, a pseudo-ecommerce website, and I'm now pursuing to
						get an AWS certificate and while learning Java, Go, Vue,
						and more! Drop by my inbox if you have any questions for
						me, or if you want to chat!
					</h3>
					<a
						href="mailto: christylex3@gmail.com"
						className="bg-transparent bg-gradient-to-r hover:from-white hover:to-orange-300 hover:text-black border border-orange-400 hover:border-transparent rounded-xl p-3 text-orange-300 text-md md:text-xl font-bold px-10 hover:animate-pulse"
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
