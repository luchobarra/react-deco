// src/components/NavBar.js
// import { Link } from "react-router-dom";
// import { CartWidget } from "./CartWidget";


// export const NavBar = () => {
  
//   return (
//     <nav>
//       <Link to="/">Todos</Link>
//       <Link to="/category/Electronics">Electrónica</Link>
//       <Link to="/category/Clothes">Ropa</Link>
//       <Link to="/category/Furniture">Muebles</Link>

//       {/* CartWidget a la derecha */}
//       <CartWidget />
//     </nav>
//   );
// };

import { NavLink, Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <nav className="bg-[#E4EFE7] shadow-md px-8 py-6 flex items-center justify-between">
      {/* Nombre de la tienda */}
      <div className="text-3xl font-bold text-gray-800 font-cinzel tracking-wide">
        <Link to="/" className="hover:text-[#3C6255] transition-colors duration-300">
          ArmoniaHaus
        </Link>
      </div>

      {/* Categorías + Carrito */}
      <div className="flex items-center space-x-10">
        {/* Categorías */}
        <div className="flex space-x-8 text-base font-bold">
          {[
            { to: "/category/Electronics", label: "Electrónica" },
            { to: "/category/Clothes", label: "Ropa" },
            { to: "/category/Furniture", label: "Muebles" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `pb-1 transition-all duration-300 ${
                  isActive
                    ? "text-black border-b-2 border-[#3C6255]"
                    : "text-gray-700 hover:text-[#3C6255] hover:border-b-2 hover:border-[#A6BB8D]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Carrito */}
        <div className="ml-4">
          <CartWidget />
        </div>
      </div>
    </nav>

  );
};
