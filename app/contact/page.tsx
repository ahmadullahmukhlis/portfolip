import React from "react";
import ReadySection from "../components/ReadySection";
import ScriptLoader from "../components/ScriptLoader";

const Contact: React.FC = () => {
  return (
    <main>
      <section id="contact" className="contact-area innerpage-single-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <p>Contact</p>
                  <h2>Get in Touch with Me!</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-content-part wow fadeInUp delay-0-2s">
                  {/* START CONTACT SINGLE DESIGN AREA */}
                  <div
                    className="single-contact wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="contact-icon">
                      <i className="ri-map-pin-line"></i>
                    </div>
                    <h2>Our Address:</h2>
                    <p>Kabul, Afghanistan</p>
                  </div>
                  {/* END CONTACT SINGLE DESIGN AREA */}
                  {/* START CONTACT SINGLE DESIGN AREA */}
                  <div
                    className="single-contact wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="contact-icon">
                      <i className="ri-phone-line"></i>
                    </div>
                    <h2>Contact Number:</h2>
                    <p>+93779404681</p>
                  </div>
                  {/* END CONTACT SINGLE DESIGN AREA */}
                  {/* START CONTACT SINGLE DESIGN AREA */}
                  <div
                    className="single-contact wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="contact-icon">
                      <i className="ri-mail-line"></i>
                    </div>
                    <h2>Email Us:</h2>
                    <p>ahmadullahmukhlis2019@gmail.com</p>
                  </div>
                  {/* END CONTACT SINGLE DESIGN AREA */}
                </div>
              </div>
              {/* START CONTACT FORM DESIGN AREA */}
              <div className="col-lg-8">
                <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                  <form
                    id="contactForm"
                    className="contactForm"
                    name="contactForm"
                    action="assets/php/form-process.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Steve Milner"
                            required
                            data-error="Please enter your Name"
                          />
                          <label htmlFor="name" className="for-icon">
                            <i className="far fa-user"></i>
                          </label>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="hello@websitename.com"
                            required
                            data-error="Please enter your Email"
                          />
                          <label htmlFor="email" className="for-icon">
                            <i className="far fa-envelope"></i>
                          </label>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="message">Your Message</label>
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            rows="4"
                            placeholder="Write Your message"
                            required
                            data-error="Please Write your Message"
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <button type="submit" className="theme-btn">
                            Send Me Message <i className="ri-mail-line"></i>
                          </button>
                          <div id="msgSubmit" className="hidden"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* END CONTACT FORM DESIGN AREA */}
            </div>
          </div>
        </div>
      </section>
      {/* <ReadySection /> */}
      <ScriptLoader />
    </main>
  );
};

export default Contact;
