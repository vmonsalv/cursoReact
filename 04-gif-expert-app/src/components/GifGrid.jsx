import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    
    const [images, setimages] = useState([])

    //No se debe poner el llamado a una función en el functional component
    // xq cada vez que se renderiza, se llama a la función
    // getGifs(category);
    // SOLUCIÓN: useEffect
    // useEffect es un hook de react que sirve para disparar efectos secundarios
    // un efecto secundario es un proceso que se quiere ejecutar cuando una acción suceda
    // un hook se identifica con el prefijo 'use'
    // useEffect(() => {
    //     /*const imgs = */getGifs(category).then(imgs =>setimages(imgs));
    //     // setimages(imgs);
    //     // return -> está destinado a hacer una limpieza si el useEffect tiene un observable
    // }, []); // si se dejan las dependencias vacías ([]) solo se disparará una vez, cuando se crea el componente

    const getImage = async () => {
        const imgs = await getGifs(category);
        setimages(imgs);
    }

    useEffect(() => {
        getImage();
    }, []);
console.log('images', images);

  return (
    <>
        <h3>{category}</h3>
        <div className="card-grid">
            {
                images.map((image) => (
                    <GifItem
                        key={image.id}
                        {...image}
                    />
                    // el operador spread para las properties es útil
                    // cuando son muchas propertis en el objeto
                        // image={image}/>
                ))
            }
        </div>
    </>
  )
}
