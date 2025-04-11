// components/OrderConfirmationModal.jsx
import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const OrderConfirmationModal = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Simula procesamiento del pedido
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer); 
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();        // Cierra el modal
    navigate("/");    // Redirige al home
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-white rounded-xl shadow-xl p-6 text-center">
          {isLoading ? (
            <>
              <Dialog.Title className="text-xl font-bold text-gray-800">Procesando pedido...</Dialog.Title>
              <p className="mt-4 text-gray-600">Por favor, espera un momento.</p>
              <div className="mt-6 flex justify-center">
                <div className="w-10 h-10 border-4 border-[#99BC85] border-t-transparent rounded-full animate-spin"></div>
              </div>
            </>
          ) : (
            <>
              <Dialog.Title className="text-xl font-bold">¡Gracias por tu compra!</Dialog.Title>
              <Dialog.Description className="text-gray-600 mt-2">
                Tu pedido ha sido recibido y está siendo procesado.
              </Dialog.Description>
              <button
                onClick={handleClose}
                className="mt-6 inline-block bg-[#99BC85] text-white px-4 py-2 rounded hover:bg-[#889E73]"
              >
                Cerrar
              </button>
            </>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};