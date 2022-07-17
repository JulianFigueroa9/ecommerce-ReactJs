import React from "react";
import { Link } from "react-router-dom";



export const InputCount = () => {
    return (
        <>
            <Link to="/cart">
                <button
                    className="btn btn-outline-primary"
                >Ir al carrito o terminar compra</button>
            </Link>
            <Link to="/">
                <button
                    className="btn btn-outline-primary"
                >Seguir comprando</button>
            </Link>
        </>
    )
}

