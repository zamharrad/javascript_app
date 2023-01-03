import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// store dependencies
import { Provider } from 'react-redux';
import store from './redux/store';
// font awesome icon

// Bootstrap 

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// import "../node_modules/font"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
        <Provider store={store}>
          <App></App>
          </Provider>                                  
      </BrowserRouter>
    
  </React.Fragment>
);

reportWebVitals();
