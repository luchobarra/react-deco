import { Link } from "react-router-dom";

export const ItemCard = ({ producto }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 flex flex-col h-full">
        <div className="w-full h-60 mb-4 flex justify-center items-center">
          <img
            src={producto.thumbnail}
            alt={producto.title}
            className="object-contain max-h-full"
          />
        </div>
        <h3 className="text-lg font-semibold mt-2">{producto.title}</h3>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-gray-700 font-bold">${producto.price}</p>
          <Link
            to={`/product/${producto.id}`}
            className="bg-gray-700 text-white py-2 px-4 rounded-md text-center hover:bg-gray-900 transition duration-300"
          >
            Ver Detalle
          </Link>
        </div>
      </div>
    );
};
  
  