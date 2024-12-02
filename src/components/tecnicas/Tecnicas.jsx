import './tecnicas.css'
import { useState } from "react";
// import img1 from './1.png'
// import img2 from './2.png'
// import img3 from './3.png'
// import img4 from './4.png'



export default function Tecnicas() {


  const[displayState, setDisplayState]=useState('1')
  const[displayState2, setDisplayState2]=useState('5')

  return (<>
    <div className='inicioContainer'>
        <div className='titulo'>
            <h4>REAL CONTROL</h4>
            <h2>TECNICAS DE FUMIGACIÓN</h2>
        </div>


        <div className='buttonsContainer'>
            <button className={displayState === '1' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('1')}>ASPERSION</button>
            <button className={displayState === '2' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('2')}>NEBULIZACION</button>
            <button className={displayState === '3' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('3')}>GASIFICACION</button>
            <button className={displayState === '4' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('4')}>APLICACIÓN DE GEL</button>

        </div>


{/*//-pulverizadores - espolvoreadores -termonebulizacion*/}
        <div className={displayState !== '1' ? 'd-none' : 'displayX'}>
                  
            <div>
                    <h3>      
                        ASPERSION<br />
                        Método mediante el cual se esparce pequeñas gotas de plaguicida 
                        <br />mediante un equipo de presión con boquilla en forma de abanico rociando las orillas inferiores y superiores, 
                        marcos siguiendo el perímetro del establecimiento poniendo especial atención en rincones, grietas, hendiduras, 
                        lugar donde se anidan las plagas formando así un cordón sanitario y evitando el 
                        ingreso o propagación de las plagas no deseadas. Este método es el más efectivo y u
                        sados por las mayoría de empresas de fumigación
                    </h3>
            </div>                    
        </div>




        <div className={displayState !== '2' ? 'd-none' : 'displayX'}>
            
            <div>
                   
                  <h3>
                        NEBULIZACION<br /> Son equipos eléctricos<br /> es como el sistema de aspersión con líquido pero esparce 
                        partículas mucho más finas que forman una especie de nube fría, lo cual le confiere gran poder 
                        de penetración. Ideal para el control de insectos voladores.
                  </h3>
                  
            </div> 
        </div>


        <div className={displayState !== '3' ? 'd-none' : 'displayX'}>
         
            <div>
                  
                  <h3>
                    GASIFICACION PARA TERMITAS Y OTRAS INSECTOS<br /> Técnica por el cual se realiza un 
                    sellamiento total del área infestada de plaga para que no pueda salir ninguna partícula de gas toxico, 
                    y se introduce una pastilla que contienen un tipo de gas venenoso causando envenenamiento o asfixia en la plaga, 
                    lo usamos comúnmente cuando existe un problema de termita o cualquier tipo de insecto que no se 
                    puede tratar con métodos antes mencionados.
                  </h3>
                 

            </div> 
        </div>


        <div className={displayState !== '4' ? 'd-none' : 'displayX'}>         
            <div>
                
                  <h3>
                      APLICACIÓN DE GEL<br /> Se lleva a cabo en lugares localizados donde prolifera la plaga principalmente cucaracha en lugares que 
                      tenemos menor acceso a la limpieza como lo son: cocinas, interior de tubos, grietas esquinas, hendiduras entrepaños, alacenas, 
                      cajones hornillas, y todo tipo de equipos eléctricos, etc. 
                      Esta técnica es muy utilizada en la Industria alimenticia en donde se hace énfasis en la inocuidad alimentaria.
                  </h3>
                 

            </div> 
        </div>




    </div>




















     <div className='inicioContainer'>

      {/*  <div className='titulo'>
            <h4>REAL CONTROL</h4>
            <h2>TECNICAS DE FUMIGACIÓN</h2>
        </div>*/}


        <div className='buttonsContainer'>
            <button className={displayState2 === '5' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('5')}>CEBO PARA RATÓN</button>
            <button className={displayState2 === '6' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('6')}>PULVERIZADORES</button>
            <button className={displayState2 === '7' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('7')}>ESPOLVOREADORES</button>
            <button className={displayState2 === '8' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('8')}>TERMONEBULIZACION</button>

        </div>


        <div className={displayState2 !== '5' ? 'd-none' : 'displayX'}>
                  
            <div>
                    <h3>      
                               
                      CEBO PARA RATÓN<br /> Las ratas y ratones normalmente prefieren lugares protegidos y rinconcitos oscuros. 
                      Y muchas veces estos locales son residencias o zonas de comercio y trabajo, dónde definitivamente 
                      estos roedores no son bienvenidos. Pero ahora eliminar ratas y ratones es muy fácil y efectivo
                       con cebo para ratón, rodenticida para roedores.
                    </h3>
            </div>                    
        </div>




        <div className={displayState2 !== '6' ? 'd-none' : 'displayX'}>
            
            <div>
                   
                  <h3>
                        PULVERIZADORES<br />
                        la pulverizadora esparce el líquido de manera más equitativa y liviana. La nube que genera 
                        la pulverizadora es mucho más envolvente alrededor de aquellos que se quiera eliminar. 
                        En cuanto a la fumigadora, estas son más usadas para los campos y cultivos agrícolas.
                  </h3>
                  
            </div> 
        </div>


        <div className={displayState2 !== '7' ? 'd-none' : 'displayX'}>
         
            <div>
                  
                  <h3>
                    ESPOLVOREADORES<br />
Se utiliza para aplicación de polvos principalmente en grietas, hendiduras y en lugares donde la aplicación de líquidos no es 
conveniente, como por ejemplo: Un tablero eléctrico. Es importante considerar que no todos los plaguicidas que vienen en polvo 
se pueden aplicar con este método, 
solo los que en su etiqueta venga sugerido. Va dirigido principalmente a insectos rastreros, termitas, hormigas entre otros.
                  </h3>
                 

            </div> 
        </div>


        <div className={displayState2 !== '8' ? 'd-none' : 'displayX'}>         
            <div>
                
                  <h3>
                    TERMONEBULIZACIÓN<br />
Lo que hace la termonebulización es generar unas gotas ultra finas, usando energía termo-neumática. 
La mezcla líquida se vaporiza en el equipo de aplicación (Termonebulizadora) y se convierte en un aerosol fino 
que se condensa al entrar en contacto con el aire exterior, el cual se encuentra a una menor temperatura creando una niebla densa y  visible. 


tiene la particularidad de poder mantenerse en el aire y trasladarse largas distancias sin perder su efectividad, 
alcanzando cualquier rincón dentro de la instalación. 
 Este método es recomendado para tratar espacios muy grandes. 

                  </h3>
                 

            </div> 
        </div>

    </div>
  </>)

  
}

  