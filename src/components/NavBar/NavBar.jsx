import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../CartContext/CartContext';

function NavBar (){
    const {cantidadItem} = useCartContext()
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand"  href="../../../public/index.html">
                    <img className="rounded-circle logoNav" src={logo} alt="Logo Valeria Sword - Sweet Bakery" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav menuLinks">
                        <NavLink  className="linkPages" to="/">INICIO</NavLink>
                        <NavLink  className="linkPages" to="/categoria/TortasPersonalizadas">TORTAS PERSONALIZADAS</NavLink>
                        <NavLink  className="linkPages" to="/categoria/Especialidades">ESPECIALIDADES</NavLink>
                        <NavLink  className="linkPages" to="/categoria/Boxes">BOXES</NavLink>
                        <NavLink to="/cart">
                            <div className="cartWidget">
                                {<CartWidget />}
                                <div className="cartCount">{ cantidadItem() !== 0 && cantidadItem()}</div>
                            </div>
                        </NavLink>
                        
                        
                    </ul>
                    </div>
                </div>
            </nav>
      </header>
  )
}

export default NavBar