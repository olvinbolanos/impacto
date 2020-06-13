import React, { Component } from 'react';

class NavBarFinder extends Component {
  render() {
    return (
      <div className="rd-navbar-aside-content context-dark">
        <ul className="rd-navbar-aside-group list-units">
          <li>
            <div className="unit unit-horizontal unit-spacing-xs">
            <div className="unit-left">
              <span className="icon icon-xxs-small icon-primary material-icons-place icon-shift-1 offset-top-2"></span>
            </div>
            <div className="unit-body">
              <a href="maps.php" 
                className="link-white-v2 reveal-inline font-accent">
                  7121 W Bell Rd, Suite 210, Glendale, AZ 85308
              </a>
            </div>
            </div>
          </li>
      
          <li>
            <div className="unit unit-horizontal unit-spacing-xs">
            <div className="unit-left">
              <span className="icon icon-xxs icon-primary fa-clock-o offset-top-2">
              </span>
            </div>
            <div className="unit-body">
              <p className="text-white font-accent">
                Mon – Fri: 7:00am–5:00pm 
              </p>
            </div>
            </div>
          </li>
          
          <li>
              <div className="unit unit-horizontal unit-spacing-xs">
              <div className="unit-left">
                <span className="icon icon-xxs icon-primary material-icons-phone icon-shift-2">
                </span>
              </div>
              <div className="unit-body">
                <a href="tel:+999999999" 
                  className="link-white-v2 font-accent">(623) 999–9999
                </a>
              </div>
            </div>
          </li>
        </ul>

        <div className="rd-navbar-aside-group">
        <ul className="list-inline list-inline-reset">
          <li>
            <a 
              name="Facebook Link" 
              href="https://www.facebook.com/{companyName}" 
              className="icon icon-round icon-san-juan-filled icon-xxs-smallest fa fa-facebook" 
              target="_blank" 
              rel="noopener noreferrer">
            </a>
          </li>
          <li>
            <a 
              name="Twitter Link" 
              href="https://twitter.com/{companyName}" 
              className="icon icon-round icon-san-juan-filled icon-xxs-smallest fa fa-twitter" 
              target="_blank" 
              rel="noopener noreferrer">
            </a>
          </li>
        </ul>
      </div>
    </div>
    )
  } 
}

export default NavBarFinder;