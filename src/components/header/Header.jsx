import './header.css'
import mom from "../../imgs/mom.webp";
import large from "../../imgs/large.webp";
// import Banner from '../banner/Banner'

export default function Header() {


    return ( <> 

  <header>
        <p>Movimiento Laical a Jesús por Maria</p>

        <span>JxM</span>
        <br />  
        <br />
        <p>texto 1</p>





      <div className="sombra imgsHeader">
            <img className="imgsHeader1" src={mom} />
            <img className="imgsHeader2" src={large} />
      </div>



     

            {/*<Banner />*/}
 <br /> 

            <p>texto 2</p>
<p>texto 3</p>



      </header>
      </>)
  }


