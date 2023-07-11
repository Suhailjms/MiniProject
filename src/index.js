// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';// Make sure the component file name and import path match
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();