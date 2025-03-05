// src/components/NavBar.js
import CategoriesList from "./CategoriesList";
import CartWidget from "./CartWidget"; // Importamos el CartWidget

const NavBar = () => {
  return (
    <nav className="bg-[#222831] text-white p-5 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-semibold tracking-wide">DecoMuebles</h1>

      <div className="flex gap-12 items-center"> {/* Se aumentó el gap */}
        <CategoriesList />
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;