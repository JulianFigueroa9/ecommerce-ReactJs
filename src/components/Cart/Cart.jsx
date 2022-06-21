import React from "react";
import { useCartContext } from "../CartContext/CartContext";

const Cart = () => {
    const { cart, emptyCart } = useCartContext()
    return (
        <div>
            <ul>
                {
                    cart.map(item => <li key={item.id}>
                        <div className="w-25">
                            <img src={item.imagen} className='w-25' alt={item.nombre} />
                        </div>
                        nombre: {item.nombre} - precio: {item.precio} - cantidad: {item.cantidad}
                    </li>  )
                }
            </ul>
            <div>
                <button onClick={emptyCart} >Vaciar Carrito</button>
            </div>
        </div>
    )
}



export default Cart