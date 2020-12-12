import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
//import reportWebVitals from './reportWebVitals';
import { configureStore } from './store';
import { login } from './action';
import { Auth0Provider } from "@auth0/auth0-react";
const store = configureStore();

ReactDOM.render(
 
<Provider store={store}>
<Auth0Provider
    domain="dev-w7tg4ueq.us.auth0.com"
    clientId="4sv24WYTZBCDPG2Avu53zrfN3F1jvqLs"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
    
  > 
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Auth0Provider>
  </Provider>,
 document.getElementById('root'));
 

console.log("Index.js state",store);
//when the page loads first time , we are calling dispatch for fetching data of championswimmer
store.dispatch(login("championswimmer"));

 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
