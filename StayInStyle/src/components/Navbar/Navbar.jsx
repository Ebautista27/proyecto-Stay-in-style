import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <a className="logo" href="/">
        Stay in Style
      </a>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/IniciarSesion">Iniciar Sesión</a></li>
          <li><a href="/Registro">Registrarse</a></li>
          <li><a href="/Usuarios/Carrito">Carrito</a></li>

          <li>
            <a href="#">Categorías</a>
            <ul>
            <li><a href="/Usuarios/Categorias/Categoriash">Hombre</a></li>
            <li><a href="/Usuarios/Categorias/Categoriasm">Mujer</a></li>

            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
