import React from 'react';
import { cssTransition, toast } from 'react-toastify';
import './toastify.scss';

// custom enter and exit transition
const FadeOut = cssTransition({
  enter: 'slideIn',
  exit: 'slideOut',
  duration: 750,
});


/**
 * @description - retourne une notification de success
 */
export const toastSuccess = () => {

    const Success = () => <div><span role="img" aria-label="party">🎉🎉🎉 </span>Ton inscription est validée</div>;
  
    return toast(<Success/>,{
    position:toast.POSITION.TOP_RIGHT,
    transition:FadeOut,
    closeButton: true,
    hideProgressBar: true,
    className:'toastify-success',
    });
  };
  

  /**
   * @description - Retourne une error notification
   */
  export const toastError = () => {
    const Error = () => <div><span role="img" aria-label="warning">🤭 </span>Oups...le formulaire est vide</div>
  
    return toast(<Error/>,{
      position: toast.POSITION.BOTTOM_RIGHT,
      transition: FadeOut,
      closeButton: true,
      type: toast.TYPE.ERROR,
      autoClose: 3000
    })
  }