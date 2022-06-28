import React from "react";
import { Link } from "react-router-dom";



const EmptyCart = () => {
    return (
        <>
            <h1>No hay nada que mostrar</h1>
            <Link to="/" >
            <button>Volver al inicio</button>
            </Link>
        </>
    )
  
}


export default EmptyCart