import { useState } from "react";

// react snippet: rafc
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    

    const onAddCategory = () => {
        const newCategory = "hunter x hunter";
        const isCategoryExist = categories.some(category => category === newCategory);

        // setCategories([...categories, newCategory]);
        if(!isCategoryExist)
            setCategories(cat => [...cat, newCategory]);
    }
    
    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}

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