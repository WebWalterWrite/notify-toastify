import React, {Fragment} from "react";
import { cssTransition, toast, Slide } from "react-toastify";
import { mailProvider } from "../../utils/functions/utils.functions";
import "react-toastify/dist/ReactToastify.css";
import "./toastify.scss";

// custom enter and exit transition
const FadeOut = cssTransition({
	enter: "slideIn",
	exit: "slideOut",
	duration: 750
});

/**
 * @description - retourne une notification de success
 */
export const toastSuccess = (user, mail) => {
	
	console.log(mail)
	const mailbox = mailProvider(mail); // Récupérer l'url du fournisseur mail.

	const Success = () => (
		<div>
			<h4>
				<span role="img" aria-label="party">
					🎉&nbsp; Hey {user}, ton inscription est enregistré.
				</span>
			</h4>
			<p>
				<span>Vérifie</span> ta{" "}
				{mailbox ? (
					<a target="_blank" rel="noopener noreferrer" href={mailbox}>
						boîte mail
					</a>
				) : (
					"mail box "
				)}
				<span> {mail}</span> et clique sur le lien pour{" "}
				<span>activer ton compte.</span>
			</p>
		</div>
	);

	return toast(<Success />, {
		position: toast.POSITION.TOP_RIGHT,
		transition: Slide,
		closeButton: true,
		autoClose: 6500,
		className: "toastify-success"
	});
};

/**
 * @description - Retourne une error notification
	* @param {string} count - Nombre de click sur le bouton valider du formulaire
 */
export const toastError = count => {

	const Error = () => {
		return (
				<Fragment>
				{count === 1 && <div><span role="img" aria-label="warning">🤭{" "}</span>Oups... Le formulaire est invalide</div>}
				{count === 2 && <div><span role="img" aria-label="Unamused">😒{" "}</span>Heuu... Le formulaire est toujours pas valide</div>}
				{count === 3 && <div><span role="img" aria-label="Monocle">🧐{" "}</span>Humm... Tu semble avoir besoin d'aide ?</div>}
				{count === 4 && <div><span role="img" aria-label="furious">😤{" "}</span>La validation du formulaire est désactivée</div>}
			</Fragment>
		);
	}
		;

	toast(<Error />, {
		position: toast.POSITION.BOTTOM_RIGHT,
		transition: FadeOut,
		closeButton: true,
		type: toast.TYPE.ERROR,
		autoClose: 3000,
	});
};
