import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    //No se debe poner el llamado a una función en el functional component
    // xq cada vez que se renderiza, se llama a la función
    getGifs(category);

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
