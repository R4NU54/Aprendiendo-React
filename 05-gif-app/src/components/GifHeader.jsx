import image from '../../GifApp.webp';

export const GifHeader = () => {
  return (
    <header className='header'>
      <img
        alt='GifApp'
        className='gif-app'
        src={image}
      />
      <h1>React Gif App</h1>
    </header>
  );
};
