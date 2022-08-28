import React from "react";
// import { Link } from "react-router-dom";
import gmail from "../images/icons8-gmail-logo.svg";
import phone from "../images/icons8-google-mobile.svg";
import gitHub from "../images/icons8-github.svg";
import linkedIn from "../images/icons8-linkedin-circled.svg";

const Footer = () => {
	return (
		<footer id="contact-info" class="flex flex-row justify-evenly">
			<a href="mailto: christylex3@gmail.com">
				{/* Credits: <a target="_blank" href="https://icons8.com/icon/37246/gmail-logo">Gmail Logo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
				<img class="icon" src={gmail} alt="Gmail Logo icon by Icons8" />
			</a>
			<a href="tel:770-843-6811">
				{/* Credits: <a target="_blank" href="https://icons8.com/icon/13663/google-mobile">Google Mobile</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
				<img class="icon" src={phone} alt="phone" />
			</a>
			<a
				href="https://github.com/christylex3"
				target="_blank"
				rel="noreferrer"
			>
				{/* Credits: <a target="_blank" href="https://icons8.com/icon/118553/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
				<img class="icon" src={gitHub} alt="GitHub icon by Icons8" />
			</a>
			<a
				href="https://www.linkedin.com/in/christy-le-316960209/"
				target="_blank"
				rel="noreferrer"
			>
				{/* Credits: <a target="_blank" href="https://icons8.com/icon/114445/linkedin-circled">LinkedIn Circled</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
				<img
					class="icon"
					src={linkedIn}
					alt="LinkedIn Circled icon by Icon8"
				/>
			</a>
		</footer>
	);
};

export default Footer;
