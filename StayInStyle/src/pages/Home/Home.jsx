import React from "react";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import "./Home.css";

const Home = () => {
  const productos = [
    { nombre: "Chaqueta cargo 610", precio: "110.000 mil pesos", img: "/src/assets/imagenes/chaqueta_cargo_610.jpg" },
    { nombre: "Chaqueta ovejera blanca", precio: "105.000 mil pesos", img: "/src/assets/imagenes/chaqueta_ovejera_blanca.jpeg" },
    { nombre: "Camiseta Choize", precio: "90.000 mil pesos", img: "/src/assets/Imagenes/camiseta choize.jpeg" },
    { nombre: "Camisa boxy fit", precio: "100.000 mil pesos", img: "/src/assets/Imagenes/camiseta bbs.jpeg" },
  ];

  return (
    <div style={{ backgroundColor: "#E5E1DA" }}>
      {/* Barra de búsqueda */}
      <div className="busqueda">
        <input type="text" placeholder="Buscar productos..." />
        <button>Buscar</button>
      </div>

      {/* Vitrina de productos */}
      <div className="vitrina">
        {productos.map((producto, index) => (
          <div className="producto" key={index}>
            <img src={producto.img} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
          </div>
        ))}
      </div>

      {/* Sección de videos */}
      <div  className="video-section">
        <CustomCarousel />
        
      </div>
    </div>
  );
  
};


export default Home;
