import React from "react";
import { HiDownload } from "react-icons/hi";
import { HiOutlineExternalLink } from "react-icons/hi";

function Resume() {
	return (
		<section id="resume-section" className="section-head bg-indigo pb-28">
			<div className="max-w-4xl mx-auto flex flex-col px-7">
				<h2 className="section-head text-4xl py-8 mt-20 text-center font-bold drop-shadow text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-white js-show-on-scroll">
					❀ RESUME ❀
				</h2>
				<p className="text-slate-400 md:font-medium text-lg md:text-xl mb-8 text-center js-show-on-scroll">
					Like my work?
					<br className="md:hidden" /> Check out my resume then.
				</p>
				<article className="flex flex-col items-center justify-center md:flex-row md:flex-wrap mx-5">
					{/* TODO: Add in my actual resume for download */}
					<a
						download={""}
						className="relative flex items-center bg-transparent bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white border border-pink-400 hover:border-[#172247] rounded-xl p-3 text-pink-400 text-md md:text-xl font-bold px-10 drop-shadow transition ease-in-out duration-300 mx-4 mb-8 pl-5 js-show-on-scroll"
					>
						DOWNLOAD
						<HiDownload className="absolute right-3.5" />
					</a>
					{/* TODO: Add in my google docs version of resume */}
					<a
						href="mailto: christylex3@gmail.com"
						className="flex items-center bg-transparent bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white border border-pink-400 hover:border-[#172247] rounded-xl p-3 text-pink-400 text-md md:text-xl font-bold px-10 drop-shadow transition ease-in-out duration-300 mx-4 mb-8 pl-5 js-show-on-scroll"
					>
						GOOGLE DOCS
						<HiOutlineExternalLink className="absolute right-3.5" />
					</a>
				</article>
			</div>
		</section>
	);
}

export default Resume;
