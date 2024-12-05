import React from "react";
import "./Administrador.css";

const Administrador = () => {
  return (
    <div className="admin-container">
      <h2>Gestión de Stock</h2>
      <div className="admin-options">
        <button className="admin-btn">Gestión de usuarios</button>
        <button className="admin-btn">Gestion de productos</button>
        <button className="admin-btn">Gestion de pedido</button>
      </div>
    </div>
  );
};

export default Administrador;



