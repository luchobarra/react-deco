import { useNavigate } from "react-router-dom";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartModal = ({ open, setOpen }) => {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handleFinishPurchase = () => {
    setOpen(false); // ✅ Cierra el modal
    navigate("/checkout"); // ✅ Redirige al checkout
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md transform bg-white shadow-xl">
              <div className="flex h-full flex-col overflow-y-scroll">
                
                {/* Header */}
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Carrito de Compras
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        onClick={() => setOpen(false)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  {/* Productos */}
                  <div className="mt-8">
                    <div className="flow-root">
                      {cart.length === 0 ? (
                        <p className="text-gray-500">Tu carrito está vacío.</p>
                      ) : (
                        <ul className="-my-6 divide-y divide-gray-200">
                          {cart.map((product) => (
                            <li key={product.id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="ml-4 flex flex-1 flex-col">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>{product.name}</h3>
                                  <p className="ml-4">
                                    ${product.price * product.quantity}
                                  </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  Cantidad: {product.quantity}
                                </p>
                                <div className="flex justify-end mt-2">
                                  <button
                                    onClick={() => removeFromCart(product.id)}
                                    className="text-red-500 hover:underline text-sm"
                                  >
                                    Eliminar
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Total</p>
                      <p>${totalPrice}</p>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={handleFinishPurchase}
                        className="w-full bg-[#99BC85] text-gray-900 font-semibold py-3 rounded-md hover:bg-[#889E73]"
                      >
                        Finalizar Compra
                      </button>
                    </div>
                    <div className="mt-6 text-center text-sm text-gray-500">
                      <button
                        onClick={() => setOpen(false)}
                        className="text-black font-medium hover:text-gray-500"
                      >
                        Seguir comprando →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};