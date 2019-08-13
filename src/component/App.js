import React, { Fragment } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import logo from '../logo.svg';

import '../styles/App.scss';
import '../styles/Form.scss';
import Form from './Form';


const App = () => {

  return (
    <Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Form />
      </main>
    </Fragment>
  );
}

export default App;
