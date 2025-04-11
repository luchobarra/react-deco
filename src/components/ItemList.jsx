// import { ItemCard } from "./ItemCard";


// export const ItemList = ({ products, loading }) => {
//   if (loading) return <p>Cargando productos...</p>;

//   return (
//     <div className="grid grid-cols-4 gap-4">
//       {products.map(product => (
//         <ItemCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

import { ItemCard } from "./ItemCard";
import { PageWrapper } from "./FramerMotion";

export const ItemList = ({ products }) => {


  return (
        <PageWrapper>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-18 py-12">
                {products.map((product) => (
                    <ItemCard key={product.id} product={product} />
                ))}
            </div>
        </PageWrapper>
    );
};