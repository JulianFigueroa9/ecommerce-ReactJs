import React from "react";
import {useState, useEffect} from 'react';
import { getFetch } from "../../helpers/getFetch";
import { useParams } from "react-router";

import ItemList from '../ItemList/ItemList.jsx';



function ItemListContainer ({greeting}) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()

    
    useEffect(()=>{
        if (categoriaId){
            getFetch()
            .then((resp)=>{
                setProductos(resp.filter(prod => prod.categoria === categoriaId))
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))

        } else{
            getFetch()
            .then((resp)=>{
                setProductos(resp)
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    },[categoriaId])

    return (
        <> 
            <div>{loading 
                ?
                <h1>Cargando...</h1>
                :
                <>
                    <h2>{greeting}</h2>
                    <ItemList items={productos} />
                </>}
            </div>
        </>
    )  
}

export default ItemListContainer