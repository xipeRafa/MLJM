import './licencias.css'

      
import i1 from "../../imgs/iconos/1.png";
import i2 from "../../imgs/iconos/2.png";
import i3 from "../../imgs/iconos/3.png";

import i4 from "../../imgs/iconos/4.png";
import i5 from "../../imgs/iconos/5.png";

import i6 from "../../imgs/marcas/6.png";

import i7 from "../../imgs/marcas/7.png";
import i8 from "../../imgs/marcas/8.png";


export default function Header() {


    return (  
            <div className='licencias'>

                        <p>Licencia Sanitiaria: 10 26 A 00138</p>



    <div className="iconos">
        <div>
            <img src={i5} />
            <p>Certificado de Fumigación</p>
        </div>
        <div>
            <img src={i4} style={{width:'170px', marginTop:'6px'}}/>
             <p>Asesorías y Cursos</p>
        </div>    
        <div>
            <img src={i3} />
              <p>ISO 9001</p>
        </div>    
        <div>
            <img src={i2} />
              <p>Licencia Sanitaria</p>
        </div>    
        <div>
            <img src={i1} style={{width:'160px', marginTop:'6px'}}/>
              <p>Desinfección</p>
        </div>    
      </div>





        <div className="iconos2">
        <div>
            <img src={i6} />
        </div>
        <div>
            <img src={i7} />
        </div>    
        <div>
            <img src={i8} />
        </div>    
    
   
      </div>


                        <div className='clientesLista'>
                            Restaurantes, Hoteles y Moteles, Escuelas, Plazas Comerciales,
                            Supermercados, Industrias, Campos, Almacenes, Bodegas, Hospitales,
                            Abarrotes, Residencias y Departamentos.
                        </div>

            </div>
      )
  }
