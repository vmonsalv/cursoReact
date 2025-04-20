import React from "react";
import ReactDOM from "react-dom/client"; // para renderizar
import { FirstApp } from "./FirstApp";

import './styles.css'; //estilos globales
import { CounterApp } from "./CounterApp";
// import { App } from './HelloWorldApp'


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <CounterApp value={0}></CounterApp> */}
        <FirstApp title="El título" subTitle={"Un subtítulo"} name={'Gon Freecs'}/>
    </React.StrictMode>
);