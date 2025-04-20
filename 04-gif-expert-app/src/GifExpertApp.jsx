import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

// react snippet: rafc
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    

    const onAddCategory = (newCategory) => {
        const isCategoryExist = categories.some(category => category === newCategory.trim());

        // setCategories([...categories, newCategory]);
        if(!isCategoryExist)
            setCategories(cat => [newCategory.trim(), ...cat]);
    }
    
    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onAddCategory={onAddCategory}/>

            {/* Listado GIF */}
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