import React from "react";
import carrito from "../../assets/carrito.png"
import './CartWidget.css'

function CartWidget () {
    return (
        <img className="img-fluid carrito" src={carrito} alt="Carrito" />
    )
}

export default CartWidget