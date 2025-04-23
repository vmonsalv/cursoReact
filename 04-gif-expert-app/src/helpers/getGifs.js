export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=i9RLzhDMHmPz2jPeouAd9eJFM6e200tJ&q=${category}&limit=10`
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // esta función se llama 2 veces por el modo estricto de react (no pasa en producción)
    // para asegurarse de que el componente (el que llama a esta función) funcione correctamente
    // console.log(gifs);

    return gifs;
}