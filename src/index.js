import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import ProductProvider from './Contaxt'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
ReactDOM.render(
  
  <ProductProvider>
  <Router>
  <App />
  </Router>
  </ProductProvider>
  ,
  document.getElementById('root')
);
