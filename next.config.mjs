/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['img.icons8.com', 'cdn-icons-png.flaticon.com']
    },
    env: {
        DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
    },
};

export default nextConfig;
