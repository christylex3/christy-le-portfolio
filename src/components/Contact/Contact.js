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
		<section className="flex flex-col justify-center items-center w-full max-w-3xl">
			<h2 className="flex justify-center mt-8 mb-3 text-3xl">
				Contact Me!
			</h2>
			<form id="contact-form" className="flex flex-col w-[350px]">
				<div className="flex flex-col my-1">
					{/* <label htmlFor="name">Name:</label> */}
					<input
						className="rounded-lg px-3 py-1 text-slate-900 font-medium text-lg"
						type="text"
						name="name"
						placeholder="Name"
						defaultval={name}
						onBlur={handleChange}
					/>
				</div>
				<div className="flex flex-col my-1">
					{/* <label htmlFor="email">Email address:</label> */}
					<input
						className="rounded-lg px-3 py-1 text-slate-900 font-medium text-lg"
						placeholder="Email address"
						type="email"
						name="email"
						defaultval={email}
						onBlur={handleChange}
					/>
				</div>
				<div className="flex flex-col my-1">
					{/* <label htmlFor="message">Message:</label> */}
					<textarea
						className="rounded-lg px-3 py-1 text-slate-900 font-medium text-lg"
						placeholder="Message"
						name="message"
						rows="5"
						defaultval={message}
						onBlur={handleChange}
					/>
				</div>
				{errorMsg ? (
					<>
						<div>
							<p className="error-text text-red-500 text-lg font-medium">
								{errorMsg}
							</p>
						</div>
						<button className="bg-blue-500 text-white font-bold rounded-full py-3 my-5 shadow cursor-not-allowed opacity-50">
							Submit
						</button>
					</>
				) : (
					<button className="submit bg-blue-500 text-white hover:bg-blue-700 font-bold rounded-full py-3 my-5 shadow">
						Submit
					</button>
				)}
			</form>
		</section>
	);
}

export default Contact;
