import app from "./index.js";

const publicAssets = new Set([
  "/favicon.svg",
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
