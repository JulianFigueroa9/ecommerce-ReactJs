import React from 'react';
import {useState} from 'react';
import './ItemCount.css';



function ItemCount({ stock, initial, onAdd }) {
	let [count, setCount] = useState(initial)

    const sumar = () => {
        (count < stock) ? setCount(count++) : console.log('Superaste el stock del producto');
    }

    const restar = () => {
        if (count > initial){
            setCount(count--)
        }
    }

    const agregar = () => {
        onAdd(count)
    }

	return (
		<div className="card-container contador">
            <div>
                <button onClick={restar} className="btnRestar btn-sm" disabled={count === 1}>-</button>
                    <label className="fs-3 mx-4 text-success">{count}</label>
                <button onClick={sumar} className="btnSumar btn-sm" disabled={count > stock - 1}>+</button>
            </div>
            <button className="btn btn-outline-primary" onClick={agregar}>Agregar al carrito</button>
		</div>
	)
}

export default ItemCount