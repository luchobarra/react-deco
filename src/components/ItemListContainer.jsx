import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./Itemlist";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();  // Obtén la categoría de la URL

  useEffect(() => {
    let url = "https://dummyjson.com/products";  // Ruta para obtener todos los productos

    if (category) {
      url = `https://dummyjson.com/products/category/${category}`;  // Filtra por categoría si existe
    }

    // Hacer la petición a la API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProductos(data.products);  // Asegúrate de acceder a los productos correctamente
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando productos:", error);
        setLoading(false);
      });
  }, [category]);  // Se vuelve a ejecutar cada vez que cambie la categoría

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin border-4 border-t-4 border-primary rounded-full w-16 h-16"></div>
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};
