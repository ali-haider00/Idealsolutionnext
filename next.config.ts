import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
      },
      {
        protocol: 'https',
        hostname: 'www.slideteam.net',
      },
      {
        protocol: 'https',
        hostname: 'pfrenewables.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'etakeawaymax.co.uk',
      },
      {
        protocol: 'https',
        hostname: 's.yimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.telegraph.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'r-evpower.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'imageio.forbes.com',
      },
      {
        protocol: 'https',
        hostname: 'www.world-kinect.com',
      },
      {
        protocol: 'https',
        hostname: 'img.uswitch.com',
      },
      {
        protocol: 'https',
        hostname: 'energyintel.brightspotcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.giscloud.com',
      },
      {
        protocol: 'https',
        hostname: 'www.woodmac.com',
      },
      {
        protocol: 'https',
        hostname: 'www.a1energy.net',
      },
      {
        protocol: 'https',
        hostname: 'eco-energ.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
      {
        protocol: 'https',
        hostname: 'www.ey.com',
      },
      {
        protocol: 'https',
        hostname: 'craftycounsel.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'energysavingtrust.org.uk',
      },
      {
        protocol: 'https',
        hostname: 'd1eipm3vz40hy0.cloudfront.net',
      },
    ],
  },
};

export default nextConfig;
