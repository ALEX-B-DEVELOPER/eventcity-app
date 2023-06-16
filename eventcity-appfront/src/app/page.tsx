"use client";
import React from 'react';

import Login from './componentes/paginas/login';
import Registro from './componentes/paginas/registro';
import Recuperar from './componentes/paginas/recuperar_cuenta';
import AdminPanel from './componentes/paginas/admin_panel';

import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import RootLayout from './layout';


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/registro">Registro</Link></li>
          <li><Link to="/admin_panel">Admin</Link></li>
        </ul>
      </nav>
      
      <Outlet />
    </>
  )
};

function Home() {
  return (
    <h1>Hola {sessionStorage.getItem("nombre")}</h1>
  )
}

export default function App() {

  return(
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="registro" element={<Registro />} />
        <Route path="admin_panel" element={<AdminPanel />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}


