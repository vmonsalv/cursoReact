import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    //No se debe poner el llamado a una función en el functional component
    // xq cada vez que se renderiza, se llama a la función
    // getGifs(category);
    // SOLUCIÓN: useEffect
    // useEffect es un hook de react que sirve para disparar efectos secundarios
    // un efecto secundario es un proceso que se quiere ejecutar cuando una acción suceda
    // un hook se identifica con el prefijo 'use'
    useEffect(() => {
        getGifs(category);
        // return -> está destinado a hacer una limpieza si el useEffect tiene un observable
    }, []); // si se dejan las dependencias vacías ([]) solo se disparará una vez, cuando se crea el componente


  return (
    <>
        <h3>{category}</h3>
        {/* {
            gifs.map(gif => (
                <p>{gif}</p>
            ))
        } */}
    </>
  )
}
