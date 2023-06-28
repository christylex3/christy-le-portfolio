import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillPhoneFill, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
// import { BsGithub } from "react-icons";

function Footer() {
	return (
		<footer className="flex flex-col flex-wrap-reverse items-center justify-center px-7 pb-3 relative z-50">
			<div className="flex items-center gap-8 md:gap-12 p-3 m-1 z-50">
				{/* GitHub */}
				<a
					className="bg-neutral-700 hover:text-white hover:bg-[#2B3137] rounded-full p-2 drop-shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 hover:no-underline"
					href="https://github.com/christylex3"
					target="_blank"
					rel="noreferrer"
				>
					<BsGithub className="w-6 h-6" />
				</a>
				{/* LinkedIn */}
				<a
					className="bg-neutral-700 hover:text-white hover:bg-[#007EBB] rounded-full p-2 drop-shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
					href="https://www.linkedin.com/in/le-christy/"
					target="_blank"
					rel="noreferrer"
				>
					<FaLinkedinIn className="w-6 h-6" />
				</a>
				{/* Phone */}
				<a
					className="bg-neutral-700 hover:text-white hover:bg-[#6AAF50] rounded-full p-2 drop-shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
					href="tel:770-843-6811"
				>
					<BsFillPhoneFill className="w-6 h-6" />
				</a>
				{/* Email */}
				<a
					className="bg-neutral-700 hover:text-white hover:bg-[#F44336] rounded-full p-2 drop-shadow transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
					href="mailto: christylex3@gmail.com"
				>
					<MdEmail className="w-6 h-6" />
				</a>
			</div>
			<p className="text-neutral-700 flex text-xs md:text-xl font-narrow py-2 md:pb-1">
				© CHRISTY LE 2023
			</p>
		</footer>
	);
}

export default Footer;
