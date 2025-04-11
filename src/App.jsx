// src/App.js
import React from "react";
import { ItemListContainer } from "./components/ItemListContainer";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import  { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { PageContent } from "./components/PageContent";
import { CheckoutPage } from "./components/CheckoutPage";
import { AnimatePresence } from "framer-motion";
// import { uploadProducts } from "./uploadProducts";
// import { useEffect } from "react";


export const App = () => {
  
  
  // useEffect(() => {
  //   uploadProducts(); // Llamamos la función para cargar los productos
  // }, []);

// App.jsx
const location = useLocation();

  
return (

    <div className="flex flex-col ">
      <Header />
          
      <PageContent>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </AnimatePresence>
      </PageContent>

       <Footer />
    </div>
  );
}