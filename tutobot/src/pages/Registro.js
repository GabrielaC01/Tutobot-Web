import React, { useState } from 'react'
//import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './elementos/Formularios';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './Registro.css'
import estudiante from '../media/estudiante.png'
//import Input from './componentes/Input';

function Registro() {
    const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [password2, cambiarPassword2] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
	const [terminos, cambiarTerminos] = useState(false);
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

	const validarPassword2 = () => {
		if(password.campo.length > 0){
			if(password.campo !== password2.campo){
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} else {
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'true'}
				});
			}
		}
	}

	const onChangeTerminos = (e) => {
		cambiarTerminos(e.target.checked);
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if(
			usuario.valido === 'true' &&
			nombre.valido === 'true' &&
			password.valido === 'true' &&
			password2.valido === 'true' &&
			correo.valido === 'true' &&
			telefono.valido === 'true' &&
			terminos
		){
			cambiarFormularioValido(true);
			cambiarUsuario({campo: '', valido: ''});
			cambiarNombre({campo: '', valido: null});
			cambiarPassword({campo: '', valido: null});
			cambiarPassword2({campo: '', valido: 'null'});
			cambiarCorreo({campo: '', valido: null});
			cambiarTelefono({campo: '', valido: null});

			// ... 
		} else {
			cambiarFormularioValido(false);
		}
	}

    const [isTutor, setTutor] = useState(false);

	return (
		<body>
            <img className="estudiante" src={estudiante} />
            <div className="registro">
                <div className="switch-container">
                    <span style={{ color: isTutor ? "grey" : "black" }}> Alumno </span>
                    <div className="switch-checkbox">
                        <label className="switch">
                            <input type="checkbox" onChange={() => setTutor(!isTutor)}/>
                            <span className={`${isTutor ? "dark" : ""} slider`}> </span>
                        </label>
                    </div>
                    <span style={{ color: isTutor ? "black" : "grey" }}> Tutor </span>
                </div>
                <form className="form" >
                    <input
                        type="text"
                        required id="usuario"
                        placeholder="Nombre"
                    />
                    <label className="label"> 
                        <span className="nombre_campo">Nombre(s) </span>
                    </label>

                    <input
                        type="text"
                        required id="usuario"
                        placeholder="Apellidos"
                    />
                    <label className="label"> 
                        <span className="nombre_campo">Apellidos </span>
                    </label>

                    <input
                        type="text"
                        required id="usuario"
                        placeholder="Correo"
                    />
                    <label className="label"> 
                        <span className="nombre_campo">Correo </span>
                    </label>

                    <input
                        type="text"
                        required id="usuario"
                        placeholder="Teléfono"
                    />
                    <label className="label"> 
                        <span className="nombre_campo">Teléfono </span>
                    </label>

                    <input
                        type="password"
                        required id="usuario"
                        placeholder="Contraseña"
                    />
                    <label className="label"> 
                        <span className="nombre_campo">Contraseña </span>
                    </label>

                    {isTutor? (
                        <div>
                        <input
                            type="password"
                            required id="usuario"
                            placeholder="Link de contacto"
                        />
                        <label className="label"> 
                            <span className="nombre_campo">Link de contacto </span>
                        </label>
                        </div>
                    ):(
                        <div></div>
                    )}

                    {/*formularioValido === false && <MensajeError>
                        <p>
                            <FontAwesomeIcon icon={faExclamationTriangle}/>
                            <b>Error:</b> Por favor rellena el formulario correctamente.
                        </p>
                    </MensajeError>}
                    <ContenedorBotonCentrado>
                        <Boton type="submit">Enviar</Boton>
                        {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
                    </ContenedorBotonCentrado>*/}
                </form>

                <div className="btnRegistro">
                    Registrarse
                </div>
            </div>
            <div className="fondo"> </div>
		</body>
	)

}

export default Registro;