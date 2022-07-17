import React from 'react';
import {useState} from 'react';
import './ItemCount.css';



function ItemCount({ stock, initial, onAdd }) {
	let [count, setCount] = useState(initial)

    const increase = () => {
        (count < stock) ? setCount(count+1) : console.log('Superaste el stock del producto');
    }

    const decrease = () => {
        if (count > initial) setCount(count - 1)
    
    }

    const add = () => {
        onAdd(count)
    }

	return (
		<div className="card-container contador">
            <div>
                <button onClick={decrease} className="btnRestar btn-sm" disabled={count === 1}>-</button>
                    <label className="fs-3 mx-4 text-success">{count}</label>
                <button onClick={increase} className="btnSumar btn-sm" disabled={count > stock - 1}>+</button>
            </div>
            <button className="btn btn-outline-primary" onClick={add}>Agregar al carrito</button>
		</div>
	)
}

export default ItemCount