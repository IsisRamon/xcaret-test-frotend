/** @type {import('next').NextConfig} */

const locales = ["es-MX", "en-US"];
const defaultLocale = "es-MX";

const nextConfig = {
  env: {  
    URL_HOST:process.env.HOST|| "http://localhost:8081",
    URL_SERVER: "https://api-ecommerce-prueba.herokuapp.com/",
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      ...locales
        .filter((locale) => locale !== defaultLocale)
        .map((locale) => [
          { source: `/${locale}{/}?`, destination: "/" },
          { source: `/${locale}/:path*`, destination: "/:path*" },
        ])
        .reduce((acc, cur) => [...acc, ...cur], []),
    ];
  },
  async redirects() {
    return [
      {
        source: `/${defaultLocale}{/}?`,
        destination: "/",
        permanent: true,
      },
      {
        source: `/${defaultLocale}/:path*`,
        destination: "/:path*",
        permanent: true,
      },
    ];
  }
}

module.exports = nextConfig


