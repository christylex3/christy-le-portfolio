import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const { name, email, message } = formState;
	const [errorMsg, setErrorMsg] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!errorMsg) {
			console.log("Form submitted!", formState);
		}
	};

	const handleChange = (e) => {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
		}
	};

	return (
		<section>
			<h2 className="flex justify-center pt-5">Contact Me!</h2>
		</section>
	);
}

export default Contact;
