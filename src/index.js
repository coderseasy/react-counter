import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*
StrictMode es una herramienta para destacar problemas potenciales en la aplicación.
Al igual que Fragment, StrictMode no renderiza nada en la interfaz de usuario.
Este modo también activa advertencias y comprobaciones adicionales para sus descendientes.
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
