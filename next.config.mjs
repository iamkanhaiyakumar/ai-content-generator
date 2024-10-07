/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['cdn-icons-png.flaticon.com']
    },
    env: {
        DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
    },
};

export default nextConfig;
