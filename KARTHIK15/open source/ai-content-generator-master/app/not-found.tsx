'use client';
import PublicHeader from '@/components/public-header';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (<>
  <PublicHeader/>
    <div className="min-h-screen bg-gradient-to-b bg-[#111827] flex items-center justify-center px-4">
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
            The page you're looking for doesn't exist.
          </h2>
          
          <p className="text-lg text-white mb-6">
            Looks like you've wandered into unknown territory. Let's get you back to safety!
          </p>
          
          <Link href="/">
            <button className="hover:bg-white hover:text-[#704EF8] font-medium px-4 py-2 rounded-lg bg-[#704EF8] text-white transition-colors duration-300">
              Go back to homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
            </>
  );
};

export default NotFound;
