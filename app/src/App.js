import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./main";
import { MenuPage } from "./menu";
import { CustomisePage } from "./customize";
import { CartProvider } from "./cartcontext"; // Import CartProvider

function MyApp() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/customize" element={<CustomisePage />} />
          {/* Add other routes */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default MyApp;
