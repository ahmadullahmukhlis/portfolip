import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="footer-bottom pt-50 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2023, <a href="/">Bentos</a> All Rights
                  Reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyright-text extra-copyright">
                <p>Crafted with ❤️ by Tanvir Hossain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
