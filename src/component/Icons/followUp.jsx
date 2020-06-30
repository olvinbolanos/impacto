import React from 'react';



  function FollowUp() {
    const Styles = {
      AsideContent: {
        backgroundImage: "url(https://meetcambium.com/images/clients-testimonials-parallax-3.jpg)",
        position: "relative",
        overflow: "hidden", 
        zIndex: 4,
        height: "769px"
        },
      RdParallax: {
        position: "absolute",
        top: 0,
        marginTop: "-60px",
        padding: "60px 0px",
        width: "1045px",
        transform: "translate3d(0px, 534px, 0px)"
      },
      RdParallaxHolder: {
        position: "fixed",
        width: "1045px",
        transform: "translate3d(0px, 0px, 0px)"
      },
      RdParallaxInner: {
        position: "fixed",
        backgroundImage: "url(https://meetcambium.com/images/clients-testimonials-parallax-3.jpg)",
        height: "982.39px",
        transform: "translate3d(0px, -329.60999999999996px, 0px)"
      },
      RdParallaxLayerHolder: {
        position: "relative",
        height: "769px"
      },
      OwlStageOuter: {
        transform: "translate3d(-820px, 0px, 0px)",
        transition: 0 + "s",
        width: 3720 + "px",
        paddingLeft: "15px", 
        paddingRight: "15px",
      },
      OwlItemCloned: {
        width: "380px", 
        marginRight: "30px",
      }
    }
    
    return(
     <div>
        <section 
          style={Styles.AsideContent} 
          className="section-100 section-bottom-60 section-sm-100 bg-white bg-image"
        >
        <section className="section-100 section-bottom-60 section-sm-100 bg-white bg-image">

        <div className="shell">
          <div className="range range-condensed range-xs-center range-sm-right range-xs-middle">
            <div  className="cell-xs-10 cell-sm-7 cell-md-6 cell-lg-5">
              <div className="box bg-cello section-relative">
                <h3 className="text-white">About Us</h3>
                <div className="offset-top-40">
                  <p className="font-size-big text-white">
                    We are dedicated to providing professional service with the highest degree of 
                    honesty and integrity, and strive to add value through our bookkeeping and 
                    consulting services.
                  </p>
                </div>
                <div className="offset-top-40">
                  <ul className="list-marked">
                    <li className="font-size-big text-white">Highly Competent Professionals</li>
                    <li className="font-size-big text-white">Over 20 years experience</li>
                    <li className="font-size-big text-white">Committed to Driving Growth in Your Organization</li>
                  </ul>
                </div>
                <div className="offset-top-45">
                  <a name="Contact Us Page" 
                     href="contact-us.php" 
                     className="btn btn-icon btn-icon-right btn-white-outline"
                  >
                    <span className="icon icon-xs-smaller fa-angle-right text-primary">
                    </span>Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        data-on="false" 
        data-md-on="true" 
        class="rd-parallax bg-gray-base bg-image"
      >
      <div className="rd-parallax-inner" style={Styles.RdParallax}>
        <div 
          data-speed="0.33" 
          data-type="media"  
          className="rd-parallax-layer" 
          style={Styles.RdParallaxInner}>
          </div>
        <div 
          className="rd-parallax-layer-holder" 
          style={Styles.RdParallaxLayerHolder}>
          <div 
            data-speed="0" 
            data-type="html" 
            className="rd-parallax-layer" 
            style={Styles.RdParallaxHolder}
          >
          </div>
        </div>
      </div>
    

    <div className="section-60 section-sm-90 bg-overlay-cello">
            <div className="shell text-center">
              <div className="range">
                <div className="cell-xs-12">
                  <h3>What People Say</h3>
                </div>
              </div>
              <div className="range offset-top-50 text-left">
                <div className="cell-xs-12">
                  <div data-items="1" 
                  data-sm-items="2" 
                  data-stage-padding="15" 
                  data-loop="true" 
                  data-margin="30" 
                  data-mouse-drag="true" 
                  data-nav="true" 
                  data-dots="true" 
                  data-dots-each="1" 
                  className="owl-carousel 
                  owl-spacing-1 
                  owl-nav-classic 
                  owl-style-minimal 
                  owl-carousel 
                  owl-spacing-1 
                  owl-nav-classic 
                  owl-style-minimal 
                  owl-theme 
                  owl-loaded"
                  >
                    
                  <div className="owl-stage-outer">
                    <div className="owl-stage" 
                    style={Styles.OwlStageOuter}>
                      <div 
                      className="owl-item cloned" 
                      style={Styles.OwlItemCloned}>
                        <div className="item">
                        <blockquote className="quote-bordered">
                        <div className="quote-body">
                          <div className="quote-open">
                            <svg 
                              version="1.1" 
                              baseProfile="tiny" 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="37px" 
                              height="27px" 
                              viewBox="0 0 21 15" 
                              preserveAspectRatio="none"
                            >
                              <path 
                              d="M9.597,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.349,1.316                    
                                 c-1.287,0-2.414-0.44-3.382-1.316C0.482,12.811,0,11.758,0,10.535c0-1.226,0.58-2.716,1.739-4.473L5.603,0H9.34L6.956,6.37                    
                                 C8.716,7.145,9.597,8.493,9.597,10.412z M20.987,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.35,1.316                    
                                 c-1.288,0-2.415-0.44-3.381-1.316c-0.966-0.879-1.45-1.931-1.45-3.154c0-1.226,0.582-2.716,1.74-4.473L16.994,0h3.734l-2.382,6.37                    
                                 C20.106,7.145,20.987,8.493,20.987,10.412z">
                              </path>
                            </svg>
                          </div>
                          <div className="quote-body-inner">
                            <p className="text-white font-size-big">
                              <q>Traci and her team have been an incredible asset to the success of my new business. 
                              The team has helped me with day to day operations, human resource help, payroll, hiring, tax liabilities, marketing 
                              strategies and so on. With any new business, we stumble through the beginning. With Traci and her team, I am prepared 
                              and ready to face the challenges that any new small business faces. I cannot recommend Cambium enough.</q>
                            </p>
                          </div>
                        </div>
                        <div className="quote-footer">
                          <div className="unit unit-horizontal unit-spacing-sm unit-middle">
                           
                            <div className="unit-body">
                              <cite>Laura Eagan, CKD</cite>
                              <p className="text-italic text-primary">
                                Owner, Estrella Cabinetry and Design Center
                              </p>
                            </div>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                <div 
                  className="owl-item cloned" 
                  style={Styles.OwlItemCloned}>
                    <div className="item">
                      <blockquote className="quote-bordered">
                        <div className="quote-body">
                          <div className="quote-open">
                            <svg 
                              version="1.1" 
                              baseProfile="tiny" 
                              xmlns="http://www.w3.org/2000/svg"  
                              width="37px" 
                              height="27px" 
                              viewBox="0 0 21 15" 
                              preserveAspectRatio="none"
                            >
                            <path 
                            d="M9.597,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.349,1.316                    
                            c-1.287,0-2.414-0.44-3.382-1.316C0.482,12.811,0,11.758,0,10.535c0-1.226,0.58-2.716,1.739-4.473L5.603,0H9.34L6.956,6.37                    
                            C8.716,7.145,9.597,8.493,9.597,10.412z M20.987,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.35,1.316                    
                            c-1.288,0-2.415-0.44-3.381-1.316c-0.966-0.879-1.45-1.931-1.45-3.154c0-1.226,0.582-2.716,1.74-4.473L16.994,0h3.734l-2.382,6.37                    
                            C20.106,7.145,20.987,8.493,20.987,10.412z">
                            </path>
                            </svg>
                          </div>
                          <div className="quote-body-inner">
                            <p className="text-white font-size-big">
                              <q>...The team is just amazing! They are innovative thinkers; and their services truly do save you time and money. I have both watched them in action helping others, 
                                and experienced the amazing feeling of relief, from the systems they set up for me to keep me organized, focused, and on top of my game. Save time? Absolutely! I am no longer searching for where 
                                I put my notes, no longer have boxes of receipts, the list goes on...so therefore can focus where I shine best, therefore I am making more money!
                              </q>
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
                        {/*<div class="quote-footer">
                          <div class="unit unit-horizontal unit-spacing-sm unit-middle">
                            
                            <div class="unit-body">
                              <cite>Becky Norwood</cite>
                              <p class="text-italic text-primary">President, Marbeck</p>
                            </div>
                          </div>
                        </div>
                      </blockquote>
                    </div></div><div class="owl-item active" style="width: 380px; margin-right: 30px;"><div class="item">
                      <blockquote class="quote-bordered">
                        <div class="quote-body">
                          <div class="quote-open">
                            <svg version="1.1" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="37px" height="27px" viewBox="0 0 21 15" preserveAspectRatio="none">
                              <path d="M9.597,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.349,1.316                    
c-1.287,0-2.414-0.44-3.382-1.316C0.482,12.811,0,11.758,0,10.535c0-1.226,0.58-2.716,1.739-4.473L5.603,0H9.34L6.956,6.37                    
C8.716,7.145,9.597,8.493,9.597,10.412z M20.987,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.35,1.316                    
c-1.288,0-2.415-0.44-3.381-1.316c-0.966-0.879-1.45-1.931-1.45-3.154c0-1.226,0.582-2.716,1.74-4.473L16.994,0h3.734l-2.382,6.37                    C20.106,7.145,20.987,8.493,20.987,10.412z"></path>
                            </svg>
                          </div>
                          <div class="quote-body-inner">
                            <p class="text-white font-size-big">
                              <q>...Cambium Consulting has allowed me to operate my international sound engineering and concert promotion business.
Without them, I wouldn't be able to stay on the road for weeks at a time. I can travel without worry and know that all my financial issues will be handled promptly and any potential problems avoided...</q>
                            </p>
                          </div>
                        </div>
                        <div class="quote-footer">
                          <div class="unit unit-horizontal unit-spacing-sm unit-middle">
                            
                            <div class="unit-body">
                              <cite>William Harpe</cite>
                              <p 
                              class="text-italic text-primary">Owner, CH Production, LLC</p>
                            </div>
                          </div>
                        </div>
                      </blockquote>
                    </div></div>
                    <div class="owl-item animated owl-animated-in slide active" style="width: 380px; margin-right: 30px;"><div class="item">
                      <blockquote class="quote-bordered">
                        <div class="quote-body">
                          <div class="quote-open">
                            <svg 
                              version="1.1" 
                              baseProfile="tiny" 
                              xmlns="http://www.w3.org/2000/svg" 
                              // xmlns:xlink="http://www.w3.org/1999/xlink" 
                              width="37px" 
                              height="27px" 
                              viewBox="0 0 21 15" 
                              preserveAspectRatio="none"
                            >
                              <path 
                                d="M9.597,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.349,1.316                    
                                  c-1.287,0-2.414-0.44-3.382-1.316C0.482,12.811,0,11.758,0,10.535c0-1.226,0.58-2.716,1.739-4.473L5.603,0H9.34L6.956,6.37                    
                                  C8.716,7.145,9.597,8.493,9.597,10.412z M20.987,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.35,1.316                    
                                  c-1.288,0-2.415-0.44-3.381-1.316c-0.966-0.879-1.45-1.931-1.45-3.154c0-1.226,0.582-2.716,1.74-4.473L16.994,0h3.734l-2.382,6.37                    
                                  C20.106,7.145,20.987,8.493,20.987,10.412z">
                              </path>
                            </svg>
                          </div>
                          <div class="quote-body-inner">

                            <p class="text-white font-size-big">
                              <q>...Cambium Consulting has consummate professionals. They take on challenges with grace and fortitude. Their integrity is unsurpassed, and I feel very 
comfortable sharing my financial and personal information with them. They are always willing to share their knowledge and offer ideas, solutions, and great advice.</q>
                         </p>
                          </div>
                        </div>
                        <div class="quote-footer">
                          <div class="unit unit-horizontal unit-spacing-sm unit-middle">
                            
                            <div class="unit-body">
                              <cite>Art Reynolds</cite>
                              <p class="text-italic text-primary">Owner of Foot Solutions Goodyear</p>
                            </div>
                          </div>
                        </div>
                      </blockquote>
                    </div></div><div class="owl-item" style="width: 380px; margin-right: 30px;"><div class="item">
                      <blockquote class="quote-bordered">
                        <div class="quote-body">
                          <div class="quote-open">
                            <svg 
                            version="1.1" 
                            baseProfile="tiny" 
                            xmlns="http://www.w3.org/2000/svg" 
                            // xmlns:xlink="http://www.w3.org/1999/xlink" 
                            width="37px" 
                            height="27px" 
                            viewBox="0 0 21 15" 
                            preserveAspectRatio="none"
                          >
                              <path d="M9.597,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.349,1.316                    
c-1.287,0-2.414-0.44-3.382-1.316C0.482,12.811,0,11.758,0,10.535c0-1.226,0.58-2.716,1.739-4.473L5.603,0H9.34L6.956,6.37                    
C8.716,7.145,9.597,8.493,9.597,10.412z M20.987,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.35,1.316                    
c-1.288,0-2.415-0.44-3.381-1.316c-0.966-0.879-1.45-1.931-1.45-3.154c0-1.226,0.582-2.716,1.74-4.473L16.994,0h3.734l-2.382,6.37                    
C20.106,7.145,20.987,8.493,20.987,10.412z"></path>
                            </svg>
                          </div>
                          <div class="quote-body-inner">

                            <p class="text-white font-size-big">
                              <q>...Their attention to detail and dedicated approach will exceed your expectations. They are diligent, follow through and have excellent communication skills. 
Best of all, they really know their stuff - you can't go wrong engaging their services.</q>
                            </p>
                          </div>
                        </div>
                        <div class="quote-footer">
                          <div class="unit unit-horizontal unit-spacing-sm unit-middle">
                           
                            <div class="unit-body">
                              <cite>Lori Kreuger</cite>
                              <p class="text-italic text-primary">Director of Professional Services at Ivoxy Consulting</p>
                            </div>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                <div 
                  class="owl-item" 
                  style="width: 380px; margin-right: 30px;"
                >
                <div class="item">
                  <blockquote class="quote-bordered">
                        <div class="quote-body">
                          <div class="quote-open">
                            <svg 
                              version="1.1" 
                              baseProfile="tiny" 
                              xmlns="http://www.w3.org/2000/svg" 
                              // xmlns:xlink="http://www.w3.org/1999/xlink" 
                              width="37px" 
                              height="27px" 
                              viewBox="0 0 21 15" 
                              preserveAspectRatio="none"
                            >
                              <path 
                                d="M9.597,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.349,1.316                    
                                c-1.287,0-2.414-0.44-3.382-1.316C0.482,12.811,0,11.758,0,10.535c0-1.226,0.58-2.716,1.739-4.473L5.603,0H9.34L6.956,6.37                    
                                C8.716,7.145,9.597,8.493,9.597,10.412z M20.987,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.35,1.316                    
                                c-1.288,0-2.415-0.44-3.381-1.316c-0.966-0.879-1.45-1.931-1.45-3.154c0-1.226,0.582-2.716,1.74-4.473L16.994,0h3.734l-2.382,6.37                    C20.106,7.145,20.987,8.493,20.987,10.412z"></path>
                            </svg>
                          </div>
                          <div class="quote-body-inner">
                            <p class="text-white font-size-big">
                              <q>Traci and her team have been an incredible asset to the success of my new business. 
                              The team has helped me with day to day operations, human resource help, payroll, hiring, tax liabilities, marketing 
                              strategies and so on. With any new business, we stumble through the beginning. With Traci and her team, I am prepared 
                              and ready to face the challenges that any new small business faces. I cannot recommend Cambium enough.</q>
                            </p>
                          </div>
                        </div>
                        <div class="quote-footer">
                          <div class="unit unit-horizontal unit-spacing-sm unit-middle">
                            <div class="unit-body">
                              <cite>Erika, CKD</cite>
                              <p class="text-italic text-primary">Owner, Estrella Cabinetry and Design Center</p>
                            </div>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                <div 
                  class="owl-item" 
                  style={"width: 380px; margin-right: 30px;"}
                >
                    <div class="item">
                      <blockquote class="quote-bordered">
                        <div class="quote-body">
                          <div class="quote-open">
                            <svg 
                              version="1.1" 
                              baseProfile="tiny" 
                              xmlns="http://www.w3.org/2000/svg" 
                              // xmlns:xlink="http://www.w3.org/1999/xlink" 
                              width="37px" 
                              height="27px" 
                              viewBox="0 0 21 15" 
                              preserveAspectRatio="none"
                              >
                              <path 
                                d="M9.597,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.349,1.316                    
                                c-1.287,0-2.414-0.44-3.382-1.316C0.482,12.811,0,11.758,0,10.535c0-1.226,0.58-2.716,1.739-4.473L5.603,0H9.34L6.956,6.37                    
                                C8.716,7.145,9.597,8.493,9.597,10.412z M20.987,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.35,1.316                    
                                c-1.288,0-2.415-0.44-3.381-1.316c-0.966-0.879-1.45-1.931-1.45-3.154c0-1.226,0.582-2.716,1.74-4.473L16.994,0h3.734l-2.382,6.37                    
                                C20.106,7.145,20.987,8.493,20.987,10.412z">
                              </path>
                            </svg>
                          </div>
                          <div class="quote-body-inner">
                            <p class="text-white font-size-big">
                              <q>...The team is just amazing! They are innovative thinkers; and their services truly do save you time and money. I have both watched them in action helping others, 
and experienced the amazing feeling of relief, from the systems they set up for me to keep me organized, focused, and on top of my game. Save time? Absolutely! I am no longer searching for where 
I put my notes, no longer have boxes of receipts, the list goes on...so therefore can focus where I shine best, therefore I am making more money!</q></p>
                          </div>
                        </div>
                        <div class="quote-footer">
                          <div class="unit unit-horizontal unit-spacing-sm unit-middle">
                            <div class="unit-body">
                              <cite>Becky Norwood</cite>
                              <p class="text-italic text-primary">President, Marbeck</p>
                            </div>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                <div class="owl-item cloned" 
                style={"width: 380px; margin-right: 30px;"}>
                <div class="item">
                  <blockquote class="quote-bordered">
                    <div class="quote-body">
                      <div class="quote-open">
                        <svg 
                              version="1.1" 
                              baseProfile="tiny" 
                              xmlns="http://www.w3.org/2000/svg" 
                              // xmlns:xlink="http://www.w3.org/1999/xlink" 
                              width="37px" 
                              height="27px" 
                              viewBox="0 0 21 15" 
                              preserveAspectRatio="none"
                            >
                              <path 
                                d="M9.597,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.349,1.316                    
                                c-1.287,0-2.414-0.44-3.382-1.316C0.482,12.811,0,11.758,0,10.535c0-1.226,0.58-2.716,1.739-4.473L5.603,0H9.34L6.956,6.37                    
                                C8.716,7.145,9.597,8.493,9.597,10.412z M20.987,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.35,1.316                    
                                c-1.288,0-2.415-0.44-3.381-1.316c-0.966-0.879-1.45-1.931-1.45-3.154c0-1.226,0.582-2.716,1.74-4.473L16.994,0h3.734l-2.382,6.37                    C20.106,7.145,20.987,8.493,20.987,10.412z"></path>
                            </svg>
                          </div>
                          <div class="quote-body-inner">
                            <p class="text-white font-size-big">
                              <q>...Cambium Consulting has allowed me to operate my international sound engineering and concert promotion business.
Without them, I wouldn't be able to stay on the road for weeks at a time. I can travel without worry and know that all my financial issues will be handled promptly and any potential problems avoided...</q>
                            </p>
                          </div>
                        </div>
                        <div class="quote-footer">
                          <div class="unit unit-horizontal unit-spacing-sm unit-middle">
                            <div class="unit-body">
                              <cite>William Harpe</cite>
                              <p class="text-italic text-primary">Owner, CH Production, LLC</p>
                            </div>
                          </div>
                        </div>
                      </blockquote>
                    </div></div><div class="owl-item cloned" style="width: 380px; margin-right: 30px;"><div class="item">
                      <blockquote class="quote-bordered">
                        <div class="quote-body">
                          <div class="quote-open">
                            <svg 
                              version="1.1" 
                              baseProfile="tiny" 
                              xmlns="http://www.w3.org/2000/svg" 
                              // xmlns:xlink="http://www.w3.org/1999/xlink" 
                              width="37px" 
                              height="27px" 
                              viewBox="0 0 21 15" 
                              preserveAspectRatio="none">
                              <path 
                                d="M9.597,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.349,1.316                    
                                c-1.287,0-2.414-0.44-3.382-1.316C0.482,12.811,0,11.758,0,10.535c0-1.226,0.58-2.716,1.739-4.473L5.603,0H9.34L6.956,6.37                    
                                C8.716,7.145,9.597,8.493,9.597,10.412z M20.987,10.412c0,1.306-0.473,2.399-1.418,3.277c-0.944,0.876-2.06,1.316-3.35,1.316                    
                                c-1.288,0-2.415-0.44-3.381-1.316c-0.966-0.879-1.45-1.931-1.45-3.154c0-1.226,0.582-2.716,1.74-4.473L16.994,0h3.734l-2.382,6.37                    C20.106,7.145,20.987,8.493,20.987,10.412z"></path>
                            </svg>
                          </div>
                          <div class="quote-body-inner">
                            <p class="text-white font-size-big">
                              <q>...Cambium Consulting has consummate professionals. They take on challenges with grace and fortitude. Their integrity is unsurpassed, and I feel very 
comfortable sharing my financial and personal information with them. They are always willing to share their knowledge and offer ideas, solutions, and great advice.</q>
                         </p>
                          </div>
                        </div>
                        <div class="quote-footer">
                          <div class="unit unit-horizontal unit-spacing-sm unit-middle">
                            <div class="unit-body">
                              <cite>Art Reynolds</cite>
                              <p class="text-italic text-primary">Owner of Foot Solutions Goodyear</p>
                            </div>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div> */}
            <div class="owl-controls">
              <div class="owl-nav">
                <div class="owl-prev" >
                </div>
              <div class="owl-next">
              </div>
            </div>
            <div class="owl-dots" >
              <div class="owl-dot active">
                <span></span>
              </div>
            <div class="owl-dot">
              <span></span>
            </div>
            <div class="owl-dot">
              <span></span>
            </div>
            <div class="owl-dot">
              <span></span>
            </div>
            <div class="owl-dot">
              <span></span>
            </div>
          </div>
        </div>
     </section>
    </div>


   
              )
    }

    export default FollowUp;


