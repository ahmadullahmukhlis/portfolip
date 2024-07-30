import React from "react";
import ReadySection from "../components/ReadySection";

const Service: React.FC = () => {
  return (
    <main>
      {/* START ABOUT DESIGN AREA */}
      <section id="about" className="about-single-area innerpage-single-area">
        <div className="container">
          <div className="row">
            {/* START ABOUT IMAGE DESIGN AREA */}
            <div className="col-lg-4">
              <div className="about-image-part wow fadeInUp delay-0-3s">
                <img src="/assets/images/about/profile.png" alt="About Me" />
              </div>
            </div>
            {/* / END ABOUT IMAGE DESIGN AREA */}
            {/* START ABOUT TEXT DESIGN AREA */}
            <div className="col-lg-8">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <h2>I’m Bentos Walker, a product designer.</h2>
                <p>
                  I am a San Francisco-based product designer with a focus on
                  web design, illustration, and visual development. I have a
                  diverse range of experience having worked across various
                  fields and industries.
                </p>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source.
                </p>
                <div className="hero-btns">
                  <a href="/contact" className="theme-btn">
                    Get In Touch<i className="ri-mail-send-line"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* / END ABOUT TEXT DESIGN AREA */}
          </div>
        </div>
      </section>
      {/* / END ABOUT DESIGN AREA */}
      {/* START RESUME EXPERIENCE DESIGN AREA */}
      <section id="resume" className="resume-area">
        <div className="container">
          <div className="resume-items">
            <div className="row">
              {/* START EXPERIENCE RESUME DESIGN AREA */}
              <div className="col-xl-6 col-md-6">
                <div className="single-resume">
                  <h2>Experience</h2>
                  <div className="experience-list">
                    {/* START SINGLE RESUME DESIGN AREA */}
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="ri-book-line"></i>
                      </div>
                      <div className="content">
                        <span className="years">2021 - Present</span>
                        <h4>Themeforest Market</h4>
                        <span className="company">Web Designer</span>
                      </div>
                    </div>
                    {/* / END SINGLE RESUME DESIGN AREA */}
                    {/* START SINGLE RESUME DESIGN AREA */}
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="ri-book-line"></i>
                      </div>
                      <div className="content">
                        <span className="years">2021 - 2023</span>
                        <h4>Envato Theme Developer</h4>
                        <span className="company">Web Development</span>
                      </div>
                    </div>
                    {/* / END SINGLE RESUME DESIGN AREA */}
                    {/* START SINGLE RESUME DESIGN AREA */}
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="ri-book-line"></i>
                      </div>
                      <div className="content">
                        <span className="years">2021 - 2022</span>
                        <h4>Marketing Expert GRP</h4>
                        <span className="company">
                          Web Developer & Business Partner
                        </span>
                      </div>
                    </div>
                    {/* / END SINGLE RESUME DESIGN AREA */}
                  </div>
                </div>
              </div>
              {/* // END EXPERIENCE RESUME DESIGN AREA */}
              {/* START EDUCATION RESUME DESIGN AREA */}
              <div className="col-xl-6 col-md-6">
                <div className="experience-list">
                  <div className="single-resume">
                    <h2>Education</h2>
                    {/* START SINGLE RESUME DESIGN AREA */}
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="ri-book-line"></i>
                      </div>
                      <div className="content">
                        <span className="years">2013 - 2015</span>
                        <h4>Bachelor Degree of Information Technology</h4>
                        <span className="company">
                          State University Bangladesh
                        </span>
                      </div>
                    </div>
                    {/* / END SINGLE RESUME DESIGN AREA */}
                    {/* START SINGLE RESUME DESIGN AREA */}
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="ri-book-line"></i>
                      </div>
                      <div className="content">
                        <span className="years">2021 - 2024</span>
                        <h4>Higher Secondary Education</h4>
                        <span className="company">
                          Premium College United VC
                        </span>
                      </div>
                    </div>
                    {/* / END SINGLE RESUME DESIGN AREA */}
                    {/* START SINGLE RESUME DESIGN AREA */}
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="ri-book-line"></i>
                      </div>
                      <div className="content">
                        <span className="years">2021 - 2024</span>
                        <h4>Webster College</h4>
                        <span className="company">UI/UX Design</span>
                      </div>
                    </div>
                    {/* / END SINGLE RESUME DESIGN AREA */}
                  </div>
                </div>
              </div>
              {/* // END EDUCATION RESUME DESIGN AREA */}
            </div>
          </div>
        </div>
      </section>
      {/* / END RESUME EXPERIENCE DESIGN AREA */}
      {/* START TESTIMONIALS DESIGN AREA */}
      <section className="testimonials-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <p>Testimonials</p>
                  <h2>What clients say!</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="testimonials-wrap">
                  {/* START SINGLE TESTIMONIALS DESIGN AREA */}
                  <div className="testimonial-item wow fadeInUp delay-0-3s">
                    <div className="author">
                      <img
                        src="/assets/images/testimonials/author1.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Financial planners help people to knowledge in about how
                      to invest and in save their money the most efficient way
                      eve planners help people to knowledge in about how.
                    </div>
                    <div className="testi-des">
                      <h5>Zonathon Doe</h5>
                      <span>CEO & Founder X</span>
                    </div>
                  </div>
                  {/* / END SINGLE TESTIMONIALS DESIGN AREA */}
                  {/* START SINGLE TESTIMONIALS DESIGN AREA */}
                  <div className="testimonial-item wow fadeInUp delay-0-4s">
                    <div className="author">
                      <img
                        src="/assets/images/testimonials/author2.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Financial planners help people to knowledge in about how
                      to invest and in save their money the most efficient way
                      eve planners help people to knowledge in about how.
                    </div>
                    <div className="testi-des">
                      <h5>Liana Marie</h5>
                      <span>Lead Designer Meta</span>
                    </div>
                  </div>
                  {/* / END SINGLE TESTIMONIALS DESIGN AREA */}
                  {/* START SINGLE TESTIMONIALS DESIGN AREA */}
                  <div className="testimonial-item wow fadeInUp delay-0-2s">
                    <div className="author">
                      <img
                        src="/assets/images/testimonials/author1.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Financial planners help people to knowledge in about how
                      to invest and in save their money the most efficient way
                      eve planners help people to knowledge in about how.
                    </div>
                    <div className="testi-des">
                      <h5>Zonathon Doe</h5>
                      <span>CEO & Founder X</span>
                    </div>
                  </div>
                  {/* / END SINGLE TESTIMONIALS DESIGN AREA */}
                  {/* START SINGLE TESTIMONIALS DESIGN AREA */}
                  <div className="testimonial-item wow fadeInUp delay-0-4s">
                    <div className="author">
                      <img
                        src="/assets/images/testimonials/author2.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Financial planners help people to knowledge in about how
                      to invest and in save their money the most efficient way
                      eve planners help people to knowledge in about how.
                    </div>
                    <div className="testi-des">
                      <h5>Liana Marie</h5>
                      <span>Lead Designer Meta</span>
                    </div>
                  </div>
                  {/* / END SINGLE TESTIMONIALS DESIGN AREA */}
                </div>
                <div className="slider-arrows wow fadeInUp delay-0-6s text-center pt-40">
                  <button className="testimonial-prev">
                    <i className="ri-arrow-left-s-line"></i>
                  </button>
                  <button className="testimonial-next">
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / END TESTIMONIALS DESIGN AREA */}
      <ReadySection />
    </main>
  );
};

export default Service;
