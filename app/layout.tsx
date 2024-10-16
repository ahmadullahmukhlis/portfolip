import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "/assets/css/bootstrap.min.css";
import "/assets/css/magnific-popup.css";
import "/assets/css/nice-select.min.css";
import "/assets/css/animate.min.css";
import "/assets/css/slick.min.css";
import "/assets/css/spacing.css";
import "/assets/css/style.css";
import "/assets/css/responsive.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScriptLoader from "./components/ScriptLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" href="/assets/images/favicon.png" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/assets/images/favicon.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        {/* <ScriptLoader /> */}
        <div className="progress-wrap cursor-pointer">
          <i className="ri-arrow-up-double-line"></i>
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        {/* / END SCROLL UP DESIGN AREA */}

        {/* Load scripts */}
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
