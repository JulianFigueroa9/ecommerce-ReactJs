import React from "react";
import { Link } from "react-router-dom";



export const InputCount = () => {
    return (
        <>
            <Link to="/cart">
                <button
                    className="btn btn-outline-primary"
                    onClick={()=>console.log('Ir al Carrito')}
                >Ir al carrito o terminar compra</button>
            </Link>
            <Link to="/">
                <button
                    className="btn btn-outline-primary"
                    onClick={()=>console.log('Seguir comprando')}
                >Seguir comprando</button>
            </Link>
        </>
    )
}

