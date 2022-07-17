import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout';
import Modal from './components/Checkout/Modal';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<ItemListContainer greeting="Valeria Sword - Sweet Bakery" />} />
          <Route index path="/categoria/:categoriaId" element={<ItemListContainer greeting="Valeria Sword - Sweet Bakery" />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/cart" element={ <Cart />} />
          <Route path='/checkout' element={ <Checkout /> } />
          <Route path="/checkoutID" element={ <Modal />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
