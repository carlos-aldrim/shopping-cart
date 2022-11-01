import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PagesRoutes } from "views/contansts/routes";
import { Products } from "views/pages/Products/Products";
import { Details } from "views/pages/Details";
import { Home } from "views/pages/Home";
import { Cart } from "views/pages/Cart";
import { Contact } from "views/pages/Contact";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PagesRoutes.products}
          element={<Products/>}
        />
        <Route
          path={PagesRoutes.details}
          element={<Details/>}
        />
        <Route
          path={PagesRoutes.home}
          element={<Home/>}
        />
        <Route
          path={PagesRoutes.cart}
          element={<Cart/>}
        />
        <Route
          path={PagesRoutes.contact}
          element={<Contact/>}
        />
      </Routes>
    </BrowserRouter>
  );
};