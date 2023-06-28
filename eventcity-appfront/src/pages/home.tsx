"use client";
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';


export default function Home() {

  const Home = async () => {
    var log = [{ nombres: "", apellidos: "", correo: "" }]
    await axios.get(`http://localhost:3001/usuarios`)
      .then(function (response) {
        console.log(response.data);
        log = response.data
      })
      .catch(function (error) { });
  
    return (
      <div>
        <table className="table" >
          <tbody>
            {log.map((number) =>
    
              <tr>
                <td>{number.apellidos}</td>
                <td>{number.nombres}</td>
                <td>{number.correo}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  
  }
  return (
    <div className="container">
      <div className='contenedor-principal'>
        {Home()}
      </div>
    </div>
  )
}
