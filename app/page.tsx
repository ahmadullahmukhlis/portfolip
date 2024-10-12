import Image from "next/image";
import React from "react";
import ReadySection from "./components/ReadySection";
import ScriptLoader from "./components/ScriptLoader";

export default function Home() {
  return (
    <main>
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">
            {/* START ABOUT IMAGE DESIGN AREA */}
            <div className="col-lg-4">
              <div className="about-image-part wow fadeInUp delay-0-3s">
                <Image
                  src="/assets/images/about/profile.jpeg"
                  alt="About Me"
                  width={400} // Adjust width and height according to your image
                  height={400}
                />
                <h3 className="my-2">Ahmad Ullah Mukhlis</h3>
                <p>I am a Full-Stack Web Designer based in Afghanistan.</p>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ri-facebook-circle-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ri-twitter-x-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ri-github-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* / END ABOUT IMAGE DESIGN AREA */}
            {/* START ABOUT TEXT DESIGN AREA */}
            <div className="col-lg-8">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>Hello There!</p>
                <h2>
                  I’m Ahmad Ullah Mukhlis, a Full-Stack Web Developer creating
                  web applications, ERP MIS, and mobile applications.
                </h2>
                <div className="address-field">
                  <ul>
                    <li>
                      <i className="ri-circle-fill"></i>Available for
                      freelancing and project-based work
                    </li>
                  </ul>
                </div>
                <div className="hero-btns">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1qPvj1JlWbZCizcnLzR_peWzMXED5n4Yh"
                    className="theme-btn"
                  >
                    Download CV <i className="ri-download-line"></i>
                  </a>
                </div>
              </div>
              <div className="about-content-part-bottom wow fadeInUp delay-0-2s">
                <h2>Companies I Worked With</h2>
                <div className="company-list">
                  <div
                    className="scroller"
                    data-direction="left"
                    data-speed="slow"
                  >
                    <div className="scroller__inner">
                      <Image
                        src="/assets/images/client-logos/partner1.png"
                        alt="Partner 1"
                        width={100}
                        height={100}
                      />
                      <Image
                        src="/assets/images/client-logos/partner2.png"
                        alt="Partner 2"
                        width={100}
                        height={100}
                      />
                      <Image
                        src="/assets/images/client-logos/partner3.png"
                        alt="Partner 3"
                        width={100}
                        height={100}
                      />
                      <Image
                        src="/assets/images/client-logos/partner4.png"
                        alt="Partner 4"
                        width={100}
                        height={100}
                      />
                      <Image
                        src="/assets/images/client-logos/partner5.png"
                        alt="Partner 5"
                        width={100}
                        height={100}
                      />
                      <Image
                        src="/assets/images/client-logos/partner1.png"
                        alt="Partner 1"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* / END ABOUT TEXT DESIGN AREA */}
          </div>
        </div>
      </section>
      {/* / END ABOUT DESIGN AREA */}
      {/* START PORTFOLIO DESIGN AREA */}
      <section id="portfolio" className="projects-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <h2>Works & Projects</h2>
                  <p>
                    Check out some of my design projects, meticulously crafted
                    with love and dedication, each one reflecting the passion
                    and soul I pour into every detail.
                  </p>
                </div>
              </div>
            </div>
            <ul className="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s">
              <li data-filter="*" className="current">
                Show All
              </li>
              <li data-filter=".design">Boostrap Template</li>
              <li data-filter=".design">Tailawind Css Template</li>
              <li data-filter=".branding">Laravel</li>
              <li data-filter=".marketing">React</li>
              <li data-filter=".game">Next js</li>
            </ul>
            <div className="row project-masonry-active">
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item branding game">
                <div className="project-item style-two wow fadeInUp delay-0-3s">
                  <div className="project-image">
                    <Image
                      src="/assets/images/projects/work1.jpg"
                      alt="Project 1"
                      width={600}
                      height={400}
                    />
                    <a href="single-project.html" className="details-btn">
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Branding</span>
                    <h3>Mobile Application Design</h3>
                  </div>
                </div>
              </div>
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item design marketing graphics">
                <div className="project-item style-two wow fadeInUp delay-0-4s">
                  <div className="project-image">
                    <Image
                      src="/assets/images/projects/work2.jpg"
                      alt="Project 2"
                      width={600}
                      height={400}
                    />
                    <a
                      href="https://www.facebook.com/nasarimukhlis/"
                      className="details-btn popup-youtube"
                    >
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Design</span>
                    <h3>Website Makeup Design</h3>
                  </div>
                </div>
              </div>
              {/* / END SINGLE PORTFOLIO DESIGN AREA */}
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item game graphics">
                <div className="project-item style-two wow fadeInUp delay-0-5s">
                  <div className="project-image">
                    <Image
                      src="/assets/images/projects/work3.jpg"
                      alt="Project 3"
                      width={600}
                      height={400}
                    />
                    <a
                      href="/assets/images/projects/work3.jpg"
                      className="details-btn work-popup"
                    >
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Graphics</span>
                    <h3>Brand Identity and Motion Design</h3>
                  </div>
                </div>
              </div>
              {/* / END SINGLE PORTFOLIO DESIGN AREA */}
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item design game">
                <div className="project-item style-two wow fadeInUp delay-0-6s">
                  <div className="project-image">
                    <Image
                      src="/assets/images/projects/work4.jpg"
                      alt="Project 4"
                      width={600}
                      height={400}
                    />
                    <a
                      href="/assets/images/projects/work4.jpg"
                      className="details-btn work-popup"
                    >
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Game</span>
                    <h3>Mobile Application Design</h3>
                  </div>
                </div>
              </div>
              {/* / END SINGLE PORTFOLIO DESIGN AREA */}
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item branding game">
                <div className="project-item style-two wow fadeInUp delay-0-7s">
                  <div className="project-image">
                    <Image
                      src="/assets/images/projects/work5.jpg"
                      alt="Project 5"
                      width={600}
                      height={400}
                    />
                    <a
                      href="/assets/images/projects/work5.jpg"
                      className="details-btn work-popup"
                    >
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Branding</span>
                    <h3>Application Design</h3>
                  </div>
                </div>
              </div>
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item design marketing graphics">
                <div className="project-item style-two wow fadeInUp delay-0-8s">
                  <div className="project-image">
                    <Image
                      src="/assets/images/projects/work6.jpg"
                      alt="Project 6"
                      width={600}
                      height={400}
                    />
                    <a
                      href="https://www.facebook.com/nasarimukhlis/"
                      className="details-btn popup-youtube"
                    >
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Design</span>
                    <h3>Website Development</h3>
                  </div>
                </div>
              </div>
              {/* / END SINGLE PORTFOLIO DESIGN AREA */}
            </div>
          </div>
        </div>
      </section>
      {/* // END PORTFOLIO DESIGN AREA */}
      {/* START CALL TO ACTION DESIGN AREA */}
      <ReadySection />
      <ScriptLoader />
    </main>
  );
}
