import React from "react";

function Header() {
	return (
		<section
			id="header-section"
			className="w-full relative px-7 md:px-0 w-full h-screen"
		>
			<article className="flex flex-col mx-auto justify-center items-left min-h-screen max-w-4xl">
				<h1 className="font-firamono text-neutral-700 text-lg font-bold text-left md:text-2xl drop-shadow js-show-on-scroll">
					Good morning, good afternoon, or good evening!
				</h1>
				<h1 className="font-firamono text-neutral-700 font-bold text-left text-lg md:text-2xl mt-2.5 drop-shadow js-show-on-scroll">
					I'm{" "}
					<span
						id="name"
						className="font-macondo text-5xl text-left lg:text-7xl mb-1 drop-shadow md:drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-b from-rose-400 to-indigo-500"
					>
						CHRISTY LE.
					</span>
				</h1>
				<h3 className="font-firamono text-neutral-700 text-lg font-bold text-left md:text-2xl mt-2.5 drop-shadow js-show-on-scroll">
					Full-Stack Web Developer in Atlanta, Georgia, USA.
				</h3>
				<h3 className="text-lg text-left md:text-xl mt-8 drop-shadow mb-14 js-show-on-scroll">
					Recently, I just finished developing{" "}
					<span className="text-neutral-700 font-semibold animated-underline">
						<a href="https://gocozia.com">Cozia</a>
					</span>
					, a pseudo-ecommerce website, and I'm now pursuing to get an
					AWS certificate and while learning Java, Go, Vue, and more!
					Drop by my inbox if you have any questions for me, or if you
					want to chat!
				</h3>
				<a
					href="mailto: christylex3@gmail.com"
					className=" flex bg-transparent bg-gradient-to-r hover:from-indigo-400 hover:to-rose-400 hover:text-white border hover:border-0 border-neutral-700 hover:border-transparent rounded-xl p-3 text-neutral-700 text-md md:text-xl font-bold px-10 drop-shadow transition ease-in-out duration-300 mx-auto js-show-on-scroll"
				>
					GET IN TOUCH
				</a>
			</article>
		</section>
	);
}

export default Header;
