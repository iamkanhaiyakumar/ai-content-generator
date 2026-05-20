function LoadingSkeleton() {
  return (
    <div className='space-y-4 animate-pulse'>

      <div className='h-6 bg-gray-300 rounded w-1/3'></div>

      <div className='space-y-3'>
        <div className='h-4 bg-gray-200 rounded'></div>
        <div className='h-4 bg-gray-200 rounded w-5/6'></div>
        <div className='h-4 bg-gray-200 rounded w-4/6'></div>
        <div className='h-4 bg-gray-200 rounded w-3/6'></div>
      </div>

      <div className='h-32 bg-gray-200 rounded'></div>

    </div>
  );
}

export default LoadingSkeleton;