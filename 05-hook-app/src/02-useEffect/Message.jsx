import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      // const coordenadas = { x, y };
      setCoords({ x, y });
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      // se debe tener cuidad de usar esta función
      // xq en este caso al mover el mouse se usa el setCoords
      // pero si el componente es desmontado se va a generar un error
      // de intento de cambio de estado de un componente que no existe (v 16 - 17)
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>

      {JSON.stringify(coords)}
    </>
  );
};
