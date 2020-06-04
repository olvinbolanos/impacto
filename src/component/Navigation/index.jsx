import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../Home';

import * as ROUTES from '../../constants/routes';

const Navigation = () => {
  return (
    <div className="rd-navbar-group rd-navbar-search-wrap">
      <div className="rd-navbar-panel">
        <button data-custom-toggle=".rd-navbar-nav-wrap" 
          data-custom-toggle-disable-on-blur="true" 
          className="rd-navbar-toggle"><span></span>
        </button>
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
              <li className="active"> 
                <NavLink to={ROUTES.HOME}>Home</NavLink>
              </li>
              <li> 
                <NavLink to={ROUTES.REGISTER}>Register</NavLink> 
              </li>
              <li> 
                <NavLink to={ROUTES.SERVICES}>Services</NavLink>
              </li>
              <li> 
                <NavLink to={ROUTES.QUALIFICATIONS}>Qualifications</NavLink>
              </li> 
            </ul> 
          </div>
        </div>
      </div>
    ) 
  }  
  
  export default Navigation;