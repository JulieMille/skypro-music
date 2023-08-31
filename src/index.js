import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StyledIndex } from './index.styles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><StyledIndex />
  <React.StrictMode>
    <App />
  </React.StrictMode></>
);
