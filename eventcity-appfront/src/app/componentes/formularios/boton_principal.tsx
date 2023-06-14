import React from "react";
import './css/boton_principal.css'


const BotonPrincipal = (props: { texto: string, callBack: Function }) => {
    return (
        <button className="form-control btn btn-primary botonPrincipal" onClick={function(){props.callBack()}}>{props.texto}</button>
    );
}

export default BotonPrincipal;
