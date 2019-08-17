import { useState } from "react";
import { toastSuccess, toastError } from "../../assets/toastify/toast";

/**
 * @description - Créer un input selon les valeurs passées en params
 * @param {string} initialState
 * @param {string} type
 * @param {string} placeholder
 * @param {string} name
 */
export const useInput = (initialState, type, placeholder, name) => {
	const [value, setValue] = useState(initialState);

	return {
		onChange: e => setValue(e.target.value),
		type,
		placeholder,
		name,
		value
	};
};

/**
 * @description - Retourne l'url du webmail selon le domaine de l'email fourni
 * @param {string} email - adresse email du formulaire
 */

export const mailProvider = email => {
	if (email.includes("@gmail.com")) return "https://www.google.com/gmail/"; // gmail

	if (email.includes("@yahoo.")) return "https://mail.yahoo.com/"; // yahoo

	let microsoft = ["@outlook.", "@hotmail.", "@msn.", "@live."];

	if (microsoft.some(domain => email.includes(domain)))
		// microsoft
		return "https://login.live.com/";

	// ... more email domains

	return null;
};

/**
 * @description - retourne le type de notification à afficher
 */
export const isDisplayToast = (status, ...args) => status ? toastSuccess(...args) : toastError(...args);
