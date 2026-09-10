"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./conversion.module.css";

export default function ServiceFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let timer: ReturnType<typeof setTimeout>;
    let ready = false;
    let visible = false;
    let requested = false;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    function start() {
      if (!video || !ready || !visible || requested || motion.matches || connection?.saveData) return;
      requested = true;
      video.src = window.innerWidth < 900 || /2g|3g/.test(connection?.effectiveType ?? "") ? "/service-rio-mobile.mp4" : "/service-rio-desktop.mp4";
      void video.play().catch(() => setFailed(true));
    }
    function afterLoad() { timer = setTimeout(() => { ready = true; start(); }, 1200); }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) video.pause();
      else if (!requested) start();
    }, { threshold: 0.15 });
    observer.observe(video);
    if (document.readyState === "complete") afterLoad();
    else window.addEventListener("load", afterLoad, { once: true });
    return () => { clearTimeout(timer); observer.disconnect(); window.removeEventListener("load", afterLoad); };
  }, []);

  function play() {
    const video = videoRef.current;
    if (!video) return;
    // Manual playback remains available when autoplay is blocked or disabled.
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const lightweight = window.innerWidth < 900 || connection?.saveData || /(^|-)2g$|3g/.test(connection?.effectiveType ?? "");
    video.src = lightweight ? "/service-rio-mobile.mp4" : "/service-rio-desktop.mp4";
    setStarted(true);
    setFailed(false);
    void video.play().catch(() => { setStarted(false); setFailed(true); });
  }

  return <div className={styles.film}>
    {!started && <Image src="/hero-rio-poster.jpg" alt="Vista aérea de um rio entre áreas de floresta" fill sizes="(max-width: 800px) 100vw, 50vw" />}
    <video ref={videoRef} controls={started} autoPlay loop muted playsInline preload="none" onPlaying={() => setStarted(true)} aria-label="Paisagem de rio e floresta, vídeo ilustrativo sem áudio" style={{ visibility: started ? "visible" : "hidden" }} />
    {!started && <button onClick={play} type="button">{failed ? "Tentar reproduzir novamente" : "Reproduzir paisagem · 8 segundos"} <span aria-hidden="true">▷</span></button>}
  </div>;
}
