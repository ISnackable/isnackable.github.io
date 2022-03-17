"use strict";

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const headers = async () => {
  return [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff"
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN"
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block"
        }
      ]
    }
  ];
};

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer(
  withPWA({
    i18n: {
      locales: ["en"],
      defaultLocale: "en"
    },
    reactStrictMode: true,
    pwa: {
      dest: "public",
      runtimeCaching,
      buildExcludes: [/middleware-manifest.json$/],
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development"
    },
    headers,
    images: {
      domains: ["cdn.sanity.io"]
    },
    webpack: (config, { dev, isServer }) => {
      // Replace React with Preact only in client production build.
      // Preact breaks some component (RadixUI ScrollArea)
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: "preact/compat",
          "react-dom/test-utils": "preact/test-utils",
          "react-dom": "preact/compat",
          "react/jsx-runtime": "preact/jsx-runtime"
        });
      }

      return config;
    }
  })
);

module.exports = nextConfig;
