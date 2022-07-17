import React from "react";
import {useState, useEffect} from 'react';
import { useParams } from "react-router";
import { collection, getFirestore, getDocs, query, where } from '@firebase/firestore'

import ItemList from '../ItemList/ItemList.jsx';



function ItemListContainer ({greeting}) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()

    
    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
       

        if (idCategory){
            const queryCollectionFilter = query( queryCollection, where( 'categoria', '==', idCategory ) )
            getDocs(queryCollectionFilter)
            .then( data => setProducts( data.docs.map( item => ( { id: item.id, ...item.data() } )  ) ) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
            
        } else{
            getDocs(queryCollection)
             .then( data => setProducts( data.docs.map( item => ( { id: item.id, ...item.data() } )  ) ) )
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        }
    },[idCategory])

    return (
        <> 
            <div>{loading 
                ?
                <h1>Cargando...</h1>
                :
                <>
                    <h2>{greeting}</h2>
                    <ItemList items={products} />
                </>}
            </div>
        </>
    )  
}

export default ItemListContainer