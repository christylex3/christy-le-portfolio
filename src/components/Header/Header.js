import React from "react";

function Header() {
	return (
		<section
			id="header-section"
			className=" w-full relative px-7 w-full h-screen"
		>
			<article className="flex flex-col mx-auto justify-center items-left min-h-screen max-w-4xl">
				<h1 className="font-firamono text-lg font-bold text-left md:text-2xl drop-shadow js-show-on-scroll">
					Greetings!
				</h1>
				<h1 className="font-firamono font-bold text-left text-lg md:text-2xl mt-2.5 drop-shadow js-show-on-scroll">
					I'm{" "}
					<span
						id="name"
						className="font-macondo text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 px-1 text-5xl text-left lg:text-7xl mb-1 drop-shadow md:drop-shadow-lg"
					>
						CHRISTY LE.
					</span>
				</h1>
				<h3 className="font-firamono text-lg text-left md:text-2xl mt-2.5 drop-shadow js-show-on-scroll">
					Full-Stack Web Developer in Atlanta, Georgia, USA.
				</h3>
				<h3 className="timberworld text-lg md:font-medium text-left md:text-xl mt-8 drop-shadow mb-14 js-show-on-scroll">
					Recently, I just finished developing{" "}
					<span className="hot-pink font-bold animated-underline drop-shadow">
						<a href="https://gocozia.com">Cozia</a>
					</span>
					, a pseudo-ecommerce website, and I'm now pursuing to get an
					AWS certificate and while learning Java, Go, Vue, and more!
					Drop by my inbox if you have any questions for me, or if you
					want to chat!
				</h3>
				<a
					href="mailto: christylex3@gmail.com"
					className="flex bg-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white border border-pink-400 hover:border-[#172247] rounded-xl p-3 text-pink-400 text-md md:text-xl font-bold px-10 drop-shadow transition ease-in-out duration-300 mx-auto js-show-on-scroll"
				>
					GET IN TOUCH
				</a>
			</article>
		</section>
	);
}

export default Header;
