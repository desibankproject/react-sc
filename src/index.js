import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Products from './components/products/Products';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AuthUser from './components/auth/Auth';

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <Router>
      <div>
        <Header/> 
        <div className="container">
        <div className="row">
        <div className="left-side">
          <marquee>Product Bazzar welcomes!! </marquee>
        </div>
        <div className="right-side">
        <hr/> 
       
          <Route exact path='/' component={AuthUser} />
          <Route exact path='/product' component={Products} />
        
        </div>
        </div>
        </div>
        <Footer/> 
       </div> 
        </Router>,
    document.getElementById('root')
  );
registerServiceWorker();
