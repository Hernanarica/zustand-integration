import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/css/tailwindcss.css';
import { ReactRouterProvider } from './Providers';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ReactRouterProvider>
      <App />
    </ReactRouterProvider>
  // </React.StrictMode>
);
