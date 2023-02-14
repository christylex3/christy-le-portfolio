import React from "react";
import gitHub from "../assets/contact/icons8-github-filled.svg";
import { removeHyphensAndCapitalize } from "../utils/helpers";

function Project({project}) {
    const { name, description, link, repo } = project;

    return (
		<section className="project" key={name}>
			<img
				id="project-img"
				src={require(`../assets/projects/${name}.jpg`)}
				alt={removeHyphensAndCapitalize(name)}
			/>
			<article id="project-info">
				<h3>
					<a href={link}>{removeHyphensAndCapitalize(name)}</a>
				</h3>
				<p>{description}</p>
				<a href={repo} target="_blank" rel="noreferrer">
					<img className="mt-2" src={gitHub} alt={repo} />
				</a>
			</article>
		</section>
	);
}

export default Project;