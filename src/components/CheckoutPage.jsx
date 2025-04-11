import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { OrderConfirmationModal } from "./OrderConfirmationModal";
import { PageWrapper } from "./FramerMotion"

export const CheckoutPage = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simula procesamiento de pedido
    setTimeout(() => {
      setIsProcessing(false);
      setIsModalOpen(true);
    }, 2000);
  };

  return (
        <PageWrapper>   
            <div className="max-w-7xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Finalizar compra</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Formulario */}
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow space-y-4">
                <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-3"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-3"
                />
                <textarea
                    name="address"
                    placeholder="Dirección de envío"
                    value={form.address}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-3"
                />
                <h3 className="text-xl font-semibold mt-6">Datos de la tarjeta</h3>
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Número de tarjeta"
                    value={form.cardNumber}
                    onChange={handleChange}
                    required
                    className="w-full border rounded p-3"
                />
                <div className="flex gap-4">
                    <input
                    type="text"
                    name="expiry"
                    placeholder="MM/AA"
                    value={form.expiry}
                    onChange={handleChange}
                    required
                    className="w-1/2 border rounded p-3"
                    />
                    <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={form.cvv}
                    onChange={handleChange}
                    required
                    className="w-1/2 border rounded p-3"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#99BC85] text-gray-900 font-semibold py-3 rounded hover:bg-[#889E73]"
                    disabled={isProcessing}
                >
                    {isProcessing ? "Procesando pedido..." : "Confirmar pedido"}
                </button>
                </form>

                {/* Carrito */}
                <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Resumen del pedido</h3>
                <ul className="divide-y divide-gray-200">
                    {cart.map((item) => (
                    <li key={item.id} className="flex py-4 gap-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                        <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                            {item.quantity} x ${item.price}
                        </p>
                        </div>
                        <p className="font-semibold">${item.price * item.quantity}</p>
                    </li>
                    ))}
                </ul>
                <div className="flex justify-between mt-6 text-lg font-bold">
                    <p>Total:</p>
                    <p>${totalPrice}</p>
                </div>
                </div>
            </div>

            {/* Modal de confirmación */}
            <OrderConfirmationModal
                isOpen={isModalOpen}
                onClose={() => {
                setIsModalOpen(false);
                clearCart();
                navigate("/");
                }}
            />
            </div>
        </PageWrapper>
    );
    
};