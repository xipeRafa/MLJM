import "./servicios.css";
import { useState } from "react";
// import Tecnicas from '../tecnicas/Tecnicas'
import img2 from "../../imgs/rc3.png";



import g1 from "../../imgs/gallery/1.png";
import g3 from "../../imgs/gallery/3.png";
import g4 from "../../imgs/gallery/4.png";

import g5 from "../../imgs/gallery/5.png";
import g6 from "../../imgs/gallery/6.png";

import g8 from "../../imgs/gallery/8.png";


import g9 from "../../imgs/gallery/9.png";
import g10 from "../../imgs/gallery/10.png";
import g11 from "../../imgs/gallery/11.png";
import g12 from "../../imgs/gallery/12.png";

import g13 from "../../imgs/gallery/13.png";
import g14 from "../../imgs/gallery/14.png";
import g15 from "../../imgs/gallery/15.png";
import g16 from "../../imgs/gallery/16.png";









export default function Servicios() {


  const[boolState, setBoolState]=useState(true)


  const[galleryState, setGalleryState]=useState(1)


  return (<>

  {boolState ?
    <p className="servicios1">
      La Experiencia Obtenida durante 35 años de Servicio nos coloca como la
      Solución Adecuada
      <br />
      Para Cualquier Tipo de Problema de Plagas, Tomando Siempre en Cuenta su
      Salud y la de su Familia
  
      <p className={boolState ? 'leerMas':'d-none'} onClick={()=>setBoolState(!boolState)}>Leer Mas..</p>
    </p>




    :




     <p className="servicios1">
      La Experiencia Obtenida Durante 35 años de Servicio nos Coloca como la
      Solución Sdecuada
      <br />
      Para Cualquier Tipo de Problema de Plagas, Tomando Siempre en Cuenta su
      Salud y la de su Familia
      <br />
      Nuestros técnicos son especialistas en proteger su hogar usando sólo los
      productos y equipos adecuados para el Trabajo
      <br />
      siguiendo las más estrictas normas de uso y calidad. 
      <br />
      <br />
      <p>Fumigación contra Termita ¡No se nos escapa ni una! </p>
      Además te aseguramos que contamos con el equipo adecuado para no dañar las
      áreas infectadas
      <br />
      Fumigación contra bichos rastreros y voladores – deshágase de una vez de
      las molestas cucarachas,
      <br />
      arañas y hormigas, también solucionamos pestes de mosquitos, moscas ¡y
      hasta palomas!
      <br />
      Tratamiento contra todo tipo de Roedores <br />
      <br /> Elimina de tu hogar los huéspedes indeseados y protégelo de futuros
      intentos de invasores
      <br />
      <br />
      TU CASA SEGURA <br /> Siempre procurando ofrecer el mejor servicio,
      utilizamos los productos con las más estrictas normas de protección
      <br />
      para su hogar, no dañamos superficies, plantas o alimentos.
      <br />
      <br />
      CONTAMOS CON EQUIPOS ESPECIALIZADOS Y TECNICOS ESPECIALISTAS <br />{" "}
      CERTIFICADOS PARA CUMPLIR CON EL SERVICIO ADECUADAMENTE.
      <p className={!boolState ? 'leerMas':'d-none'} onClick={()=>{setBoolState(!boolState), window.scrollTo(0,0)}}>Leer Menos..</p>
    </p>}

<hr />

      {/*<Tecnicas />*/}

 <img className='g4' src={g3} />
  <img className='g4' src={g4} />


       <div className={galleryState !== 1 ? 'd-none' : 'servicioLabel'}>Servicio Contra Ratones</div>
           <div className={galleryState !== 2 ? 'd-none' : 'servicioLabel'}>Servicio Contra Insectos</div>
            <div className={galleryState !== 3 ? 'd-none' : 'servicioLabel'}>Servicio Contra Termitas</div>
             <div className={galleryState !== 4 ? 'd-none' : 'servicioLabel'}>Servicio Contra Viudas Negras</div>
              <div className={galleryState !== 5 ? 'd-none' : 'servicioLabel'}>Servicio Contra Ruedores</div>
               <div className={galleryState !== 6 ? 'd-none' : 'servicioLabel'}>Servicio Contra Abejas</div>
                <div className={galleryState !== 7 ? 'd-none' : 'servicioLabel'}>Servicio Contra Alacranes</div>
                 <div className={galleryState !== 8 ? 'd-none' : 'servicioLabel'}>Servicio Contra Termitas</div>
                  <div className={galleryState !== 9 ? 'd-none' : 'servicioLabel'}>Servicio Contra Arañas</div>
                   <div className={galleryState !== 10 ? 'd-none' : 'servicioLabel'}>Servicio Contra Plagas</div>
                    <div className={galleryState !== 11 ? 'd-none' : 'servicioLabel'}>Servicio Contra Termitas</div>
                     <div className={galleryState !== 12 ? 'd-none' : 'servicioLabel'}>Servicio Contra Termitas</div>


      <div className="gallery">
          <button onClick={()=>{if(galleryState>1){setGalleryState(galleryState - 1)}}}>◀ </button>


          <img className={galleryState !== 1 ? 'd-none' : ''} src={g1} />




          <img className={galleryState !== 2 ? 'd-none' : ''} src={g5} />
          <img className={galleryState !== 3 ? 'd-none' : ''} src={g6} />

          <img className={galleryState !== 4 ? 'd-none' : ''} src={g8} />

          <img className={galleryState !== 5 ? 'd-none' : ''} src={g9} />
          <img className={galleryState !== 6 ? 'd-none' : ''} src={g10} />
          <img className={galleryState !== 7 ? 'd-none' : ''} src={g11} />
          <img className={galleryState !== 8 ? 'd-none' : ''} src={g12} />

          <img className={galleryState !== 9 ? 'd-none' : ''} src={g13} />
          <img className={galleryState !== 10 ? 'd-none' : ''} src={g14} />
          <img className={galleryState !== 11 ? 'd-none' : ''} src={g15} />
          <img className={galleryState !== 12 ? 'd-none' : ''} src={g16} />



             <button onClick={()=>{if(galleryState<12){
                                               setGalleryState(galleryState + 1)
                                      }else{
                                
                                         setGalleryState(1)
                                      }

                                    }}> ▶ </button>
      </div>





      <div className='barras'>
        <div className={galleryState !== 1 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 2 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 3 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 4 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 5 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 6 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 7 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 8 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 9 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 10 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 11 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 12 ? 'claro' : 'oscuro'}></div>
      </div>


    

  </>);
}
