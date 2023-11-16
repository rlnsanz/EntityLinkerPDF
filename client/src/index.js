import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';    // Import the main CSS file for global styles
import App from './components/App'; // Import the main App component

const root = createRoot(document.getElementById('root'));
root.render(<App />);
