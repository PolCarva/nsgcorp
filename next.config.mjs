/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["nsgcorpcms.local", "https://nsgcorpcms.eyewatch.me/"], // Added here
    remotePatterns: [
      {
        protocol: "http",
        hostname: "nsgcorpcms.local",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "nsgcorpcms.eyewatch.me",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
