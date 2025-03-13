import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => {
            if (!res.ok) {
            throw new Error("No se pudo cargar el producto");
            }
            return res.json();
        })
        .then((data) => {
            setProducto(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="container mx-auto p-6">
        {loading ? (
            <p className="text-center text-xl text-gray-600">Cargando producto...</p>
        ) : error ? (
            <p className="text-center text-red-500">{error}</p>
        ) : (
            <ItemDetail producto={producto} />
        )}
        </div>
    );
};
