"use client";
import React from 'react';

import Login from './componentes/paginas/login';
import Registro from './componentes/paginas/registro';
import AdminPanel from './componentes/paginas/admin_panel';
import Usuarios from '../pages/usuarios_lista'
import Home from "@/pages/home";

import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import RootLayout from './layout';


const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">EVENTCITY</a>
        
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/home">Eventos</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Acceso</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/registro">Registro</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/admin_panel">Admin</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/usuarios">Usuarios</Link></li>


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      
      <Outlet />
    </>
  )
};



export default function App() {

  return(
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="home" element={Home()} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Registro />} />
        <Route path="admin_panel" element={<AdminPanel />} />
        <Route path="usuarios" element={Usuarios()} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}


