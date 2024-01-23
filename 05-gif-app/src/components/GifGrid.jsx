import { GiftItem } from './GiftItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <section className='section-search'>
      <h3>{category}</h3>
      {isLoading && <p>Loading...</p>}
      <div className='card-grid'>
        {images.map((images) => (
          <GiftItem
            key={images.id}
            {...images}
          />
        ))}
      </div>
    </section>
  );
};
