import React from "react";
import { Link } from "react-router-dom";
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
                    <Link to={`/detalle/${item.id}`}>
                        <button className="btn btn-outline-primary btn-block">Ver detalle</button>
                    </Link>
                </div>
            </div>
        </>
        
    )
}


export default Item