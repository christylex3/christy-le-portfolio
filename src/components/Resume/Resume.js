import React from "react";

function Resume() {
	return (
		<section className="mx-8 sm:my-8">
			<h2 className="flex flex-wrap justify-center my-3 text-3xl">
				Resume
			</h2>
			<article className="flex flex-col mx-5">
				<button className="bg-black hover:bg-white rounded-full p-3 text-white hover:text-black mt-5 text-xl font-bold w-[250px] drop-shadow">
					Resume
				</button>
				{/* <button className="bg-black hover:bg-white rounded-full p-3 text-white hover:text-black mt-5 text-xl font-bold w-[250px] drop-shadow">
					Certificate of Full Stack Flex Web Development
				</button> */}
				<a
					href="./"
					className="bg-black hover:bg-white rounded-full p-3 text-white hover:text-black mt-5 text-xl font-bold w-[250px] drop-shadow text-center"
					download="Christy Le's Resume"
				>
					Certificate of Full Stack Flex Web Development
				</a>
			</article>
		</section>
	);
}

export default Resume;
