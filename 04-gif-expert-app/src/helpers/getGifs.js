export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=i9RLzhDMHmPz2jPeouAd9eJFM6e200tJ&q=${category}&limit=20`
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // está generando 2 respuestas
    console.log("🚀 ~ getGifs ~ gifs:", gifs)
    
}