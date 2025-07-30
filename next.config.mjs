// next.config.mjs or next.config.js
import { withContentlayer } from "next-contentlayer";

/** @type {import("next").NextConfig} */
const config = {
  
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "res.cloudinary.com" },
    ],
  },
};

export default withContentlayer(config);
