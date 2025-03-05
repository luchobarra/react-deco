// src/components/ItemListContainer.js

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="bg-gray-800 text-white p-6 mt-4 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;