import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItem } from "../../helpers/getFetch";
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemDetailContainer(){

    const [productos, setProductos] = useState()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    console.log(id)
    
    useEffect(()=>{
        getItem()
        .then((resp)=>{
            setProductos(resp)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])

    return (
        <>  <div>{loading ?
                <h1>loading...</h1>
                :
                <>
                    <div className="card">
                        <ItemDetail item={productos.find((prod)=>prod.id === id)} />
                    </div>
                </>}
            </div>
        </>
    )
}

export default ItemDetailContainer