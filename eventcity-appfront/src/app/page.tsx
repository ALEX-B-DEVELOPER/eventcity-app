"use client";
import React from 'react';

import Login from './componentes/paginas/login';
import Registro from './componentes/paginas/registro';
import AdminMenu from './componentes/paginas/admin_menu';
import Usuarios from '../pages/usuarios_lista'
import Home from "@/pages/home";

import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import RootLayout from './layout';
import Eventos from '@/pages/eventos_lista';
import FormularioCrearEvento from '@/pages/eventos_crear';
import FormularioCrearUsuario from '@/pages/usuarios_crear';
import EventosResultados from '@/pages/vista_resultados';
import Recuperar from './componentes/paginas/recuperar_cuenta';


const Layout = () => {
  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/home"><h2>EVENTCITY</h2></Link>
        
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link bi bi-search" to="/home">Inicio</Link></li>
              <li className="nav-item"><Link className="nav-link bi bi-bookmark-star-fill" to="/resultados">Eventos</Link></li>
              <li className="nav-item"><Link className="nav-link bi bi-person-circle" to="/login">Acceso</Link></li>
              <li className="nav-item"><Link className="nav-link bi bi-person-circle" to="/usuarios">Admin</Link></li>

            </ul>
          </div>
        </div>
      </nav>
      
      <Outlet />
    </main>
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
        <Route path="recuperar-cuenta" element={<Recuperar />} />
        <Route path="admin_panel" element={<AdminMenu />} />
        <Route path="usuarios" element={Usuarios()} />
        <Route path="eventos" element={Eventos()} />
        <Route path="eventos/crear" element={<FormularioCrearEvento />} />
        <Route path="usuarios/crear" element={<FormularioCrearUsuario />} />
        <Route path="resultados"element={EventosResultados()} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}


