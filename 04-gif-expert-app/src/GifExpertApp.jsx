import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

// react snippet: rafc
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    

    const onAddCategory = () => {
        const newCategory = "hunter x hunter";
        const isCategoryExist = categories.some(category => category === newCategory);

        // setCategories([...categories, newCategory]);
        if(!isCategoryExist)
            setCategories(cat => [newCategory, ...cat]);
    }
    
    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory />

            {/* Listado GIF */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {
                    categories.map(category => (
                        <li key={category}>{category}</li>
                    ))
                }
            </ol>
                {/* GIF items */}
        </>
    )
}