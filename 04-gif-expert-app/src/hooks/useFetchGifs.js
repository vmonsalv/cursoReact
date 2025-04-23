// un hook es una función que retorna algo

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    // si bien el hook se inicializa [], cuando hay un cambio
    // el hook gatilla la re-renderización del componente
    const [images, setimages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImage = async () => {
        const imgs = await getGifs(category);
        setimages(imgs);
        setIsLoading(false);
    }

    useEffect(() => {
        getImage();
    }, []);

    return {
        images,
        isLoading
    }

}