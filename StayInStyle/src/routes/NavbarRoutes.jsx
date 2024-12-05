import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from '../pages/Home/Home';
import Registro from '../pages/Registro/Registro';
import IniciarSesion from '../pages/iniciarSesion/iniciarSesion'; // Cambiado a IniciarSesion
import Administrador from '../pages/Administrador/Administrador';
import Carrito from '../pages/Usuarios/Carrito/Carrito';
import Categoriash from "../pages/Usuarios/Categorias/Categoriash/Categoriash"; // Cambiado a Categoriah
import Categoriasm from "../pages/Usuarios/Categorias/Categoriasm/Categoriasm"; // Cambiado a Categoriasm

const NavbarRoutes = () => {
  return (
    <Routes>
      {/* Ruta para la página principal */}
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />

      {/* Ruta para el registro */}
      <Route path="/Registro" element={<Registro />} />

      {/* Ruta para iniciar sesión */}
      <Route path="/iniciarSesion" element={<IniciarSesion />} />

      {/* Ruta para el administrador */}
      <Route path="/Administrador" element={<Administrador />} />

      {/* Ruta para el carrito de compras */}
      <Route path="/Usuarios/Carrito" element={<Carrito />} />

      {/* Rutas para categorías */}
      <Route path="/Usuarios/Categorias/Categoriash" element={<Categoriash />} />
      <Route path="/Usuarios/Categorias/Categoriasm" element={<Categoriasm />} />
    </Routes>
  );
};

export default NavbarRoutes;
