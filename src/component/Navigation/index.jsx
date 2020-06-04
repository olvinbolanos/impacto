import React, { Component } from 'react';
import NavLink from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => {
  return (
    <div className="rd-navbar-group rd-navbar-search-wrap">
      <div className="rd-navbar-panel">
        <button data-custom-toggle=".rd-navbar-nav-wrap" 
          data-custom-toggle-disable-on-blur="true" 
          className="rd-navbar-toggle"><span></span>
        </button>
  
        <a href="index.php" 
          className="rd-navbar-brand brand">
        </a>
        </div>
  
        <div className="rd-navbar-nav-wrap">
          <div className="rd-navbar-nav-inner">
            <div className="rd-navbar-search">
              <button 
                data-rd-navbar-toggle=".rd-navbar-search, .rd-navbar-search-wrap" 
                className="rd-navbar-search-toggle">
              </button>
            </div>
            <ul className="rd-navbar-nav">
              <li className="active"> <a href="#">Home</a></li>
              <li> <a href="about-us.php">About Us</a></li>
              <li> <a href="services.php">Services</a></li>
              <li ><a href="blog.php">Blog</a></li> 
            </ul> 
          </div>
        </div>
      </div>
    ) 
  }  
  
  export default Navigation;