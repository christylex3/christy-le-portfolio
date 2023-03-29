import React from "react";
import gitHub from "../../assets/contact/icons8-github-filled.svg";
import { removeHyphensAndCapitalize } from "../../utils/helpers";

function Project({project}) {
    const { name, description, link, repo } = project;

    return (
		<section className="project relative w-full
		max-w-[500px] m-3" key={name}>
			<img
				id="project-img relative w-full h-full object-cover"
				src={require(`../../assets/projects/${name}.jpg`)}
				alt={removeHyphensAndCapitalize(name)}
			/>
			<article className="project-info absolute flex flex-col items-center justify-center opacity-0 top-0 bottom-0 left-0 right-0 p-5 z-5 transition duration-1000 ease-in-out hover:opacity-95 hover:bg-white hover:border-8 hover:border-stone-800 text-stone-800 text-xl">
				<h3 className="font-bold text-3xl hover:text-yellow-500">
					<a href={link} target="_blank" rel="noreferrer">{removeHyphensAndCapitalize(name)}</a>
				</h3>
				<p className="text-lg">{description}</p>
				<a href={repo} target="_blank" rel="noreferrer">
					<img className="mt-2 hover:bg-blue-200" src={gitHub} alt={repo} />
				</a>
			</article>
		</section>
	);
}

export default Project;