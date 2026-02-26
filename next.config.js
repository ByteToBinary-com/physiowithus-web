/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  experimental: {
    optimizePackageImports: ["@radix-ui"],
  },
};

module.exports = nextConfig;
