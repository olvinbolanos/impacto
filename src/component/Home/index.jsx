import React, { Component } from 'react';
import {
  Color,
  Wrapper
} from './style'


class Home extends Component {
  render() {
    return (
      <div>
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
                  id="middleAlign" 
                  className="offset-top-30 offset-sm-top-45 fadeInUp animated">
                    <a 
                    name="Contact Us Page" 
                    href="contact-us.php" 
                    className="btn btn-icon btn-icon-right btn-cello">
                      <span className="icon icon-xs-smaller">
                      </span>Contact Us
                    </a>
                </div>
              </Wrapper>
            </div>
          </div>
        </div>
        <section className="section-50 section-sm-90">
        <div className="shell text-center">
          <h3>Our Services</h3>
          <p className="text-big font-accent text-spacing-40">
            We support growth through expert strategic planning and consulting.
          </p>
          <div className="range range-xs-center offset-top-40">
            <div className="cell-xs-10 cell-sm-6 cell-md-4 height-fill">
              <article className="icon-box">
                <div className="box-top">
                  <div className="box-icon">
                    <span className="icon icon-primary icon-lg fl-puppets-chart6">
                    </span>
                  </div>
                  <div className="box-header">
                    <h5>
                      <a 
                        name="Our Services Page" 
                        href="services.php">Strategic Planning
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="box-body">
                  <p className="font-size-big">Planning is the key to successfully reaching your business goals.</p>
                </div>
              </article>
            </div>
            <div 
              className="cell-xs-10 cell-sm-6 cell-md-4 height-fill offset-top-40 offset-sm-top-0">
              <article className="icon-box">
                <div className="box-top">
                  <div className="box-icon"><span className="icon icon-primary icon-lg fl-puppets-maths26"></span></div>
                  <div className="box-header">
                    <h5><a name="Our Services Page" href="services.php">Bookkeeping</a></h5>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="box-body">
                  <p className="font-size-big">We’ll create a chart of accounts to capture all your financial transactions.</p>
                </div>
              </article>
            </div>
            <div className="cell-xs-10 cell-sm-6 cell-md-4 height-fill offset-top-40 offset-md-top-0">
              <article className="icon-box">
                <div className="box-top">
                  <div className="box-icon"><span className="icon icon-primary icon-lg fl-puppets-users30"></span></div>
                  <div className="box-header">
                    <h5><a name="Our Services Page" href="services.php">Payroll Services</a></h5>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="box-body">
                  <p className="font-size-big">We'll provide a dedicated, local payroll rep and reliable service.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      
    </div>
    )
  }
}

export default Home;

