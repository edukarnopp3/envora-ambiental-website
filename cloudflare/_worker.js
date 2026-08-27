import app from "./index.js";

const publicAssets = new Set([
  "/favicon.svg",
  "/favicon.ico",
  "/favicon-32x32.png",
  "/favicon-16x16.png",
  "/apple-touch-icon.png",
  "/envora-logo-horizontal-dark.svg",
  "/envora-logo-horizontal.svg",
  "/envora-mark.svg",
  "/file.svg",
  "/globe.svg",
  "/og.png",
  "/window.svg",
]);

export default {
  async fetch(request, env, context) {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith("/_next/") || publicAssets.has(pathname)) {
      return env.ASSETS.fetch(request);
    }

    return app.fetch(request, env, context);
  },
};
