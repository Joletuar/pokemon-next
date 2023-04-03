/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['raw.githubusercontent.com'], // Especificamos los dominios de los cuales next podrá obtener imagenes
    },
};

module.exports = nextConfig;
