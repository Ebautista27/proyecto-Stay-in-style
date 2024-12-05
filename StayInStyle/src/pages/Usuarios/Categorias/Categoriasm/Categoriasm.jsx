import React from "react";
import "./Categoriasm.css"; // Usamos el mismo CSS de Hombres

const Categoriasm = () => {
  const productos = [
    {
      nombre: "Camisa Overzice 97",
      precio: "75.000 mil pesos",
      imagen: "/imagenes/Camisa_M_1.jpg",
      enlace: "/detalle_producto_camisa_arena97",
    },
    {
      nombre: "Camisa Colmillos",
      precio: "80.000 mil pesos",
      imagen: "/imagenes/Camisa_M_2.jpg",
      enlace: "/detalle_producto_camisa_gris-negra",
    },
    {
      nombre: "Camisa SideStreet",
      precio: "90.000 mil pesos",
      imagen: "/imagenes/Camisa_M_3.jpg",
      enlace: "/detalle_producto_camisa_negra_sidesteet",
    },
    {
      nombre: "Camisa Saint Tears",
      precio: "95.000 mil pesos",
      imagen: "/imagenes/Camisa_M_4.jpg",
      enlace: "/detalle_producto_camisa_negra_saint-tears",
    },
    {
      nombre: "Pantalón Anything",
      precio: "78.000 mil pesos",
      imagen: "/imagenes/pantalon_M_1.jpeg",
      enlace: "/detalle_producto_pantalonM_anything",
    },
    {
      nombre: "Cargo Morado",
      precio: "100.000 mil pesos",
      imagen: "/imagenes/Pantalon_M_3.jpg",
      enlace: "/detalle_producto_pantalonM_Cargo_Morado",
    },
    {
      nombre: "Shorts Cargo",
      precio: "60.000 mil pesos",
      imagen: "/imagenes/Pantalon_M_4.jpg",
      enlace: "/detalle_producto_pantalonetaM_Cargo",
    },
    {
      nombre: "Jeans Atractivos",
      precio: "90.000 mil pesos",
      imagen: "/imagenes/Pantalon_M_5.jpg",
      enlace: "/detalle_producto_pantalonM_Desteñido_llamas-Moradas",
    },
  ];

  return (
    <div style={{ backgroundColor: "#E5E1DA" }}>
    <div className="mujeres-container">
      <div className="busqueda">
        <form>
          <input type="text" placeholder="Buscar productos..." />
          <button type="submit">Buscar</button>
        </form>
      </div>
      <h2>Prendas destacadas</h2>
      <section className="vitrina">
        {productos.map((producto, index) => (
          <div className="producto" key={index}>
            <a href={producto.enlace}>
              <img src={producto.imagen} alt={producto.nombre} />
            </a>
            <h3>{producto.nombre}</h3>
            
            <p>Precio: {producto.precio}</p>
            
          </div>
        ))}
      </section>
    </div>
    </div>
  );
};

export default Categoriasm;
