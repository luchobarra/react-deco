import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { cart, removeFromCart, totalPrice, clearCart } = useContext(CartContext);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <p>{item.name} x {item.quantity}</p>
              <p>${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Eliminar</button>
            </div>
          ))}
          <p className="font-bold mt-4">Total: ${totalPrice}</p>
          <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 mt-4">Vaciar Carrito</button>
        </>
      )}
    </div>
  );
};