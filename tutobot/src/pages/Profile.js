import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUser,
	faBook,
	faHome,
	faHeart,
	faDoorClosed,
} from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";
import '../App.css';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-labels';
import {barData, barOptions, pieData, pieOptions} from '../components/Chart.js';
import {Bar, Pie} from 'react-chartjs-2';

function Profile() {
	const { username } = useParams();
	return (
		<div className="perfil">
			{/* <h1> ProfilePage: {username}</h1> */}
			<div id="contenedor">
				<div id="info">
					<div className="icono">
						<FontAwesomeIcon icon={faUser} />
					</div>
					<div className="info2">
						{/* <h2>Laura Santos Balladares</h2> */}
						<h2>Ciencias de la Computación</h2>
						<p>
							Soy estudiante de Ciencias de la Computación 
							<br />
							en la Universidad Nacional de Ingeniería.
							<br />
							Actualmente estoy cursando el 4° ciclo.<br />
						</p>
					</div>
				</div>

				<div className="datosPersonales">
					<h1>Información General</h1>
					<h2>Nombres: Laura</h2>
					<h2>Apellidos: Santos Balladares</h2>
					<h2>Celular: 908671524</h2>
					<h2>Email: laurasb@uni.edu.pe</h2>
					{/*<h2>HORARIO DE ATENCIÓN: </h2> */}
				</div>
			</div>
			<div id="conten-estadisticas">
				<div className="estadisticas">
					{/* <h1>Estadísticas</h1>
					<h2>Cantidad de tutoriales registrados: </h2>
					<h2>Cantidad de tutoriales completados: </h2>
					<h2>Porcentaje de rendimiento: </h2>
					<h2>Cantidad total de me gusta: </h2>
					<h2>Puntaje total:</h2>
					<h2>Promedio de notas:</h2>
					<h2>Reuniones: </h2> */}
					<h1>ESTADISTICAS</h1>

					<div className = "barNotas">
						
						Promedio de notas
						<Bar
							data = {barData} 
							options = {barOptions}
						/>
					</div>
					<div className = "pieAprobado">
						Rendimiento
						<Pie
							data = {pieData} 
							options = {pieOptions}
						/>
					</div>
					<br/><br/>
					<h2>Cantidad de tutoriales subidos: 10</h2>
					<h2>Cantidad total de registros: 3</h2>
					<h2>Cantidad de registros por tutorial: 0.3</h2>
					<h2>Cantidad total de me gusta: 2</h2>
					<h2>Cantidad de me gusta por Tutorial: 0.2</h2>
					<h2>Reuniones: </h2>
				</div>
			</div>
		</div>
	);
}

export default Profile;
