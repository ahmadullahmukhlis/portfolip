import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center">
            {/* START LOGO DESIGN AREA */}
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/assets/images/logo.png"
                    alt="Logo"
                    title="Logo"
                    width={150}
                    height={50}
                  />
                </Link>
              </div>
            </div>
            {/* / END LOGO DESIGN AREA */}
            {/* START NAV DESIGN AREA */}
            <div className="nav-outer clearfix mx-auto">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link href="/">
                      <Image
                        src="/assets/images/logo.png"
                        alt="Logo"
                        title="Logo"
                        width={150}
                        height={50}
                      />
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="navigation onepage clearfix">
                    <li>
                      <Link href="/" className="nav-link-click">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="nav-link-click">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/Serveces" className="nav-link-click">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/work" className="nav-link-click">
                        Works
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="nav-link-click">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* / END NAV DESIGN AREA */}
            </div>
            <div className="menu-btns">
              <Link href="/contact" className="theme-btn">
                Hire Me<i className="ri-shake-hands-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
