"use client";
import React from 'react';

import Login from './componentes/paginas/login';
import Registro from './componentes/paginas/registro';
import Recuperar from './componentes/paginas/recuperar_cuenta';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layout';


export default function App() {

  return(<BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout children={Recuperar()}/>}>
        </Route>
      </Routes>
  </BrowserRouter>
  )
}
