import React, { useState } from 'react';
import { Addcategories } from './components/Addcategories';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Solo Leveling']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories([newCategory ,...categories]);

  }

  return (
    <div>

      <h1>GifExpertApp</h1>

      <Addcategories
        onNewCategory={onAddCategory}
      />

      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category} />))
      }



    </div>
  )
}

export default GifExpertApp

//Api: YxfLRWxoCVDfVTogWjUiU76BS6wC0dqY