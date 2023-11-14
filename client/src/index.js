import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';    // Import the main CSS file for global styles
import App from './components/App'; // Import the main App component

// React StrictMode is a tool for highlighting potential problems in an application.
// It does not render any visible UI, but activates additional checks and warnings for its descendants.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This is where your app attaches to the DOM
);

