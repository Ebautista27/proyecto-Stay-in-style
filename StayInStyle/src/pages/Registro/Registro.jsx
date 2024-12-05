import React from "react";
import "./Registro.css";

const Registro = () => {
  return (
    <div style={{ backgroundColor: "#E5E1DA", minHeight: "100vh", padding: "20px" }}>
    <div className="registro-container">
      <h2>Regístrate</h2>
      <form action="guardar_registro.php" method="POST">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Ingrese su nombre"
          maxLength="30"
          pattern="[a-zA-Z]+"
          title="Ingresa su nombre"
          required
        />

        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingresa su correo"
          maxLength="30"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Ingresa su correo electrónico (ejemplo@dominio.org,.com,.mil.edu)"
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          minLength="10"
          maxLength="20"
          placeholder="Ingresa su contraseña"
          pattern="[A-Za-z0-9]+"
          title="Ingrese su Contraseña (Ingrese numeros y letras)"
          required
        />

        <label htmlFor="direccion">Dirección</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          placeholder="Ingresa su dirección"
          maxLength="50"
          pattern="[a-zA-Z0-9\\s,.-#]+"
          title="Ingresa su dirección (Ejemplo: Calle 123b sur #2a98)"
          required
        />

        <label htmlFor="telefono">Número de celular</label>
        <input
          type="text"
          id="num_cel"
          name="num_cel"
          maxLength="10"
          placeholder="Ingreses su número de celular"
          pattern="[0-9]*"
          title="Ingresa su número de celular (solo números)"
          required
        />

        <button type="submit">Registrarse</button>
      </form>
      <div className="link_registro">
        <p>
          ¿Ya tienes una cuenta creada? <a href="/iniciarSesion">Inicia Sesión</a>
        </p></div>
      </div>
    </div>
  );
};

export default Registro;
