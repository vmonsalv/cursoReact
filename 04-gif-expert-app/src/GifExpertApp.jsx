import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

// react snippet: rafc
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // const isCategoryExist = categories.some(category => category === newCategory.trim());
    // if(isCategoryExist) return;
    if (categories.includes(newCategory)) return;

    // setCategories([...categories, newCategory]);
    setCategories((cat) => [newCategory, ...cat]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {/* Listado GIF */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* GIF items */}
    </>
  );
};
