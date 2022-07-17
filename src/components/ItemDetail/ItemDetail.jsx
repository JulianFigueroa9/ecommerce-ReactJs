import React, { useState } from "react";
import { InputCount } from "../../helpers/Intercambiabilidad.jsx";
import { useCartContext } from "../CartContext/CartContext.jsx";
import ItemCount from '../ItemCount/ItemCount.jsx';


function ItemDetail ({item}){

    const {cart, addToCart} = useCartContext()

    const [boolean, setBoolean] = useState(true)

    const onAdd = (cant) =>{
        setBoolean(false)
        addToCart({...item, cantidad:cant})

    }
    console.log(cart)

    return (
    <>
        <div className="row">
                <div className="col-md-6">
                    <img src={item.imagen} alt={item.nombre}  className="w-100" />
                </div>
                <div className="col-md-6">
                    <h2>Nombre: {item.nombre}</h2>
                    <h3>Categoria: {item.categoria}</h3>
                    <h4>Precio: ${item.precio}</h4>
                    {boolean 
                    ?
                    <ItemCount initial="1" stock="10" onAdd={onAdd}/>
                    : <InputCount />
                    }
                </div>
        </div>
    </>
    )
}

export default ItemDetail