import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import App from './Parte1_Basics/App';
//import App from './Parte2_Styling/App';
//import App from './Parte3_Practice_seccion_8/src/App';
//import App from './Parte4_Effects/src/App';
//import App from './Parte5_Food_order_app/src/App';
//import App from './Parte6_ClassComponents/src/App';
//import App from './Parte7_Http/src/App';
//import App from './Parte8_CustomHooks/src/App';
//import App from './Parte9_Forms/src/App';
//import App from './Parte10_FoorOrderHttp/src/App';
//import App from './Parte11_Redux/src/App';
//import App from './Parte12_ReduxAdvanced/src/App';

/* Parte4_Effects 
import { AuthContextProvider } from './Parte4_Effects/store/auth-context';
*/

/* Parte11_Redux 
import { Provider } from 'react-redux';
import store from './Parte11_Redux/src/store';
*/
/* Parte12_ReduxAdvanced 
import { Provider } from 'react-redux';
import store from './Parte12_ReduxAdvanced/src/store';
*/

//import App from './Parte13_UnitTests/src/App';

/* Parte14_CustomHookStore */
import { BrowserRouter } from 'react-router-dom';
import App from './Parte14_CustomHookStore/src/App';

import configureProductsStore from './Parte14_CustomHookStore/src/hooks-store/products-store';
import configureCounterStore from './Parte14_CustomHookStore/src/hooks-store/counter-store';

configureProductsStore();
configureCounterStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*Used in Parte4
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    */}
    {/* Used in Parte11 y Parte12
      <Provider store={store}>
        <App />
      </Provider>
    */}
    {/* Used in Parte14
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    */}
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
