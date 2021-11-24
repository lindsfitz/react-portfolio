import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js"; 
import "uikit/dist/js/uikit-icons.min.js";
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
