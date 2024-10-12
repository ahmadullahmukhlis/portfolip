import React from "react";
import ReadySection from "../components/ReadySection";
import ScriptLoader from "../components/ScriptLoader";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <main>
      {/* START ABOUT DESIGN AREA */}
      <section id="about" className="about-single-area innerpage-single-area">
        <div className="container">
          <div className="row">
            {/* START ABOUT IMAGE DESIGN AREA */}
            <div className="col-lg-4">
              <div className="about-image-part wow fadeInUp delay-0-3s">
                <img src="/assets/images/about/profile.jpeg" alt="About Me" />
              </div>
            </div>
            {/* / END ABOUT IMAGE DESIGN AREA */}
            {/* START ABOUT TEXT DESIGN AREA */}
            <div className="col-lg-8">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <h2>I’m Ahmad Ullah Mukhlis, a Full-Stack Web Develope.</h2>
                <p>
                  I’m Ahmad Ullah Mukhlis, a Full-Stack Web Developer based in
                  Afghanistan, dedicated to crafting exceptional digital
                  experiences. With expertise spanning both frontend and backend
                  technologies, I specialize in building dynamic, scalable web
                  applications that cater to your unique needs. My approach
                  blends creativity with technical proficiency to deliver
                  solutions that are both functional and visually compelling.
                </p>
                <p>
                  My journey in web development has equipped me with a diverse
                  skill set, from designing intuitive user interfaces to
                  implementing robust server-side logic. I thrive on solving
                  complex challenges and continuously exploring the latest
                  technologies to push the boundaries of what's possible. Each
                  project I undertake is a testament to my commitment to
                  quality, innovation, and user-centric design
                </p>
                <p>
                  Explore my portfolio to see a curated selection of my work and
                  understand how I can bring your vision to life. Whether you’re
                  looking to develop a new application, enhance an existing one,
                  or embark on a collaborative project, I’m here to turn your
                  ideas into reality. Let’s connect and make something amazing
                  together
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
                        <Image
                          src="/assets/images/client-logos/baheer-group.jpg"
                          alt="Partner 1"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="content">
                        <span className="years">2023 - Present</span>
                        <h4>Baheer Group Of Companies</h4>
                        <span className="company">
                          Full Stack Web Developer
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
                        <span className="years">2022 - 2023</span>
                        <h4>Nangarhar University</h4>
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
                        <h4>Freelance</h4>
                        <span className="company">
                          Web & Application Developer
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
                        <span className="years">2019 - 2023</span>
                        <h4>Bachelor Degree of Information Technology</h4>
                        <span className="company">Nangarhar University</span>
                      </div>
                    </div>
                    {/* / END SINGLE RESUME DESIGN AREA */}
                    {/* START SINGLE RESUME DESIGN AREA */}
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="ri-book-line"></i>
                      </div>
                      <div className="content">
                        <span className="years">2016 - 2019</span>
                        <h4>Imam Abu Hanifa Higher Secondary School</h4>
                        <span className="company">Kohat Pakistan</span>
                      </div>
                    </div>
                    {/* / END SINGLE RESUME DESIGN AREA */}
                    {/* START SINGLE RESUME DESIGN AREA */}
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="ri-book-line"></i>
                      </div>
                      <div className="content">
                        <span className="years">2007 - 2016</span>
                        <h4>Primary school</h4>
                        <span className="company">Kohat Pakistan </span>
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
      <ScriptLoader />
    </main>
  );
};

export default About;
