import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One piece"]);


  return (
    <div>
      <h2>Gif search</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <ol>
        {categories.map((category) => {
          return <GifGrid 
                key= {category}
                category= {category}/>;
        })}
      </ol>
    </div>
  );
};
