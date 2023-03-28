import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const { name, email, message } = formState;
	const [errorMsg, setErrorMsg] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!errorMsg) {
			console.log("Form submitted!", formState);
		}
	};

	const handleChange = (event) => {
		if (event.target.name === "email") {
			const isValid = validateEmail(event.target.value);
			!isValid ? setErrorMsg("Invalid email!") : setErrorMsg("");
		} else {
			!event.target.value.length
				? setErrorMsg(`Please fill in ${event.target.name}!`)
				: setErrorMsg("");
		}
		if (!errorMsg) {
			setFormState({
				...formState,
				[event.target.name]: event.target.value,
			});
		}
	};

	return (
		<section className="flex flex-col justify-items-center min-w-sm">
			<h2 className="flex justify-center pt-5">Contact Me!</h2>
			<form id="contact-form" className="m-5 flex flex-col">
				<div className="flex flex-col">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="name"
						defaultval={name}
						onBlur={handleChange}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="email">Email address:</label>
					<input
						type="email"
						name="email"
						defaultval={email}
						onBlur={handleChange}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="message">Message:</label>
					<textarea
						name="message"
						rows="5"
						defaultval={message}
						onBlur={handleChange}
					/>
				</div>
				{errorMsg && (
					<div>
						<p className="error-text">{errorMsg}</p>
					</div>
				)}
				<button className="submit bg-blue-500 text-white hover:bg-blue-700 font-bold rounded-full py-3 my-5 shadow">Submit</button>
			</form>
		</section>
	);
}

export default Contact;
