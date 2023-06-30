"use client";
import { Link, NavLink } from 'react-router-dom';
import InputText from '@/app/componentes/formularios/input_texto';

export default function Home() {
 
    return (
      <div>
        <nav className="navbar navbar-search">
          <form className="form-inline">
            <InputText hint="Buscar Eventos..." id="buscar" type="search" handleInput={""}/>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit" >Search</button>
          </form>
          
        </nav>
        <center><Link className="btn btn-outline-light" to="/resultados">EVENTOS</Link></center>

      </div>
      
    )
}
