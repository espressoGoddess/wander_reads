/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        port: "",
        pathname: "/b/id/**",
      },
      {
        protocol: "http",
        hostname: "lgimages.s3.amazonaws.com",
        port: "",
        pathname: "/nc-md.gif",
      },
    ],
  },
  eslint: {
    dirs: ["components", "pages", "context", "types"],
  },
};
