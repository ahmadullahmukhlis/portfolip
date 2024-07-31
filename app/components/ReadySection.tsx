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
                  Are you ready to kickstart your project with a touch of
                  innovation?
                </h2>
                <p>
                  Get in touch and let’s turn your vision into reality ✨. I’m
                  available for full-time or part-time projects, ready to
                  innovate and deliver standout web application solutions
                </p>
                <div className="hero-btns">
                  <Link href="/contact" className="theme-btn">
                    Let's Talk <i className="ri-download-line"></i>
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
