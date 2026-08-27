"use client";

import { useEffect, useState } from "react";

export default function EnvoraSplash({ children }: { children: React.ReactNode }) {
  const [closing, setClosing] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.documentElement.classList.remove("splash-complete");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const closeTimer = window.setTimeout(() => setClosing(true), reducedMotion ? 80 : 900);
    return () => window.clearTimeout(closeTimer);
  }, []);

  useEffect(() => {
    if (!closing) return;
    const removeTimer = window.setTimeout(() => {
      document.documentElement.classList.add("splash-complete");
      setVisible(false);
    }, 200);
    return () => window.clearTimeout(removeTimer);
  }, [closing]);

  return (
    <>
      {visible && (
        <section id="splash" className={closing ? "fade-out" : ""} aria-label="Abertura da Envora Ambiental">
          <button className="splash-action" type="button" aria-label="Pular abertura e acessar o site" onClick={() => setClosing(true)}>
            <span className="logo-wrap">
              <svg id="leaf" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path className="leaf-outline" d="M100,10 C150,40 180,110 100,230 C20,110 50,40 100,10 Z" />
                <path className="leaf-fill" d="M100,10 C150,40 180,110 100,230 C20,110 50,40 100,10 Z" />
                <line className="leaf-vein" x1="100" y1="30" x2="100" y2="220" />
                <line className="leaf-vein leaf-vein-side" x1="100" y1="110" x2="60" y2="80" />
                <line className="leaf-vein leaf-vein-side" x1="100" y1="110" x2="140" y2="80" />
                <path className="drop" d="M100,235 C108,250 112,262 100,270 C88,262 92,250 100,235 Z" />
              </svg>
              <span className="wordmark">Envora Ambiental</span>
            </span>
            <span className="skip-hint">clique para continuar</span>
          </button>
        </section>
      )}
      <div id="site">{children}</div>
    </>
  );
}
