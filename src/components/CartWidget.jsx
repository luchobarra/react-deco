// // src/components/CartWidget.js
//import { FaShoppingCart } from "react-icons/fa"; // Importe icono de carrito

// export const CartWidget = () => {
//   return (
//     <div className="relative">
//       {/* Ícono del carrito con efectos de hover y click */}
      

//       {/* Notificación con el número hardcodeado */}
//       <span className="mr-6 absolute -top-2 -right-2 bg-[#76ABAE] text-white text-xs font-bold px-2 py-1 rounded-full">
//         3
//       </span>
//     </div>
//   );
// };

// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// export const CartWidget = () => {
//   const { totalItems } = useContext(CartContext);

//   return (
//     <Link to="/cart" className="relative">
//       <FaShoppingCart className="text-3xl text-white hover:text-gray-400" />
//       {totalItems > 0 && (
//         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//           {totalItems}
//         </span>
//       )}
//     </Link>
//   );
// };

// import { FaShoppingCart } from "react-icons/fa";
// import { useState } from "react";
// import { CartModal } from "./CartModal";

// export const CartWidget = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <button onClick={() => setOpen(true)} className="relative">
//         <FaShoppingCart className="text-2xl text-white hover:text-gray-300" />
//         {/* Podés agregar contador si querés */}
//       </button>
//       <CartModal open={open} setOpen={setOpen} />
//     </>
//   );
// };

import { FaShoppingCart } from "react-icons/fa";
import { useState, useContext } from "react";
import { CartModal } from "./CartModal";
import { CartContext } from "../context/CartContext"; // Asegurate de tener esto

export const CartWidget = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);

  // Total de productos en el carrito
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative bg-[#FDFAF6] p-2 rounded-full hover:bg-[#FAF1E6] transition duration-300 shadow-md"
      >
        <FaShoppingCart className="text-xl text-black" />

        {/* Contador de productos */}
        {totalQuantity > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#99BC85] text-black text-xs font-semibold px-1.5 py-0.5 rounded-full shadow">
            {totalQuantity}
          </span>
        )}
      </button>

      <CartModal open={open} setOpen={setOpen} />
    </>
  );
};