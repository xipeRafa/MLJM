import "./clientes.css";


// import Banner from '../banner/Banner'



import c1 from "../../imgs/clientes/1.png";
import c2 from "../../imgs/clientes/2.png";
import c3 from "../../imgs/clientes/3.png";
import c4 from "../../imgs/clientes/4.png";
import c5 from "../../imgs/clientes/5.png";
import c6 from "../../imgs/clientes/6.png";
import c7 from "../../imgs/clientes/7.png";
import c8 from "../../imgs/clientes/8.png";

import c9 from "../../imgs/clientes/9.png";
import c10 from "../../imgs/clientes/10.png";

import c11 from "../../imgs/clientes/11.png";
import c12 from "../../imgs/clientes/12.png";

import c13 from "../../imgs/clientes/13.png";
import c14 from "../../imgs/clientes/14.png";

import c15 from "../../imgs/clientes/15.png";
import c16 from "../../imgs/clientes/16.png";

import c17 from "../../imgs/clientes/17.png";
import c18 from "../../imgs/clientes/18.png";
import c19 from "../../imgs/clientes/19.png";
import c20 from "../../imgs/clientes/20.png";






export default function Header() {
  return (
    <div className="clientes">

    <h2>Estos Fueron y Siguen Siendo Algunos de Nuestros Clientes</h2>
<hr />
        <div className='clientesContainer'>
            <div><img src={c3} /></div>
            <div><img src={c17} /></div>
            <div><img src={c1} /></div>
            <div><img src={c4} /></div>
            <div><img src={c18} /></div>

            <div><img src={c6} /></div>
            <div><img src={c7} /></div>
            <div><img src={c19} /></div>
            <div><img src={c10} /></div>
            <div><img src={c2} /></div>

            <div><img src={c14} /></div>
            <div><img src={c12} /></div>
            <div><img src={c13} /></div>
            <div><img src={c11} alt='.'/></div>
            <div><img src={c9} /></div>

            <div><img src={c15} /></div>
            <div><img src={c20} /></div>
            <div><img src={c8} /></div>
            <div><img src={c5} /></div>
            <div><img src={c16} /></div>
        </div>

        {/*<Banner />*/}
        <br />
         <br />
          <br />


    </div>
  );



}


