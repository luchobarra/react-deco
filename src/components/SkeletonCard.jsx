// SkeletonCard.jsx
export const SkeletonCard = () => {
    return (
      <div className="bg-gray-200 rounded-lg shadow-md p-4 animate-pulse w-full max-w-xs h-[350px]">
        <div className="bg-gray-300 h-40 w-full rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    );
};  