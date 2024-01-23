import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

export const GifApp = () => {
  const [categories, setCategories] = useState(['Breaking Bad']);

  const handleAdd = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif App</h1>

      <AddCategory onNewCategory={handleAdd} />

      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
        />
      ))}
    </>
  );
};
