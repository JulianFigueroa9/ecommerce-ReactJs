import React from "react";
import ItemCount from '../ItemCount/ItemCount.jsx';


function ItemDetail ({item}){
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
                    <ItemCount stock="5" initial="1"/>
                </div>
        </div>
    </>
    )
}

export default ItemDetail