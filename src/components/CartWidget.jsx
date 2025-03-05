// src/components/CartWidget.js
import { FaShoppingCart } from "react-icons/fa"; // Importamos un icono de carrito

const CartWidget = () => {
  return (
    <div className="relative">
      {/* Ícono del carrito con efectos de hover y clic */}
      <FaShoppingCart
        className="text-2xl cursor-pointer text-[#EEEEEE] relative transition-all duration-200
                   hover:text-[#FAF3E0] hover:after:w-full hover:after:bg-[#FAF3E0]
                   after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                   after:transition-all after:duration-300 active:scale-95"
      />

      {/* Notificación con el número hardcodeado */}
      <span className="absolute -top-2 -right-2 bg-[#76ABAE] text-white text-xs font-bold px-2 py-1 rounded-full">
        3
      </span>
    </div>
  );
};

export default CartWidget;