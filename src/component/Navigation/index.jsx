import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

class Navigation extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      width: '60px',
      display: 'none',
      closed: 'none',
      index: 5,
      top: 0
    };
  }

  changeWidth = () => {
    this.setState({
      display: 'block',
    });
  }

  closeNav = () => {
    this.setState({
      display: 'none'
    });
  }

  render() {
    const { top, display, index } = this.state;
  return (
    <>
      <nav className="w3-sidebar w3-black w3-animate-left w3-xxlarge" style={{display: display, zIndex: index, top: top}} onClick={this.closeNav} id="mySidebar">
        <a href="javascript:void(0)" onclick={this.closeNav} className="w3-button w3-black w3-xxxlarge w3-display-topright" style={divStyleATag}>
          <i className="fa fa-remove"></i>
        </a>
        <div className="w3-bar-block w3-center">
          <NavLink to={ROUTES.HOME} className="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick={this.closeNav}>Home</NavLink>
          <NavLink to={ROUTES.REGISTER} className="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick={this.closeNav}>Portfolio</NavLink>
          <NavLink to={ROUTES.SERVICES} className="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick={this.closeNav}>About</NavLink>
          <NavLink to={ROUTES.QUALIFICATIONS} className="w3-bar-item w3-button w3-text-grey w3-hover-black" onclick={this.closeNav}>Contact</NavLink>
        </div>
      </nav>
      {/* Menu icon to open sidebar  */}
      <span className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black" style={divStyleNav1, {width: this.state.width}} onClick={this.changeWidth}><i className="fa fa-bars"></i></span>
    </>
    ) 
  }  
}
  
  export default Navigation;

  const divStyleNav1 = {
    display: "none",
    paddingTop: "150px",
    marginRight:"10px",
    zIndex:"2",
    overflow: 'none',
  }

  const divStyleATag = {
    padding: "0 5px",
    marginTop: "0px",
    zIndex: "3",
  }


  