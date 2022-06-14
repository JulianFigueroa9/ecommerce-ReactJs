import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<ItemListContainer greeting="Valeria Sword - Sweet Bakery" />} />
        <Route index path="/categoria/:categoriaId" element={<ItemListContainer greeting="BIENVENIDO" />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Navigate to="/" />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
