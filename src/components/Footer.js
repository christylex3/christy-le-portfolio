import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer id="contact-info" class="flex flex-row justify-evenly">
			<a href="mailto: christylex3@gmail.com">
				<img
					class="icon"
					src="../test-images/mail-pngrepo-com.png"
					alt="mail"
				/>
			</a>
			<a href="tel:770-843-6811">
				<img
					class="icon"
					src="../test-images/phone-pngrepo-com.png"
					alt="phone"
				/>
			</a>
			<a href="https://github.com/christylex3" target="_blank">
				<img
					class="icon"
					src="../test-images/github-pngrepo-com.png"
					alt="github"
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/christy-le-316960209/"
				target="_blank"
			>
				<img
					class="icon"
					src="../test-images/linkedin-linked-in-pngrepo-com.png"
					alt="linked in"
				/>
			</a>
		</footer>
	);
};

export default Footer;
