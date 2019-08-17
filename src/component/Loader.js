import React from "react";
import "../assets/css/loader.scss";

const Loader = () => (
	<div className="loader">
		envoi en cours...
		<div className="container">
			<div className="loading" />
		</div>
	</div>
);

export default Loader;
