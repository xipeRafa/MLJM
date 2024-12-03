import "./grupo.css";
import { useState } from "react";
// import Tecnicas from '../tecnicas/Tecnicas'

import g3 from "../../imgs/gallery/3.png";


import g1 from "../../imgs/gallery/1.webp";



import g5 from "../../imgs/gallery/2.webp";
import g6 from "../../imgs/gallery/3.webp";













export default function Grupo() {


  const[boolState, setBoolState]=useState(true)


  const[galleryState, setGalleryState]=useState(1)


  return (<>

  {boolState ?
    <p className="servicios1">
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion      
      <br />

       informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion  
     
      <p className={boolState ? 'leerMas':'d-none'} onClick={()=>setBoolState(!boolState)}>Leer Mas..</p>
    </p>




    :




     <p className="servicios1">
       informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion  

    
      <br />
     informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion  
      <br />
      <br />
    informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion  

      <br />
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion  
      <br />
    informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion  
      <br />
      <br />
 
      <br />
 informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion
      informacion informacion  
      <p className={!boolState ? 'leerMas':'d-none'} onClick={()=>{setBoolState(!boolState), window.scrollTo(0,0)}}>Leer Menos..</p>
    </p>}

<hr />

      {/*<Tecnicas />*/}

 <img className='g4' src={g3} />




       <div className={galleryState !== 1 ? 'd-none' : 'servicioLabel'}>Imagen 1</div>
           <div className={galleryState !== 2 ? 'd-none' : 'servicioLabel'}>Imagen 2</div>
          <div className={galleryState !== 3 ? 'd-none' : 'servicioLabel'}>Imagen 3</div>
             {/*  <div className={galleryState !== 4 ? 'd-none' : 'servicioLabel'}>Servicio Contra Viudas Negras</div>
              <div className={galleryState !== 5 ? 'd-none' : 'servicioLabel'}>Servicio Contra Ruedores</div>
               <div className={galleryState !== 6 ? 'd-none' : 'servicioLabel'}>Servicio Contra Abejas</div>
                <div className={galleryState !== 7 ? 'd-none' : 'servicioLabel'}>Servicio Contra Alacranes</div>
                 <div className={galleryState !== 8 ? 'd-none' : 'servicioLabel'}>Servicio Contra Termitas</div>
                  <div className={galleryState !== 9 ? 'd-none' : 'servicioLabel'}>Servicio Contra Arañas</div>
                   <div className={galleryState !== 10 ? 'd-none' : 'servicioLabel'}>Servicio Contra Plagas</div>
                    <div className={galleryState !== 11 ? 'd-none' : 'servicioLabel'}>Servicio Contra Termitas</div>
                     <div className={galleryState !== 12 ? 'd-none' : 'servicioLabel'}>Servicio Contra Termitas</div>*/}


      <div className="gallery">
          <button onClick={()=>{if(galleryState>1){setGalleryState(galleryState - 1)}}}>◀ </button>


          <img className={galleryState !== 1 ? 'd-none' : ''} src={g1} />




          <img className={galleryState !== 2 ? 'd-none' : ''} src={g5} />
          <img className={galleryState !== 3 ? 'd-none' : ''} src={g6} />
{/*
          <img className={galleryState !== 4 ? 'd-none' : ''} src={g8} />

          <img className={galleryState !== 5 ? 'd-none' : ''} src={g9} />
          <img className={galleryState !== 6 ? 'd-none' : ''} src={g10} />
          <img className={galleryState !== 7 ? 'd-none' : ''} src={g11} />
          <img className={galleryState !== 8 ? 'd-none' : ''} src={g12} />

          <img className={galleryState !== 9 ? 'd-none' : ''} src={g13} />
          <img className={galleryState !== 10 ? 'd-none' : ''} src={g14} />
          <img className={galleryState !== 11 ? 'd-none' : ''} src={g15} />
          <img className={galleryState !== 12 ? 'd-none' : ''} src={g16} />*/}



             <button onClick={()=>{if(galleryState<3){
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
{/*        <div className={galleryState !== 4 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 5 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 6 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 7 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 8 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 9 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 10 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 11 ? 'claro' : 'oscuro'}></div>
        <div className={galleryState !== 12 ? 'claro' : 'oscuro'}></div>*/}
      </div>


    

  </>);
}
