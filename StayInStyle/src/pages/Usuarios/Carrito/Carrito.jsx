import React, { useEffect, useState } from "react";
import "./Carrito.css";

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const [totalPrecio, setTotalPrecio] = useState(0);

  useEffect(() => {
    // Productos de ejemplo
    const productosEjemplo = [
      {
        nombre: "Chaqueta cargo 610",
        precio: 110,
        cantidad: 1,
        talla: "M",
        imagen: "/src/assets/Imagenes/chaqueta_cargo_610.jpg",
      },
      {
        nombre: "Camiseta Choize",
        precio: 90,
        cantidad: 2,
        talla: "L",
        imagen: "/src/assets/Imagenes/camiseta choize.jpeg",
      },
    ];

    setCarrito(productosEjemplo);

    // Calcular el total
    const total = productosEjemplo.reduce(
      (sum, producto) => sum + producto.precio * producto.cantidad,
      0
    );
    setTotalPrecio(total);
  }, []);

  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>
      <div className="carrito-items">
        {/* Mostrar productos en el carrito */}
        {carrito.length > 0 ? (
          carrito.map((producto, index) => (
            <div className="carrito-item" key={index}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                onError={(e) => (e.target.src = "/imagenes/default.jpg")} // Imagen por defecto si falla la carga
              />
              <div className="carrito-item-info">
                <h4>{producto.nombre}</h4>
                <p>Precio: {producto.precio} mil pesos</p>
                <p>Cantidad: {producto.cantidad}</p>
                {producto.talla && <p>Talla: {producto.talla}</p>}
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>
      {carrito.length > 0 && (
        <div className="carrito-total">
          <p>Total: {totalPrecio.toLocaleString("es-CO")} mil pesos</p>
          <button id="comprar-btn" onClick={() => alert("Compra realizada!")}>
            Comprar
          </button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
