import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: Next blocks dev-server scripts for any host except localhost, so
  // a phone opening http://192.168.1.x:3000 got HTML/CSS but no JavaScript
  // (buttons dead). This allows devices on the home network. No effect in production.
  allowedDevOrigins: ["192.168.1.*"],
};

export default nextConfig;
