import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./main";
import { MenuPage } from "./menu";
import { CustomisePage } from "./customize";
import { CartProvider } from "./cartcontext";
import CheckoutPage from "./checkout";

function MyApp() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/customize" element={<CustomisePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default MyApp;
