/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    images: {
        domains: ['assets.acme.com', 'unicaroverse.com', 'media.licdn.com', 'iili.io', 'panamacoffeeclub.com', 'artesanosdepanama.com', 'static.tvn-2.com'],
    },
};

export default nextConfig;
