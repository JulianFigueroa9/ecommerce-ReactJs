import React, { useContext } from "react";
import { useState } from "react";

import { createContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    const agregarCarrito = (item) => {        
        const index = cart.findIndex(i => i.id === item.id) // posición -1   
        if (index > -1) {
            const oldQty = cart[index].cantidad
            cart.splice(index, 1)
            setCart([...cart, {...item, cantidad: item.cantidad+oldQty}])
        }
        else {
            setCart([...cart, {...item, cantidad: item.cantidad}])
        }
    }

    const eliminarItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const sumaPrecioItems = () => {
        return cart.reduce((acum, valor) => (acum +(valor.cantidad * valor.precio)), 0)
    }   

    const cantidadItem = () => {
        return cart.reduce((acum, prod) => acum = (acum + prod.cantidad),0)
    }

    const emptyCart = () =>{
        setCart([])
    }


    return(
        <CartContext.Provider
            value={{
                cart,
                agregarCarrito,
                emptyCart,
                eliminarItem,
                sumaPrecioItems,
                cantidadItem
            }}
        >
        {children}
        </CartContext.Provider >
    )
}