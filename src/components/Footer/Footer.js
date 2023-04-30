import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillPhoneFill, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
// import { BsGithub } from "react-icons";

function Footer() {
	return (
		<footer className="bg-transparent flex flex-col flex-wrap-reverse items-center justify-center p-3 relative">
			<div className="flex items-center gap-8 md:gap-12 p-3 m-1 z-50">
				{/* GitHub */}
				<a
					className="text-white bg-neutral-700 hover:bg-[#5C6BC0] rounded-full p-3 drop-shadow transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300"
					href="https://github.com/christylex3"
					target="_blank"
					rel="noreferrer"
				>
					<BsGithub className="w-6 h-6" />
				</a>
				{/* LinkedIn */}
				<a
					className="text-white bg-neutral-700 hover:bg-[#007EBB] rounded-full p-3 drop-shadow transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300"
					href="https://www.linkedin.com/in/christy-le-316960209/"
					target="_blank"
					rel="noreferrer"
				>
					<FaLinkedinIn className="w-6 h-6" />
				</a>
				{/* Phone */}
				<a
					className="text-white bg-neutral-700 hover:bg-[#6AAF50] rounded-full p-3 drop-shadow transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300"
					href="tel:770-843-6811"
				>
					<BsFillPhoneFill className="w-6 h-6" />
				</a>
				{/* Email */}
				<a
					className="text-white bg-neutral-700 hover:bg-[#F44336] rounded-full p-3 drop-shadow transition ease-in-out hover:translate-y-1 hover:scale-110 duration-300"
					href="mailto: christylex3@gmail.com"
				>
					<MdEmail className="w-6 h-6" />
				</a>
			</div>
			<p className="flex text-black text-lg md:text-xl font-narrow pt-2 md:p-0 text-xs font-firamono">
				© Christy Le 2023
			</p>
			{/* </section> */}
		</footer>
	);
}

export default Footer;
