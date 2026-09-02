"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) video.pause();

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        video.pause();
      } else if (!userPaused && !reducedMotion.matches) {
        void video.play();
      }
    }, { threshold: 0.12 });

    observer.observe(video);
    return () => observer.disconnect();
  }, [userPaused]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setUserPaused(false);
      return;
    }

    video.pause();
    setUserPaused(true);
  }

  return (
    <>
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/hero-rio-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-poster"
        />
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-rio-poster.jpg"
        >
          <source
            src="/hero-rio-4k.mp4"
            type="video/mp4"
            media="(min-width: 2400px), (min-width: 1100px) and (min-resolution: 1.5dppx)"
          />
          <source src="/hero-rio.mp4" type="video/mp4" />
        </video>
      </div>
      <button
        type="button"
        className="hero-video-control"
        onClick={togglePlayback}
        aria-label={userPaused ? "Reproduzir vídeo de fundo" : "Pausar vídeo de fundo"}
      >
        {userPaused ? (
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7V5Zm6 0h4v14h-4V5Z" /></svg>
        )}
      </button>
    </>
  );
}
