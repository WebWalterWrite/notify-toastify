import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { toastSuccess, toastError } from '../styles/toastify/toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../styles/icons/icons.fontawesome';


/**
 * @description - Créer un input selon les valeurs passées en params
 * @param {string} initialState
 * @param {string} type 
 * @param {string} placeholder 
 * @param {string} name 
 */
const useInput = (initialState, type, placeholder, name) => {

    const [value, setValue] = useState(initialState);

    return {
        onChange: e => setValue(e.target.value),
        type,
        placeholder,
        name,
        value
    }
};

/**
 * @description - retourne le type de notification à afficher
 * @param {boolean} status 
 */
const isDisplayToast = status => status ? toastSuccess() : toastError()


/**
 * @description - Composant formulaire
 */
const Form = () => {

    const { user, envelope, secret } = icons;

    const sendForm = e => {
        e.preventDefault();

        const form = new FormData(e.target);

        const data = {
            firstname: form.get('firstname'),
            email: form.get('email'),
            password: form.get('password')
        };

        data && isDisplayToast(true)

    }

    // init input
    const name = useInput("", "text", "prénom", "firstname");
    const email = useInput("", "email", "email", "mail");
    const password = useInput("", "password", "mot de passe", "password");

    return (

        <form onSubmit={sendForm}>
            {/* champ prénom */}
            <div className="input-container">
                <FontAwesomeIcon icon={user} size="2x" />
                <input {...name} />
            </div>

            {/* champ email */}
            <div className="input-container">
                <FontAwesomeIcon icon={envelope} size="2x" />
                <input {...email} />
            </div>

            {/* champ password */}
            <div className="input-container">
                <FontAwesomeIcon icon={secret} size="2x" />
                <input {...password} />
            </div>

            <div>
                <button>
                    <span role="img" aria-label="rocket">🚀 go 🚀</span></button>
            </div>
            < ToastContainer />
        </form>
    )
};

export default Form;