import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"; // Para el botón de "Ver Detalle"

export const ItemDetail = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();  // Obtén el ID del producto de la URL

  useEffect(() => {
    const url = `https://dummyjson.com/products/${id}`;  // Ruta para obtener los detalles del producto por ID

    // Hacer la petición a la API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);  // Guardamos el producto con los detalles
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando el producto:", error);
        setLoading(false);
      });
  }, [id]);  // Se vuelve a ejecutar cada vez que cambie el ID del producto

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        // Placeholder para los detalles del producto mientras se carga
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto flex flex-col animate-pulse">
          <div className="bg-gray-300 w-full h-56 rounded-md mb-4"></div> {/* Imagen Placeholder */}
          <div className="bg-gray-300 w-full h-8 rounded-md mb-2"></div> {/* Título Placeholder */}
          <div className="bg-gray-300 w-full h-6 rounded-md mb-2"></div> {/* Descripción Placeholder */}
          <div className="bg-gray-300 w-24 h-6 rounded-md mb-4"></div> {/* Precio Placeholder */}
          <div className="bg-gray-300 w-full h-10 rounded-md"></div> {/* Botón Placeholder */}
        </div>
      ) : (
        producto && (
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
            <img
              src={producto.thumbnail}
              alt={producto.title}
              className="w-full h-56 object-contain rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">{producto.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{producto.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-gray-800">${producto.price}</span>
              <Link
                to={`/cart`}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 transition"
              >
                Agregar al carrito
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
};


