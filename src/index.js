import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { StyledIndex } from './index.styles'
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><StyledIndex />
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode></>
);
