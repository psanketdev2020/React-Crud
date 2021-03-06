import React from 'react';
import ReactDOM from 'react-dom';
// import Test from './Test'
// import Productlist from "./Productlist";
// import Producdetails from './Productdetails';
import App from './App';
import './App.css';
import './product-app/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowseRouter } from 'react-router-dom';


// ReactDOM.render( <Productlist produtName="Red Rose"/>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

