export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=9&api_key=oV89d80FS41Jbtz2Ux3IhIbLMoSsiN27`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images?.downsized_medium.url,
  }));

  return gifs;
};
