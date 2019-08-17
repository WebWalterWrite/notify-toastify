import React, { useState } from "react";
import { useInput, isDisplayToast } from "../utils/functions/utils.functions";
import { ToastContainer } from "react-toastify";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../assets/icons/icons.fontawesome";
import "../assets/css/Form.scss";

let countSubmit = 0;

/**
 * @description - Composant formulaire
 */
const Form = () => {

	const { user, envelope, secret } = icons; // Fontawesome icons

	const [button, setButton] = useState({
		content: "valider",
		status: false,
		disabled: false
	});

	// init input
	const name = useInput("", "text", "ex: jhon snow", "firstname");
	const email = useInput("", "email", "ex: jsnow@winterfell.got", "mail");
	const password = useInput(
		"",
		"password",
		"ex: Kingofthenight66!+",
		"password"
	);

	/**
	 * @description - Récupére les données du formulaire
	 */
	const getData = e => {
		e.preventDefault();

		const form = new FormData(e.target);

		const data = {
			// retrieve user data form
			firstname: form.get("firstname"),
			email: form.get("mail"),
			password: form.get("password")
		};
		checkData(data);
	};

	/**
	 * @description - Vérifie les données du formulaire
	 */
	const checkData = ({firstname, email, password}) => {
		countSubmit++;
	
		if (firstname && email && password) return sendForm(firstname, email);
		if (countSubmit < 5) return isDisplayToast(false, countSubmit);
		if (countSubmit > 4) return setButton({ ...button, disabled: !button.disabled });
	};

	/**
	 * @description - Envoi les données du formulaire
	 */
	const sendForm = (firstname, email) => {
		return (
			setButton({
				...button,
				status: true
			}),
			setTimeout(() => {
				// simulates server response time
		
				isDisplayToast(true, firstname, email); // Display success notification
				setButton({
					content: "envoyé",
					status: false
				}); // update button state
			}, 4000)
		);
	};

	return (
		<form onSubmit={getData}>
			<ToastContainer />
			{/* champ prénom */}
			<div className="input-label">
				<label htmlFor="Email">Firstname</label>
			</div>
			<div className="input-container">
				<FontAwesomeIcon icon={user} size="lg" />
				<input {...name} />
			</div>

			{/* champ email */}
			<div className="input-label">
				<label htmlFor="Email">Email</label>
			</div>
			<div className="input-container">
				<FontAwesomeIcon icon={envelope} size="lg" />
				<input {...email} />
			</div>

			<div className="input-label">
				<label htmlFor="password">Password</label>
			</div>
			{/* champ password */}
			<div className="input-container">
				<FontAwesomeIcon icon={secret} size="lg" />
				<input {...password} />
			</div>
			<div>
				{!button.status ? (
					<button
						className={`submit-button ${
							button.disabled ? "submit-button-disabled" : ""
						}`}
						disabled={button.disabled}
					>
						<span role="img" aria-label="rocket">
							{button.content}
						</span>
					</button>
				) : (
					<Loader />
				)}
			</div>
			<span>
				Les erreurs de saisie ne sont pas contrôlés afin de simplifier la démo
			</span>
		</form>
	);
};

export default Form;
