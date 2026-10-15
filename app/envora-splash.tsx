"use client";

import { useEffect, useRef, useState } from "react";

const INTRO_DURATION_MS = 2850;
const FADE_DURATION_MS = 420;

export default function EnvoraSplash({ children }: { children: React.ReactNode }) {
  const [closing, setClosing] = useState(false);
  const [visible, setVisible] = useState(true);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.remove("splash-complete");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    closeTimer.current = window.setTimeout(
      () => setClosing(true),
      reducedMotion ? 500 : INTRO_DURATION_MS,
    );
    return () => {
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!closing) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const removeTimer = window.setTimeout(() => {
      document.documentElement.classList.add("splash-complete");
      setVisible(false);
    }, reducedMotion ? 0 : FADE_DURATION_MS);
    return () => window.clearTimeout(removeTimer);
  }, [closing]);

  function skipIntro() {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    setClosing(true);
  }

  return (
    <>
      {visible && (
        <section id="splash" className={closing ? "fade-out" : ""} aria-label="Abertura da Envora Ambiental">
          <button className="splash-action" type="button" aria-label="Pular abertura e acessar o site" onClick={skipIntro}>
            <span className="splash-logo" aria-hidden="true">
              <svg className="splash-mark" viewBox="0 0 64 132" xmlns="http://www.w3.org/2000/svg">
                <g className="splash-leaf">
                  <path className="leaf-fill" d="M32 2C13 12 3 30 3 51c0 20 11 37 29 49 18-12 29-29 29-49C61 30 51 12 32 2Z" />
                  <path className="leaf-outline" d="M32 2C13 12 3 30 3 51c0 20 11 37 29 49 18-12 29-29 29-49C61 30 51 12 32 2Z" />
                  <path className="leaf-vein" d="M32 13v76M32 53 9 43m23 10 23-10" />
                  <path className="drop" d="M32 105c-5 8-6 16 0 25 6-9 5-17 0-25Z" />
                </g>
                <g className="splash-gust">
                  <path d="M-29 39c8-5 16-5 23-2" />
                  <path d="M-34 52c10-4 18-4 26-1" />
                  <path d="M-27 65c7-3 13-3 20 0" />
                </g>
              </svg>
              <span className="splash-wordmark">
                <strong>Envora</strong>
                <span>Ambiental</span>
              </span>
            </span>
            <span className="skip-hint">clique para continuar</span>
          </button>
        </section>
      )}
      <div id="site">{children}</div>
    </>
  );
}
