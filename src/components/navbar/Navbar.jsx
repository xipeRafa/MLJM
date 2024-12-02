import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

export default function Navbar() {

    const [isActive, setIsActive] = useState(true);

    const windowWidth = window.innerWidth;

    const InWidth = () => {
        if (windowWidth < 999) {
            setIsActive(true);
        }
    };

    return (
        <div className="navBar">

            <div onClick={() => setIsActive(!isActive)} className="hamburger">
                <div className="menu-bar">
                    <div className="uno" />
                    <div className="dos" />
                    <div className="tres" />
                </div>
                <span className='menuX'>{isActive ? "MENU" : "✘"}</span>
            </div>

            <div className={isActive ? "menu " : "menu display"} onClick={InWidth}>


                <NavLink to="/RealControlF" onClick={()=>window.scrollTo(0,0)}> Inicio </NavLink>

                <NavLink to="/RealControlF/servicios" onClick={()=>window.scrollTo(0,0)}> Servicios </NavLink>

                <NavLink to="/RealControlF/tecnicas" onClick={()=>window.scrollTo(0,0)}> Tecnicas </NavLink>

                <NavLink to="/RealControlF/tipos" onClick={()=>window.scrollTo(0,0)}> Tipos de Plagas </NavLink>

                <NavLink to="/RealControlF/licencias" onClick={()=>window.scrollTo(0,0)}> Licencias </NavLink>

                <NavLink to="/RealControlF/clientes" onClick={()=>window.scrollTo(0,0)}> Clientes </NavLink>

                <NavLink to="/RealControlF/contacto" onClick={()=>window.scrollTo(0,0)}> Contacto </NavLink>

                {/*<NavLink to="/AhilloPage/gobierno">    Gobierno </NavLink>

                <NavLink to="/AhilloPage/PGP"> PGP 2031-2033 </NavLink>

                <NavLink to="/AhilloPage/provincia"> Provincia Eclesiástica de Hermosillo </NavLink>*/}

            </div>
        </div>
    );
}
