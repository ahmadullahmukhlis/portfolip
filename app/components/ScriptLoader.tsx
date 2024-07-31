"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

const ScriptLoader = () => {
  const { asPath } = useRouter(); // using asPath to get the current path
  const [shouldRender, setShouldRender] = useState(false);
  const scriptRefArr = useRef<{ url: string; script: HTMLScriptElement }[]>([]);
  const loadedScripts = useRef<Set<string>>(new Set()); // Keep track of loaded scripts

  useEffect(() => {
    const condition = true; // Replace with your actual condition
    setShouldRender(condition);

    if (condition) {
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

      loadScripts(scripts);

      return () => {
        removeScripts();
      };
    }
  }, [asPath]);

  const loadScripts = async (scripts: string[]) => {
    for (const src of scripts) {
      if (!loadedScripts.current.has(src)) {
        await loadScript(src);
        loadedScripts.current.add(src);
      }
    }
  };

  const loadScript = (src: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      // Check if the script is already added
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.body.appendChild(script);
      scriptRefArr.current.push({ url: src, script });
    });
  };

  const removeScripts = () => {
    scriptRefArr.current.forEach((item) => {
      if (document.body.contains(item.script)) {
        document.body.removeChild(item.script);
      }
    });

    scriptRefArr.current = [];
    loadedScripts.current.clear(); // Clear the set of loaded scripts
  };

  if (!shouldRender) return null;

  return null; // No visible UI is rendered
};

export default ScriptLoader;
