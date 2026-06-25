"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// 1. Move your main script loading logic to an inner component
const ScriptLoaderInner = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams(); // 👈 Safe to use now inside Suspense
  
  const [shouldRender, setShouldRender] = useState(false);
  const scriptRefArr = useRef<{ url: string; script: HTMLScriptElement }[]>([]);
  const loadedScripts = useRef<Set<string>>(new Set());

  useEffect(() => {
    const condition = true;
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
  }, [pathname, searchParams]);

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
    loadedScripts.current.clear();
  };

  if (!shouldRender) return null;
  return null;
};

// 2. Export a wrapper that enforces the Next.js Suspense boundary requirement
const ScriptLoader = () => {
  return (
    <Suspense fallback={null}>
      <ScriptLoaderInner />
    </Suspense>
  );
};

export default ScriptLoader;
