import React,{useState} from "react";
import Luces from "./luces.jsx";




const Semaforo = () => {

    const [color, setColor] = useState("");

    return(

        <>
        <div id="soporte" className="bg-dark m-auto"></div>
        <div id="semaforo" className="row bg-dark m-auto d-flex">
            <Luces className={"rojo"+ ( color === "rojo" ? "Encendido": "Apagado")} onClick={() => setColor("rojo")}/>
            <Luces className={"amarillo"+ ( color === "amarillo" ? "Encendido": "Apagado")} onClick={() => setColor("amarillo")}/>
            <Luces className={"verde"+ ( color === "verde" ? "Encendido": "Apagado")} onClick={() => setColor("verde")}/>
        </div>
        </>
    );
}


export default Semaforo;