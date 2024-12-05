import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NavbarRoutes from "./routes/NavbarRoutes";
import Footer from "./components/Footer/Footer"; // Importar el Footer
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      {/* Renderizar el Navbar */}
      <Navbar />
      
      {/* Renderizar las rutas de la aplicación */}
      <div className="content">
        <NavbarRoutes />
      </div>

      {/* Renderizar el Footer */}
      <Footer />
    </Router>
  );
}

export default App;
