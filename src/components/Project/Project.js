import React from "react";
import { removeHyphensAndCapitalize } from "../../utils/helpers";
import { BsGithub } from "react-icons/bs";
import { FaAws } from "react-icons/fa";
import { SiHeroku } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

function Project({ project }) {
	const { name, description, stack, link, aws, heroku, repo, figma } = project;

	return (
		<section
			className="flex flex-wrap justify-center content-center justify-between mx-5 mb-8 relative drop-shadow min-h-fit js-show-on-scroll"
			key={name}
		>
			<a className="md:flex md:flex-start" href={link} target="_blank" rel="noreferrer">
				<img
					className="relative max-w-4xl w-full h-[470px] md:h-[500px] object-cover grayscale hover:grayscale-0 cursor-pointer"
					src={require(`../../assets/projects/${name}.jpg`)}
					alt={removeHyphensAndCapitalize(name)}
				/>
			</a>
			<article className="text-neutral-300 flex flex-col justify-center items-center absolute bg-neutral-900/95 w-full h-full p-5 md:flex">
				<a
					className="text-rose-300 font-extrabold drop-shadow hover:text-rose-400 text-2xl cursor-pointer max-w-lg m-4"
					href={link}
					target="_blank"
					rel="noreferrer"
				>
					{removeHyphensAndCapitalize(name)}
				</a>
				<p className="text-neutral-400 md:font-medium md:text-lg max-w-lg my-3">{description}</p>
				<p className="font-firamono text-neutral-400 max-w-lg my-3">
					{stack}
				</p>
				<div className="flex max-w-lg my-3">
					{/* {link ? (
						<a
							href={link}
							target="_blank"
							rel="noreferrer"
						>
							<BiLinkExternal className="w-9 h-9 hover:text-pink-400 m-3"/>
						</a>
					) : (
						""
					)} */}
					{aws ? (
						<a
							href={aws}
							target="_blank"
							rel="noreferrer"
						>
							<FaAws className="w-8 h-8 hover:text-rose-400 m-3" />
						</a>
					) : (
						""
					)}
					{heroku ? (
						<a
							href={heroku}
							target="_blank"
							rel="noreferrer"
						>
							<SiHeroku className="w-8 h-8 hover:text-rose-400 m-3" />
						</a>
					) : (
						""
					)}
					<a
						href={repo}
						target="_blank"
						rel="noreferrer"
					>
						<BsGithub className="w-8 h-8 hover:text-rose-400 m-3" />
					</a>
					{figma ? (
						<a
							href={figma}
							target="_blank"
							rel="noreferrer"
						>
							<FaFigma className="w-8 h-8 hover:text-rose-400 m-3" />
						</a>
					) : (
						""
					)}
				</div>
			</article>
		</section>
	);
}

export default Project;
