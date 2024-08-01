import Link from "next/link";
import React from "react";

const ReadySection: React.FC = () => {
  return (
    <section>
      {/* START CALL TO ACTION DESIGN AREA */}
      <section className="call-to-action-area">
        <div className="container">
          <div className="row">
            {/* START ABOUT TEXT DESIGN AREA */}
            <div className="col-lg-12">
              <div className="about-content-part call-to-action-part wow fadeInUp delay-0-2s text-center">
                <h2>
                  Ready to ignite your project with a spark of creativity?
                </h2>
                <p>
                  Connect with me and watch your vision come to life ✨. Whether
                  you're looking for full-time or part-time collaboration, I'm
                  here to innovate and provide exceptional web application
                  solutions
                </p>
                <div className="hero-btns">
                  <Link href="/contact" className="theme-btn">
                    Let’s Connect <i className="ri-download-line"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* / END ABOUT TEXT DESIGN AREA */}
          </div>
        </div>
      </section>
      {/*  // END CALL TO ACTION DESIGN AREA */}
    </section>
  );
};

export default ReadySection;
