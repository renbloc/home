import React from 'react';
import './css/App.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import CookieConsent from "react-cookie-consent";




const browserHistory = createBrowserHistory();


export default function App() {
  return (
    <React.Fragment>
      <Router history={browserHistory}>
        <Routes />
      </Router>
      <CookieConsent
        debug={true}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </React.Fragment>


  );
}
