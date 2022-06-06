import React from "react";
import Item from '../Item/Item.jsx';
import './ItemList.css'


function ItemList ({items}){
    
    
    return (
        <div className= 'prodCard'>
            {items.map(prods => {
                return  <Item item = {prods} key={prods.id}/> 
            })}
        </div>
    )
}

export default ItemList