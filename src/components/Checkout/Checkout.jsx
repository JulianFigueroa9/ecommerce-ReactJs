import React, { useState } from "react";
import {useCartContext} from '../CartContext/CartContext';
import { getFirestore, addDoc, collection} from "@firebase/firestore";
import Form from "./Form";
import Modal from "./Modal"





const Checkout = () => {
    const [orderID, setOrderID] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [emailValid, setEmailValid] = useState('')
    const [showModal, setShowModal] = useState(false)
    const {cart, sumaPrecioItems, emptyCart} = useCartContext()


        function generarOrden(e) {
        e.preventDefault()

        const purchaseOrder = {}
        purchaseOrder.buyer = { name, email, phone }
        purchaseOrder.total = sumaPrecioItems()
        purchaseOrder.items = cart.map(cartItem => {
            const id = cartItem.id
            const title = cartItem.title
            const price = cartItem.price * cartItem.cantidad
        
            return {id, title, price}
        })
        
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, purchaseOrder)
        .then(resp => setOrderID(resp.id))
        .catch(err => console.log('ERROR ORDEN COMPRA: ', err))
        .finally(emptyCart)
     
    }
    
    const notValid = 
    !(name.length &&
    email.length &&
    phone.length &&
    emailValid.length > 0 &&
    email === emailValid
    )


    return (
        <div className="checkout-container">
            <h2 className="title">Completa tus datos</h2>
            <p className="pb-4">Para poder confirmar la compra, ingresa tus datos:</p>
            <Form
                generarOrden={generarOrden}
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                email={email}
                setEmail={setEmail}
                emailValid={emailValid}
                setEmailValid={setEmailValid}
                notValid={notValid}
                setShowModal={setShowModal}/>

            <Modal
                orderID={orderID}
                showModal={showModal}
                setShowModal={setShowModal}
                generarOrden={generarOrden}/>
        </div>
    )
}
export default Checkout