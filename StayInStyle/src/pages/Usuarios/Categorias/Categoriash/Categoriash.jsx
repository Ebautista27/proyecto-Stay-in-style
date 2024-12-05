import React from "react";
import "./Categoriash.css";

const Categoriash = () => {
  const productos = [
    {
      nombre: "Camisa Overzice A3ORFEND",
      precio: "80.000 COP",
      imagen: "/imagenes/Camisa_H_4.jpg",
      enlace: "/detalle_producto_camisa_blanca_overzice",
    },
    {
      nombre: "Camisa Araña WPADF",
      precio: "95.000 COP",
      imagen: "/imagenes/Camisa_H_5.jpg",
      enlace: "/detalle_producto_camisa_negra_araña",
    },
    {
      nombre: "Camisa Overzice ATSOBER",
      precio: "85.000 COP",
      imagen: "/imagenes/Camisa_H_6.jpg",
      enlace: "/detalle_producto_camisa_blanca_llamas",
    },
    {
      nombre: "Camisa Overzice Sencilla",
      precio: "90.000 COP",
      imagen: "/imagenes/Camisa_h_7.jpg",
      enlace: "/detalle_producto_camisa_negra_clasica",
    },
    {
      nombre: "Camisa Overzice AW SPIKY HEAD",
      precio: "110.000 COP",
      imagen: "/imagenes/camiseta_ae.jpeg",
      enlace: "/detalle_producto_camisa_gris_AW_SPIKY_HEAD",
    },
    {
      nombre: "Camisa Overzice XOMOCLOTHES",
      precio: "98.000 COP",
      imagen: "/imagenes/camiseta_gris_bbs.jpeg",
      enlace: "/detalle_producto_camisa_blanca-gris_xomoclothes",
    },
    {
      nombre: "Camisa BlackStar",
      precio: "70.000 COP",
      imagen: "/imagenes/Camisa_H_2.jpg",
      enlace: "/detalle_producto_camisa_negra-blanco_blackstar",
    },
    {
      nombre: "Camisa Overizece Eterning",
      precio: "99.000 COP",
      imagen: "/imagenes/Camisa_H_3.jpg",
      enlace: "/detalle_producto_camisa_negra_eterning",
    },
  ];

  return (
    <div className="hombres-container">
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
  );
};

export default Categoriash;
