import React, { useState } from 'react';
import './CardTuto.css';

function CardTuto(props) {

    const {title, text, opc1, opc2, opc3, opc4} = props;

    return (
        <div className="cardTuto">
            <div className="card" style={{display: "block"}}>
                <div className="card-body">
                    <h5 className="card-title" style={{fontSize:"21px"}}>{title}</h5>
                    <p className="card-text" style={{marginTop:"30px", fontSize:"16px"}}>{text}</p>
                    <input type="submit" value="Ver Más" style={{color:"#fff",width:"8rem", bottom:"15px", left:"6.5rem"}} className='btn' />
                </div>
            </div>
        </div>
    )
}

export default CardTuto;