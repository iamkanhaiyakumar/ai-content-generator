/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
      { protocol: 'https', hostname: 'img.icons8.com' },
      { protocol: 'https', hostname: 'cdn-icons-png.flaticon.com' },
      { protocol: 'https', hostname: 'cdni.iconscout.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
    env: {
        DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
    },
};

export default nextConfig;
