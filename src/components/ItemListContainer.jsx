import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/productsContext";
import { ItemList } from "./Itemlist";
import { PageWrapper } from "./FramerMotion"
import { SkeletonCard } from "./SkeletonCard";

export const ItemListContainer = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  const isLoading = products.length === 0;

  return (
    <PageWrapper>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <ItemList products={filteredProducts} />
      )}
    </PageWrapper>
  );
};
