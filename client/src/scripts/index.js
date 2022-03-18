import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.css';
import App from '../scripts/App';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);