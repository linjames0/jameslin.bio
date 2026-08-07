/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Prefer AVIF, then WebP. Vercel's image optimizer converts your R2
        // .jpg/.png files to these formats on the fly and resizes them per device.
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pub-78a5996a67444fb785f2e7d83efc5ab5.r2.dev',
            },
        ],
    },
};

export default nextConfig;
