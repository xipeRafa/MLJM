

import "./css/App.css";
import img1 from "./imgs/rc1.png";
import whatsapp from "./imgs/descargar.png";


import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Grupo from "./components/grupo/Grupo";
import Header from "./components/header/Header";
import Consagraciones from "./components/consagraciones/Consagraciones";

import Mensajes from "./components/mensaje/Mensaje";


// import Contacto from "./components/contacto/Contacto";
import Cenaculos from "./components/cenaculos/Cenaculos";


function App() {

  return (
    <div className="containerApp">
      <Navbar />



      <Routes>
        <Route path="/MLJM/" element={<Header />} />
        <Route path="/MLJM/GRUPO" element={<Grupo />} />
        <Route path="/MLJM/CENACULOS" element={<Cenaculos />} />
      
        <Route path="/MLJM/CONSAGRACIONES" element={<Consagraciones />} />

        <Route path="/MLJM/MENSAJES" element={<Mensajes />} />


     {/*   <Route path="/RealControlF/licencias" element={<Licencias />} />
        <Route path="/RealControlF/clientes" element={<Clientes />} />

        <Route path="/RealControlF/contacto" element={<Contacto />} />

        <Route path="*" element={<Header />} />*/}

      </Routes>


      <div className="sombra">
        <img src={img1} style={{ marginBottom: "20px" }} />
      </div>

    {/*  <a href="https://api.whatsapp.com/send?phone=5216621942066&text=¡Hola, Me Comunico desde su Página Web!" target='_blank'>
        <img className='whatsapp' src={whatsapp} alt="whatsapp" />
      </a>*/}

      
      <Footer />
    </div>
  );
}

export default App;
