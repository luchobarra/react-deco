// import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore"; 

// const db = getFirestore();

// // Variable de control para evitar llamadas dobles
// let alreadyUploaded = false;

// export const uploadProducts = async () => {
//   try {
//     if (alreadyUploaded) {
//       console.log("⚠️ La función ya fue ejecutada, evitando duplicados.");
//       return; // Si ya se ejecutó, detenemos la ejecución.
//     }

//     alreadyUploaded = true; // Marcamos que ya se ejecutó una vez.

//     const apiUrl = 'https://api.escuelajs.co/api/v1/products';
    
//     const response = await fetch(apiUrl);
//     const products = await response.json();

//     const productsCollection = collection(db, "products");

//     for (const product of products) {
//       console.log('🔍 Producto recibido:', product);

//       if (product.id && product.title && product.description && product.price && product.images?.length > 0) {
        
//         // Verificamos si el producto ya existe en Firestore por su idPlatzi
//         const q = query(productsCollection, where("idPlatzi", "==", product.id));
//         const querySnapshot = await getDocs(q);

//         if (querySnapshot.empty) {
//           await addDoc(productsCollection, {
//             idPlatzi: product.id, // ID único de la API Platzi
//             name: product.title,
//             description: product.description,
//             price: product.price,
//             image: product.images[0],
//             category: product.category?.name || "Sin categoría"
//           });
//           console.log(`✅ Producto agregado: ${product.title}`);
//         } else {
//           console.log(`⚠️ Producto ya existe, no se agregó: ${product.title}`);
//         }
//       } else {
//         console.log(`⚠️ Producto incompleto, no se agregó:`, product);
//       }
//     }

//     console.log("🚀 Subida de productos completada.");
//   } catch (error) {
//     console.error("❌ Error al obtener o subir productos:", error);
//   }
// };

// uploadProducts();