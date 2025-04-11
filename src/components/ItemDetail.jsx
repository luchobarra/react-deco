// import { Button } from "./Button";
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";


// export const ItemDetail = ({ product }) => {
//   const { addToCart } = useContext(CartContext);

//   const handleAddToCart = () => {
//     addToCart(product); // Esto realmente lo agrega al contexto
//     console.log(`Producto agregado al carrito: ${product.name}`);
//   };

//   return (
//     <div className="p-6">
//       <img src={product.image} alt={product.name} className="w-64 mx-auto mb-4" />
//       <h2 className="text-2xl font-semibold">{product.name}</h2>
//       <p className="text-gray-600">{product.description}</p>
//       <p className="text-lg font-bold mt-2">${product.price}</p>
//       <Button text="Agregar al carrito" onClick={handleAddToCart} className="mt-4" />
//     </div>
//   );
// };

import { Button } from "./Button";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { PageWrapper } from "./FramerMotion"


  export const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    
    const handleAddToCart = () => {
        addToCart({ ...product, quantity: 1 }); 
        console.log(`Producto agregado al carrito: ${product.name}`);
    };


  return (
    <PageWrapper>  
      <div className="max-w-6xl m-18 bg-[#FAF1E6] rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Imagen del producto */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info del producto */}
          <div className="flex flex-col justify-between w-full md:w-1/2 h-auto md:h-[500px] space-y-6 p-4">
            
            {/* Título y descripción */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-gray-700 text-base mt-4">{product.description}</p>
            </div>

            {/* Precio y botón */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Precio:</p>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-semibold text-gray-900">${product.price}</p>
                <Button
                  text="Agregar al carrito"
                  onClick={handleAddToCart}
                  className="bg-[#99BC85] text-gray-900 text-base font-semibold px-6 py-2 rounded-md hover:bg-[#889E73] transition-all duration-200"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </PageWrapper>
  );
};