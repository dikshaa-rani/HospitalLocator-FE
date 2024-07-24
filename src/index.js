import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const GEOCODE_API_KEY="66a0d45b2d79d665765569nghc59deb";
//enter your key from geocode here
export const FUNCTION_APP_URL="https://fa-cloud-user-temp.azurewebsites.net/api/getHospitalsList?code=+";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
