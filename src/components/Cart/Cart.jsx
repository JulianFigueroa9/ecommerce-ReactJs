import React from "react";
import { useCartContext } from "../CartContext/CartContext";
import EmptyCart from "../EmptyCart/EmptyCart";

const Cart = () => {
    const { cart, emptyCart, eliminarItem, sumaPrecioItems } = useCartContext()
    return (
        <div>
            {!cart.length > 0 ?
            <>
            <EmptyCart />
            </>
            :
                <div>
                    <ul>
                        {
                            cart.map(item => <li key={item.id}>
                                <div className="w-25">
                                    <img src={item.imagen} className='w-25' alt={item.nombre} />
                                </div>
                                        Nombre: {item.nombre} -
                                        Precio: ${item.precio} -
                                        Cantidad: {item.cantidad} -
                                        Subtotal: ${item.precio * item.cantidad}
                                <button className="btn-delete" key={item.id} onClick={()=> eliminarItem(item.id) }>X</button>
                            </li>  )
                        }
                    </ul>
                    <div>
                    <h4 className="text-2xl font-bold py-8">Total: ${sumaPrecioItems()}</h4>
                        <button onClick={emptyCart} >Vaciar Carrito</button>
                    </div>
                </div>
            }
        </div>            
    )
}



export default Cart