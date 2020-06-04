import React, { Component } from 'react';


export default class NavBar extends Component {
  render () {
    return (
      <header class="page-head">
        <div class="rd-navbar-wrap"  >
          <nav data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-stick-up-clone="false" data-md-stick-up-offset="53px" data-lg-stick-up-offset="53px" data-md-stick-up="true" data-lg-stick-up="true" class="rd-navbar rd-navbar-corporate-dark rd-navbar-original rd-navbar-fixed" >
            <div class="rd-navbar-inner">
              <div class="rd-navbar-aside">
                <div data-custom-toggle=".rd-navbar-aside" data-custom-toggle-disable-on-blur="true" class="rd-navbar-aside-toggle"><span></span></div>
                <div class="rd-navbar-aside-content context-dark">
                  <ul class="rd-navbar-aside-group list-units">
                    <li>
                      <div class="unit unit-horizontal unit-spacing-xs">
                        <div class="unit-left"><span class="icon icon-xxs-small icon-primary material-icons-place icon-shift-1 offset-top-2"></span></div>
                        <div class="unit-body"><a href="maps.php" class="link-white-v2 reveal-inline font-accent">7121 W Bell Rd, Suite 210, Glendale, AZ 85308</a></div>
                      </div>
                    </li>
                    <li>
                      <div class="unit unit-horizontal unit-spacing-xs">
                        <div class="unit-left"><span class="icon icon-xxs icon-primary fa-clock-o offset-top-2"></span></div>
                        <div class="unit-body">
                          <p class="text-white font-accent">Mon – Fri: 7:00am–5:00pm </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="unit unit-horizontal unit-spacing-xs">
                        <div class="unit-left"><span class="icon icon-xxs icon-primary material-icons-phone icon-shift-2"></span></div>
                        <div class="unit-body"><a href="tel:+16232153662" class="link-white-v2 font-accent">(623) 215–3662</a></div>
                      </div>
                    </li>
                  </ul>
                </div>
              
              </div>
              <div class="rd-navbar-group rd-navbar-search-wrap">
                <div class="rd-navbar-panel">
                  <button data-custom-toggle=".rd-navbar-nav-wrap" data-custom-toggle-disable-on-blur="true" class="rd-navbar-toggle active"><span></span></button>
                  <a href="index.php" class="rd-navbar-brand brand">
                    <img class="top-logo" src="images/logo-315x100.png" alt="Cambium" data-pagespeed-url-hash="1850591460"  />

                    </a>
                </div>
                <div class="rd-navbar-nav-wrap active">
                  <div class="rd-navbar-nav-inner">
                
                    <ul class="rd-navbar-nav">
                      <li> <a href="index.php">Home</a></li>
                      <li> <a href="about-us.php">About Us</a></li>
                      <li class="active"> <a href="services.php">Services</a></li>

                       <li> <a href="contact-us.php">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}
