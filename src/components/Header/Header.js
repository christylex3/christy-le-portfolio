import React from "react";

function Header() {
	return (
		<section
			id="header-section"
			className=" w-full relative px-7 w-full h-screen"
		>
			<article className="flex justify-center items-center mx-auto min-h-screen max-w-4xl">
				<div className="flex flex-col mb-20">
					<h1 className="font-staatliches md:font-normal text-2xl text-left md:text-4xl drop-shadow js-show-on-scroll">
						Greetings!
					</h1>
					<h1 className="font-staatliches md:font-normal text-left text-2xl md:text-4xl mt-2.5 drop-shadow js-show-on-scroll">
						I'm{" "}
						<span
							id="name"
							className="font-staatliches text-neutral-700 px-1 text-7xl text-left lg:text-9xl mb-1 drop-shadow md:drop-shadow-xl font-bold"
						>
							CHRISTY LE
						</span>
					</h1>
					<h3 className="font-staatliches text-2xl text-left md:text-4xl mt-2.5 drop-shadow js-show-on-scroll">
						Full-Stack Web Developer in Atlanta, Georgia, USA.
					</h3>
					<h3 className="text-neutral-100 text-lg md:font-medium text-left md:text-xl mt-8 drop-shadow mb-14 js-show-on-scroll">
						Recently, I just finished developing{" "}
						<span className="text-neutral-600 font-extrabold animated-underline drop-shadow">
							<a href="https://gocozia.com">Cozia</a>
						</span>
						, a pseudo-ecommerce website, and I'm now pursuing to
						get an AWS certificate and while learning Java, Go, Vue,
						and more! Drop by my inbox if you have any questions for
						me, or if you want to chat!
					</h3>

					<a
						href="mailto: christylex3@gmail.com"
						className="flex bg-transparent hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-500 hover:text-white border border-amber-300 hover:border-[#E68598] rounded-xl p-3 text-amber-400 text-md md:text-xl font-bold px-10 drop-shadow transition ease-in-out duration-300 mx-auto js-show-on-scroll"
					>
						GET IN TOUCH
					</a>
				</div>
				{/* <div className="flex flex-col justify-center items-center p-5 mb-20">
					<h1 className="font-staatliches uppercase text-7xl md:text-9xl drop-shadow-2xl">Christy Le</h1>
					<h2 className="font-staatliches uppercase text-3xl md:text-4xl drop-shadow-xl">Full Stack Developer</h2>
					<br />
					<p className="font-staatliches text-2xl">"I design, I code, I debug."</p>
				</div> */}
			</article>
		</section>
	);
}

export default Header;
