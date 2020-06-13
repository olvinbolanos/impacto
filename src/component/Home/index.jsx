import React, { Component } from 'react';
import {
  Color,
  Wrapper
} from './style'


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Home Page.</h1>
        <div className="swiper-slide-caption">
          <div className="shell">
            <div className="range range-sm-center range-lg-left text-lg-left">
              <Wrapper className="cell-sm-11 cell-md-10 cell-lg-6">
                <h2 
                  data-caption-animate="fadeInUp" 
                  data-caption-delay="0s" 
                  className="slider-header fadeInUp animated">
                    Welcome to Impacto Business Consultation
                </h2>
                <div 
                  data-caption-animate="fadeInUp" 
                  data-caption-delay="350s" 
                  className="offset-top-5 slider-text fadeInUp animated">
                    <Color 
                      className="text-big-22 text-white font-accent text-light">
                      Expert Bookkeeping, Payroll, and Strategic Planning services
                    </Color>
                </div>
                <div 
                  data-caption-animate="fadeInUp" 
                  data-caption-delay="450s" 
                  className="offset-top-30 offset-sm-top-45 fadeInUp animated">
                    <a 
                    name="Contact Us Page" 
                    href="contact-us.php" 
                    className="btn btn-icon btn-icon-right btn-cello">
                      <span className="icon icon-xs-smaller fa-angle-right">
                      </span>Contact Us
                    </a>
                </div>
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

