/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['img.icons8.com', 'cdn-icons-png.flaticon.com']
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
