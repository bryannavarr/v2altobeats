/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/about",
      },
    ];
  },
};

module.exports = {
  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "altobeats-assets.s3.us-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "i1.sndcdn.com",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
      {
        protocol: "https",
        hostname: "1.bp.blogspot.com",
      },
      {
        protocol: "https",
        hostname: "blackouthiphop.com",
      },
      {
        protocol: "https",
        hostname: "insomniacmagazine.com",
      },
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "urbanvault.co.uk",
      },
    ],
  },
  eslint: { ignoreDuringBuilds: true },
};
