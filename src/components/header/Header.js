import React, { Component } from 'react'
import logo from '../../img/product.png';

import showproducts from '../../img/show-all.gif';

import Greeting from './Greeting'
/**
 * 
 */
 class Header extends Component {
  render() {
    return (
      <div>
           <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                   <h2 className="App-title">Welcome to React js application</h2>
                       
                   <img src={showproducts} className="header-img"  alt="Add Product" />
                   <Greeting/>
        </header>
      </div>
    )
  }
}
export default Header;