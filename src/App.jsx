import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Menu/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="BIENVENIDO" />
    </>
  )
}

export default App;
