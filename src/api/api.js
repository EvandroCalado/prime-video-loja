export const apiKey = "25f4df810c4a7a5d14690c12314847c9";

export const getMovies = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

export const request = {
  trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=pt-BR`,

  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`,
};
