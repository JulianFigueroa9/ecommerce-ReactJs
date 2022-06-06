import React from "react";
import './Item.css'



function Item ({item}){


    return (
        <>
            <div className="col-md-4 p-1">
                <div className="card-header prodNombre text-center">
                    {item.nombre}
                </div>
                <div className="card-body">
                    <img src={item.imagen} alt={item.nombre} className="imgProd rounded mx-auto d-block" />
                    <p className="prodPrecio text-center">{`$${item.precio}`}</p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-outline-primary btn-block">Ver detalle</button>
                </div>
            </div>
        </>
        
    )
}


export default Item