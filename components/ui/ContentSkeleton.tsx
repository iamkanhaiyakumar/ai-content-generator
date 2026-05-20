const ContentSkeleton = () => {
  return (
    <div className="w-full mt-4 space-y-4 animate-pulse">
      
      <div className="h-5 bg-gray-700 rounded-md w-3/4"></div>

      <div className="h-4 bg-gray-700 rounded-md w-full"></div>

      <div className="h-4 bg-gray-700 rounded-md w-5/6"></div>

      <div className="h-4 bg-gray-700 rounded-md w-2/3"></div>

      <div className="h-24 bg-gray-800 rounded-xl mt-4"></div>

    </div>
  );
};

export default ContentSkeleton;