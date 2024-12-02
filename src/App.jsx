

import "./css/App.css";
import img1 from "./imgs/rc1.jpg";
import whatsapp from "./imgs/descargar.png";


import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Servicios from "./components/servicios/Servicios";
import Header from "./components/header/Header";
import Tipos from "./components/tipos/Tipos";
import Licencias from "./components/licencias/Licencias";
import Clientes from "./components/clientes/Clientes";
import Contacto from "./components/contacto/Contacto";
import Tecnicas from "./components/tecnicas/Tecnicas";


function App() {

  return (
    <div className="containerApp">
      <Navbar />

      <Routes>
        <Route path="/RealControlF/" element={<Header />} />
        <Route path="/RealControlF/servicios" element={<Servicios />} />
        <Route path="/RealControlF/tecnicas" element={<Tecnicas />} />
      
        <Route path="/RealControlF/tipos" element={<Tipos />} />
        <Route path="/RealControlF/licencias" element={<Licencias />} />
        <Route path="/RealControlF/clientes" element={<Clientes />} />

        <Route path="/RealControlF/contacto" element={<Contacto />} />

        <Route path="*" element={<Header />} />
      </Routes>


      <div className="sombra">
        <img src={img1} style={{ marginBottom: "20px" }} />
      </div>

      <a href="https://api.whatsapp.com/send?phone=5216621942066&text=¡Hola, Me Comunico desde su Página Web!" target='_blank'>
        <img className='whatsapp' src={whatsapp} alt="whatsapp" />
      </a>

      
      <Footer />
    </div>
  );
}

export default App;
