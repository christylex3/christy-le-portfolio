import React from "react";

function Header() {
	return (
		<section className="relative bg-fixed bg-flowers bg-cover object-cover w-full h-screen">
			<article className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white drop-shadow-2xl pb-20 bg-black-500/75 p-8 w-full max-w-4xl">
				<h1 className="text-lg text-left md:text-2xl md:text-right ">Good morning, good afternoon, or good evening!</h1>
				<h1 className="text-lg md:text-3xl md:text-right mt-2.5">I'm <span className="text-4xl lg:text-6xl font-bold mb-1 drop-shadow-lg text-[#D49D3E]">Christy Le.</span></h1>
				{/* <h2 className="text-4xl lg:text-5xl font-bold mb-1 drop-shadow-lg text-left">Christy Le</h2> */}
				<h3 className="text-lg text-left md:text-2xl md:text-right mt-2.5">As a Full-Stack Web Developer, I develop websites.</h3>
				<h3 className="text-lg text-left md:text-xl md:text-right mt-8 text-neutral-400 mb-14">Recently, I just finished developing <span className="text-[#F9E6BB]"><a href="https://gocozia.com">Cozia</a></span>, a pseudo-ecommerce website, and I'm now pursuing to get an AWS certificate and while learning Java, Go, Vue, and more! Drop by my inbox if you have any questions for me, or if you want to chat!</h3>
				<a href="mailto: christylex3@gmail.com" className="bg-transparent bg-gradient-to-r hover:from-white hover:to-[#D49D3E] hover:text-black border border-[#D49D3E] hover:border-transparent rounded-xl p-3 text-[#D49D3E] text-md md:text-xl font-bold px-10">Get in touch</a>
			</article>
			{/* {props.children} */}
		</section>
	);
}

export default Header;
