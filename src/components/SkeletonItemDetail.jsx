export const SkeletonItemDetail = () => {
  return (
    <div className="max-w-6xl m-18 bg-[#FAF1E6] rounded-lg shadow-md animate-pulse">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* Imagen fantasma */}
        <div className="w-full md:w-1/2 h-[400px] md:h-[500px] bg-gray-300 rounded-md" />

        {/* Info fantasma */}
        <div className="flex flex-col justify-between w-full md:w-1/2 h-auto md:h-[500px] space-y-6 p-4">
          
          {/* Título y descripción */}
          <div className="space-y-4">
            <div className="h-8 w-3/4 bg-gray-300 rounded" />
            <div className="h-4 w-full bg-gray-300 rounded" />
            <div className="h-4 w-5/6 bg-gray-300 rounded" />
            <div className="h-4 w-2/3 bg-gray-300 rounded" />
          </div>

          {/* Precio y botón */}
          <div className="space-y-4">
            <div className="h-4 w-1/4 bg-gray-300 rounded" />
            <div className="flex items-center justify-between">
              <div className="h-8 w-1/3 bg-gray-300 rounded" />
              <div className="h-10 w-1/2 bg-gray-300 rounded" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};