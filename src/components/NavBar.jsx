// src/components/NavBar.js
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <nav className="mb-8 bg-gray-900 text-white p-6 flex justify-between items-center">
      {/* Brand - Redirige a "/" */}
      <Link to="/" className="text-2xl font-bold hover:text-gray-400 transition">
        UrbanStyle
      </Link>

      {/* Categorías (links) a la derecha */}
      <div className="flex space-x-6 ml-auto">
        <Link 
          to="/category/smartphones" 
          className="text-lg hover:text-gray-300 hover:underline underline-offset-4 transition-all ease-in-out duration-300 transform hover:scale-110"
        >
          Smartphones
        </Link>
        <Link 
          to="/category/laptops" 
          className="text-lg hover:text-gray-300 hover:underline underline-offset-4 transition-all ease-in-out duration-300 transform hover:scale-110"
        >
          Laptops
        </Link>
        <Link 
          to="/category/fragrances" 
          className="text-lg hover:text-gray-300 hover:underline underline-offset-4 transition-all ease-in-out duration-300 transform hover:scale-110"
        >
          Perfumes
        </Link>
      </div>

      {/* CartWidget a la derecha */}
      <CartWidget />
    </nav>
  );
};
