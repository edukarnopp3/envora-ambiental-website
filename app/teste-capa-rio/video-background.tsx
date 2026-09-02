"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../teste-capa/teste-capa.module.css";

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      videoRef.current?.pause();
    }
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setPaused(false);
      return;
    }

    video.pause();
    setPaused(true);
  }

  return (
    <>
      <video
        ref={videoRef}
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/teste-capa-rio-poster.jpg"
        aria-hidden="true"
      >
        <source src="/teste-capa-rio.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        className={styles.videoControl}
        onClick={togglePlayback}
        aria-label={paused ? "Reproduzir vídeo de fundo" : "Pausar vídeo de fundo"}
      >
        {paused ? (
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7V5Zm6 0h4v14h-4V5Z" /></svg>
        )}
      </button>
    </>
  );
}
