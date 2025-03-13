// src/App.js
import React from "react";
import { ItemListContainer } from "./components/ItemListContainer";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import  { ItemDetailContainer } from "./components/ItemDetailContainer";


export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer/>
    </>
  );
}