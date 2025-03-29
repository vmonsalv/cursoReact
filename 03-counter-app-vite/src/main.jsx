import React from "react";
import ReactDOM from "react-dom/client"; // para renderizar
import { FirstApp } from "./FirstApp";

import './styles.css'; //estilos globales
// import { App } from './HelloWorldApp'


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstApp
        title="Hola, soy Goku"
        // subTitle="123" //pasa un string
        subTitle={ 123 } // pasa un número 
        />
    </React.StrictMode>
);