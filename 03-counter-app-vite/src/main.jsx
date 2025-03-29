import React from "react";
import ReactDOM from "react-dom/client"; // para renderizar
import { FirstApp } from "./FirstApp";

// import { App } from './HelloWorldApp'


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstApp />
    </React.StrictMode>
);