import React, { useState } from "react";
import "./IniciarSesion.css";

const IniciarSesion = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ backgroundColor: "#E5E1DA", minHeight: "100vh", padding: "20px" }}>
      <div className="login-container">
        <h2>Inicia Sesión</h2>
        <form method="POST">
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
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            minLength="10"
            maxLength="16"
            placeholder="Ingresa su contraseña"
            pattern="[A-Za-z0-9]+"
            title="Ingrese su Contraseña (Ingrese numeros y letras)"
            required
          />

          {/* Mostrar Contraseña */}
          <div className="show-password">
            <input
              type="checkbox"
              id="showPassword"
              onChange={togglePasswordVisibility}
            />
            <label htmlFor="showPassword">Mostrar contraseña</label>
          </div>

          <button type="submit">Iniciar Sesión</button>
        </form>

        <div className="link_iniciosesion a">
          <a href="/olvidar-contrasena">¿Olvidaste tu contraseña?</a>
        </div>

        <div className="link_iniciosesion">
          <p>¿No tienes cuenta? <a href="/registro">Regístrate</a></p>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
