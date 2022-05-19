/** @type {import('next').NextConfig} */

const locales = ["es-ES", "en-US"];
const defaultLocale = "es-ES";
  
const nextConfig = {
  env: {  
    API_URL: process.env.API_URL,
    URL_HOST:process.env.HOST|| "http://localhost:8081",
    URL_SERVER: "",
  },
  reactStrictMode: true,
  i18n: {
    locales: locales,
    defaultLocale: defaultLocale,
  },
}

module.exports = nextConfig



