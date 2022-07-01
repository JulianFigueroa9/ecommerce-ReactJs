import React from "react";
import {useState, useEffect} from 'react';
import { useParams } from "react-router";
import { collection, getFirestore, getDocs, query, where } from '@firebase/firestore'

import ItemList from '../ItemList/ItemList.jsx';



function ItemListContainer ({greeting}) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()

    
    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
       

        if (categoriaId){
            const queryCollectionFilter = query( queryCollection, where( 'categoria', '==', categoriaId ) )
            getDocs(queryCollectionFilter)
            .then( data => setProductos( data.docs.map( item => ( { id: item.id, ...item.data() } )  ) ) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
            
        } else{
            getDocs(queryCollection)
             .then( data => setProductos( data.docs.map( item => ( { id: item.id, ...item.data() } )  ) ) )
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
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