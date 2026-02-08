import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import Product from "./pages/Product.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Home from "./Home.jsx";
console.log("asdfasdf");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
