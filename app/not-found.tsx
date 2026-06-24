'use client';
import Link from 'next/link';

/**
 * Custom 404 Not Found page.
 * 
 * IMPORTANT: This page must NOT import components that depend on Clerk
 * (e.g., PublicHeader with SignedIn/SignedOut/UserButton) because Next.js
 * pre-renders this page at build time, and Clerk requires its publishable
 * key to be available during pre-rendering. Using Clerk-dependent components
 * here will cause the build to fail with "Missing publishableKey" errors.
 */
const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#111827] flex flex-col">
      {/* Simple header without Clerk dependency */}
      <header className="w-full border-b border-gray-800 bg-gray-950/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">
              AI Content Generator
            </span>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-500"
          >
            Go Home
          </Link>
        </div>
      </header>

      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Left side image */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/confused-ai-robot-illustration-download-in-svg-png-gif-file-formats--server-storage-artificial-intelligence-database-pack-science-technology-illustrations-8990982.png?f=webp"
              alt="Not Found Illustration"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Right side content */}
          <div className="md:w-1/2">
            <h1 className="text-6xl font-bold text-white mb-4">
              Oops!
            </h1>
            
            <h2 className="text-2xl font-semibold text-white mb-4">
              The page you&apos;re looking for doesn&apos;t exist.
            </h2>
            
            <p className="text-lg text-white mb-6">
              Looks like you&apos;ve wandered into unknown territory. Let&apos;s get you back to safety!
            </p>
            
            <Link href="/">
              <button className="hover:bg-white hover:text-[#704EF8] font-medium px-4 py-2 rounded-lg bg-[#704EF8] text-white transition-colors duration-300">
                Go back to homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
