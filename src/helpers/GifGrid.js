export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=oN0qOeX9roHO9mn1e78BQGezImcJ11Lm&q=${encodeURI(
    category
  )}&limit=20&offset=0&rating=g&lang=es`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      url: img.images?.downsized_medium.url,
      title: img.title,
    };
  });
  return gifs;
};
