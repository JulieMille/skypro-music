import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { StyledIndex } from './index.styles'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer);
root.render(
  <><StyledIndex />
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode></>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.scss';
// import App from './App';

// import { BrowserRouter } from "react-router-dom";



// const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(
//   <React.StrictMode>
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// </React.StrictMode>
// );