"use client";
import React from 'react';
import Login from './componentes/paginas/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layout';


export default function App() {

  return(<BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout children={Login()}/>}>
        </Route>
      </Routes>
  </BrowserRouter>
  )
}
