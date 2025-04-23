import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

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

  return (
    <>
      <h3>{category}</h3>

      {/* LOADING */}
      {/* OPCIÓN 1 */}
      {
        // isLoading? <h2>Cargando ...</h2>: null
        // And lógico, tiene el mismo efecto que la línea de arriba
        isLoading && <h2>Cargando ...</h2>
      }
      {/* OPCIÓN 2: crear un componente */}
      {/* <LoadingMessage isLoading={isLoading} /> */}
      {/* <h2 className={'hidden'}>Cargando ...</h2> */}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
          // el operador spread para las properties es útil
          // cuando son muchas propertis en el objeto
          // image={image}/>
        ))}
      </div>
    </>
  );
};
