import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore, getDoc, doc } from "@firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemDetailContainer(){

    const [productos, setProductos] = useState()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    
    useEffect(()=>{
        const db = getFirestore()
        const queryProduct = doc(db, 'productos', id)
        getDoc(queryProduct)
        .then((resp) => {
            setProductos({id: resp.id, ...resp.data(),});
          })
          .catch((err) => alert(err))
          .finally(() => setLoading(false));
    },[id])

    return (
        <>  <div>{loading ?
                <h1>loading...</h1>
                :
                <>
                    <div className="card">
                        <ItemDetail item={productos} />
                    </div>
                </>}
            </div>
        </>
    )
}

export default ItemDetailContainer