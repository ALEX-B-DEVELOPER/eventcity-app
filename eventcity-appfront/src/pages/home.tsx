"use client";
import { Link, NavLink } from 'react-router-dom';
import InputText from '@/app/componentes/formularios/input_texto';

export default function Home() {
 
    return (
      <div>
        <nav className="navbar navbar-search">
          <form className="form-inline">
            <InputText hint="Buscar Eventos..." id="buscar" type="text" handleInput={""}/>
            <Link className="btn btn-outline-light bi bi-search" to="/resultados"></Link>
          </form>
          
        </nav>
        <center></center>
        <i className="bi bi-search"></i>

      </div>
      
    )
}
