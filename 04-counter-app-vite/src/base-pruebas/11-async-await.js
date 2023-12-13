export const getImagen = async () => {
  try {
    const apiKey = 'wMAlU6jkXFEWXR682AFoaUwNbt5x4uqM';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();

    const { url } = data.images.original;

    // const img = document.createElement('img');
    // img.src = url;
    // document.body.append(img);
    return url;
  } catch (error) {
    // manejo del error
    console.error(error);
    return 'No existe la imagen';
  }
};

getImagen();
