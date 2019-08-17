import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../assets/icons/icons.fontawesome";
import logo from "../logo.svg";
import ea from "../assets/ea-logo.png";
import "../assets/css/App.scss";
import Form from "./Form";

const App = () => {
	return (
		<Fragment>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div>
					<h1>notify-toastify by</h1>
					<img src={ea} alt="" width="75" />
				</div>
			</header>
			<main>
				<p>
					Un simple formulaire pour tester{" "}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://github.com/fkhadra/react-toastify"
					>
						react-toastify
					</a>
				</p>
				<p>
					Cette bibliothèque te permet d'ajouter facilement des notifications à
					ton application.
				</p>
				<p>
					Rempli le formulaire ci-dessous pour avoir un aperçu d'une success
					notification ou bien omettez un ou plusieurs champs afin d'être
					notifié d'une erreur
				</p>

				{/* lien vers repository github */}
				<div className="github-link">
					<p>
						Voir le code sur{" "}
						<a
							href="https://github.com/WebWalterWrite/notify-toastify"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github
						</a>
					</p>
					<FontAwesomeIcon icon={icons.github} size="2x" />
				</div>
				<section>
					{/* Formulaire */}
					<Form />
				</section>
			</main>
		</Fragment>
	);
};

export default App;
