import React from "react";
import ReactDOM from "react-dom/client"; // para renderizar

// functional component
const App = () => {
    return <h1>Hola Mundo!!!</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);