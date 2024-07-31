"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation"; // useRouter from next/navigation in Next.js 13+

const ScriptLoader = () => {
  const { asPath } = useRouter(); // using asPath instead of route to get the current path
  const [shouldRender, setShouldRender] = useState(false);
  const scriptRefArr = useRef<{ url: string; script: HTMLScriptElement }[]>([]);

  useEffect(() => {
    // Define your condition for rendering scripts
    const condition = true; // Replace with your actual condition
    setShouldRender(condition);

    if (condition) {
      // Array of script sources
      const scripts = [
        "/assets/js/jquery-3.6.0.min.js",
        "/assets/js/bootstrap.min.js",
        "/assets/js/appear.min.js",
        "/assets/js/gsap.min.js",
        "/assets/js/jquery.magnific-popup.min.js",
        "/assets/js/slick.min.js",
        "/assets/js/jquery.nice-select.min.js",
        "/assets/js/imagesloaded.pkgd.min.js",
        "/assets/js/isotope.pkgd.min.js",
        "/assets/js/wow.min.js",
        "/assets/js/script.js",
      ];

      // Load each script
      scripts.forEach((src) => loadScript(src));

      return () => {
        // Remove scripts when the component unmounts or route changes
        removeScripts();
      };
    }
  }, [asPath]); // Depend on asPath to react to route changes

  const loadScript = (src: string) => {
    // Check if the script is already loaded
    const existingScript = scriptRefArr.current.find(
      (item) => item.url === src
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      scriptRefArr.current.push({ url: src, script });
    }
  };

  const removeScripts = () => {
    // Remove all scripts added by this component
    scriptRefArr.current.forEach((item) => {
      if (document.body.contains(item.script)) {
        document.body.removeChild(item.script);
      }
    });

    // Clear the array after removing scripts
    scriptRefArr.current = [];
  };

  if (!shouldRender) return null;

  return null; // No visible UI is rendered
};

export default ScriptLoader;
