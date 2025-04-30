import './mensaje.css'
import { useState } from "react";


export default function Mensaje() {


		const[mensajeState, setMensajeState]=useState({
				name:'',
				mail:'',
				tel:'',	
				msj:''
		})

console.log(mensajeState)
		const { name, mail, tel, msj } = mensajeState


		const handlerMensaje=(e)=>{
				const {name, value}=e.target
				setMensajeState({ ...mensajeState, [name]:value })
		}


		const onSubmit=(e)=>{
				e.preventDefault()

				if(name.trim()==''){
					alert('ESCRIBE TU NOMBRE')
					return
				}

				if(msj.trim()==''){
					alert('ESCRIBE EL MENSAJE')
					return
				}

				setMensajeState({
						name:'',
						mail:'',
						tel:'',	
						msj:''
				})
		}



	return (

        <div>

            <h2>ENVIANOS UN MENSAJE</h2>

 			<hr />                 

			<form>

  					<div className="form-group">
    						<label >NOMBRE</label>
    						<input type="text" name='name' value={name} onChange={(e)=>handlerMensaje(e)}/>
  					</div>

  					<div className="form-group">
    						<label>CORREO (opcional)</label>
    						<input type="text" name='mail' value={mail} onChange={(e)=>handlerMensaje(e)}/>
  					</div>

   					<div className="form-group">
    						<label>TELEFONO (opcional)</label>
    						<input type="number" name='tel' value={tel} onChange={(e)=>handlerMensaje(e)}/>
  					</div>

  					<div className="form-group">
    						<label>MENSAJE</label>
    						<textarea name='msj' value={msj} onChange={(e)=>handlerMensaje(e)}/>
  					</div>

  					<button className="btn-enviar" onClick={(e)=>onSubmit(e)}>enviar ➪</button>

			</form>


        </div>

	)

}



// aria-describedby="emailHelp"