import React from "react";
import ReadySection from "../components/ReadySection";
import ScriptLoader from "../components/ScriptLoader";

const Work: React.FC = () => {
  return (
    <main>
      {/* START PORTFOLIO DESIGN AREA */}
      <section id="portfolio" className="projects-area innerpage-single-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <h2>Works & Projects</h2>
                  <p>
                    Check out some of my design projects, meticulously crafted
                    with love and dedication, each one reflecting the passion
                    and soul I poured into every detail.
                  </p>
                </div>
              </div>
            </div>
            <ul className="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s">
              <li data-filter="*" className="current">
                Show All
              </li>
              <li data-filter=".design">Design</li>
              <li data-filter=".branding">Branding</li>
              <li data-filter=".marketing">Marketing</li>
              <li data-filter=".game">Game</li>
            </ul>
            <div className="row project-masonry-active">
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item branding game">
                <div className="project-item style-two wow fadeInUp delay-0-3s">
                  <div className="project-image">
                    <img src="assets/images/projects/work1.jpg" alt="Project" />
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
                    <img src="assets/images/projects/work2.jpg" alt="Project" />
                    <a
                      href="https://www.youtube.com/watch?v=qZEPs3vmYB4"
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
                    <img src="assets/images/projects/work3.jpg" alt="Project" />
                    <a
                      href="assets/images/projects/work3.jpg"
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
                    <img src="assets/images/projects/work4.jpg" alt="Project" />
                    <a
                      href="assets/images/projects/work4.jpg"
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
                    <img src="assets/images/projects/work5.jpg" alt="Project" />
                    <a
                      href="assets/images/projects/work5.jpg"
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
              <div className="col-lg-4 col-md-6 item design marketing graphics">
                <div className="project-item style-two wow fadeInUp delay-0-8s">
                  <div className="project-image">
                    <img src="assets/images/projects/work6.jpg" alt="Project" />
                    <a
                      href="https://www.youtube.com/watch?v=qZEPs3vmYB4"
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
      <ReadySection />
    </main>
  );
};

export default Work;
