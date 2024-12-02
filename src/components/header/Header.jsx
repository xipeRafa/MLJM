import './header.css'
import img2 from "../../imgs/rc3.png";
import Banner from '../banner/Banner'

export default function Header() {


    return ( <> 

  <header>
        <p>35 AÑOS DE EXPERIENCIA, CALIDAD Y EFECTIVIDAD EN EL CONTROL DE PLAGAS</p>

        <span>SERVICIOS GARANTIZADOS HASTA 5 AÑOS</span>
        <br />  <br />
        <p>SERVICIO DOMÉSTICO, COMERCIAL E INDUSTRIAL</p>





        <div className="sombra">
        <img src={img2} />
      </div>



     

            <Banner />
 <br /> 

            <p>Real Control pone a su servicio los mejores Productos y Equipos para un Servicio Completamente Profesional</p>
<p>Efectivo y con Resultado Inmediato</p>



      </header>
      </>)
  }


