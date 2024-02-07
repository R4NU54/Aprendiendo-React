import { useState } from 'react';

import { AddCategory, GifGrid, GifHeader } from './components';

export const GifApp = () => {
  const [categories, setCategories] = useState(['Breaking Bad']);

  const handleAdd = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <GifHeader />
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
