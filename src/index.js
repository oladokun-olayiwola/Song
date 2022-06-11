import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import  reducers from './reducers'
import App from "./components/App";



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);