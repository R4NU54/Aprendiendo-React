import { GifItem } from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <section className='section-search'>
      <h3>{category}</h3>
      {isLoading && <p>Loading...</p>}
      <div className='card-grid'>
        {images.map((images) => (
          <GifItem
            key={images.id}
            {...images}
          />
        ))}
      </div>
    </section>
  );
};
