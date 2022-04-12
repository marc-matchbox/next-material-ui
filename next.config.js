/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@mui/base",
  "@mui/material",
  "@mui/system",
  "@mui/icons-material", // If @mui/icons-material is being used
]);
const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
    // Remove all consoles except console.error
    // removeConsole: {
    //   exclude: ['error'],
    // },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@mui/styled-engine": "@mui/styled-engine-sc",
    };
    return config;
  },
});

module.exports = nextConfig;
