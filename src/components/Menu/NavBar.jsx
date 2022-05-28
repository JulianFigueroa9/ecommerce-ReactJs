import React from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget.jsx'

function NavBar (){
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
                        <li className="nav-item text" >
                        <a className="nav-link active" aria-current="page" href="../../../public/index.html">INICIO</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="">TORTAS PERSONALIZADAS</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="">ESPECIALIDADES</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="">BOXES</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="">CONTACTO</a>
                        </li>
                        <CartWidget />
                    </ul>
                    </div>
                </div>
            </nav>
      </header>
  )
}

export default NavBar