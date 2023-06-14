"use client";
import React, { Fragment } from "react";
import './css/input_texto.css'

function InputText(props: { hint: string, type: string, id: string, handleInput: any }) {


    return (
        <div className="inputTexto">
            <input type={props.type} placeholder={props.hint} id={props.id} name={props.id} onChange={e => props.handleInput(e.target.value, e.target.name)} />
        </div>
    )
}

export default InputText;