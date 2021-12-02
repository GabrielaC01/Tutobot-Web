import React from 'react'

export default function IniciarSesion() {
    return (
        <div style={{marginLeft:"400px", marginTop:"200px", width:"40rem"}}>
            <h1>Iniciar Sesión</h1>
            <input type="email" className="form-control mb-3 mt-4" placeholder="Email:" />
            <input type="password" className="form-control" placeholder="Password:" />
            <button className="btn btn-secondary mt-3">ENVIAR</button>
        </div>
    )
}
