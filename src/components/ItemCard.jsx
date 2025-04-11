//import { Link } from "react-router-dom";

// export  const ItemCard = ({ product }) => {
//     console.log("URL de la imagen:", product.image);
//     return (
//       <div className="border p-4 rounded shadow-lg">
//         <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//         <h2 className="text-lg font-bold">{product.name}</h2>
//         <p className="text-gray-600">{product.description}</p>
//         <p className="text-xl font-semibold text-green-500">${product.price}</p>
//       </div>
//     );
// };

// import { Link } from "react-router-dom";
// import { Button } from "./Button";

// export const ItemCard = ({ product }) => {
//   return (
//     <div className="p-4 border rounded-md shadow">
//       <img src={product.image} alt={product.name} className="w-40 mx-auto mb-2" />
//       <h3 className="font-semibold">{product.name}</h3>
//       <p className="text-gray-600">${product.price}</p>
//       <Link to={`/product/${product.id}`}>
//         <Button text="Ver Detalle" className="mt-2" />
//       </Link>
//     </div>
//   );
// };

import { Link } from "react-router-dom";
import { Button } from "./Button";

export const ItemCard = ({ product }) => {
  return (
    <div className="bg-[#FAF1E6] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-[420px] overflow-hidden">
      {/* Imagen más alta */}
      <div className="w-full h-[260px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition duration-300 group-hover:opacity-80"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between flex-grow px-4 py-2">
        {/* Título - una sola línea */}
        <h3 className="text-base font-semibold text-gray-900 text-left truncate overflow-ellipsis whitespace-nowrap">
          {product.name}
        </h3>

        {/* Parte inferior más compacta */}
        <div className="mt-auto pt-2">
       
            <p className="text-xs text-gray-500">Precio:</p>
          
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xl font-bold  text-[#1F2937]">${product.price}</p>
                </div>

                <Link to={`/product/${product.id}`}>
                <Button
                    text="Ver detalle"
                    className="text-sm bg-[#99BC85] text-gray-900 px-3 py-1 rounded-md hover:bg-[#889E73] transition-all duration-200"
                />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};