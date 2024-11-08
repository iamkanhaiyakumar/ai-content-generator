import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Loading from '@/public/LoadingPage.png';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // Adjust the speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black'>
      <div className='w-24 h-24'>
        <Image
          src={Loading}
          alt='Loading'
          className='animate-bounce transition ease-in-out'
          width={96} // Adjust width
          height={96} // Adjust height
        />
      </div>

      <div className='mt-6 w-3/4 max-w-xs'>
        <div className='w-full text-white rounded-full h-2.5'>
          <div
            className='bg-[#704ef8] h-2.5 rounded-full text-white'
            style={{ width: `${progress}%`, color:'white' }}
          ></div>
        </div>
        <p className='text-center mt-2 text-gray-700'>{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingPage;
