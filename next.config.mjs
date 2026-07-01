/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produces a fully static site in `out/` on `npm run build`.
  // Works out-of-the-box on Vercel and any static host.
  output: "export",

  // next/image optimization requires a running server, which a static
  // export does not have — so we serve images as-is. Local SVG/PNG
  // placeholders below are already lightweight.
  images: {
    unoptimized: true,
  },

  // Emit `about/index.html` style paths so links resolve on static hosts.
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
