import React from "react";
import ItemCount from '../ItemCount/ItemCount.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import {useState, useEffect} from 'react';
import { getFetch } from "../../helpers/getFetch";

function ItemListContainer ({greeting}) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        getFetch()
        .then((resp)=>{
            setProductos(resp)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])

    return (
        <> 
            <div>{loading 
                ?
                <h1>Cargando...</h1>
                :
                <>
                    <h2>{greeting}</h2>
                    <ItemCount stock="5" initial="1"/>
                    <ItemList items={productos}/>
                </>}
            </div>
        </>
    )  
}

export default ItemListContainer