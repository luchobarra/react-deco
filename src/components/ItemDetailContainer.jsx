import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ItemDetail } from "./ItemDetail";
import { SkeletonItemDetail } from "./SkeletonItemDetail";
import { PageWrapper } from "./FramerMotion";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct({ id: productSnap.id, ...productSnap.data() });
        } else {
          console.log("⚠️ Producto no encontrado");
        }
      } catch (error) {
        console.error("Error obteniendo producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <PageWrapper>
      {loading || !product ? (
        <SkeletonItemDetail />
      ) : (
        <ItemDetail product={product} />
      )}
    </PageWrapper>
  );
};