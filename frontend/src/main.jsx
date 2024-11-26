import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './Context/StoreContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
     <StoreContextProvider>
     <App />
     </StoreContextProvider>
    
    </BrowserRouter>
  </React.StrictMode>
);
