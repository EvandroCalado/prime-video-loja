export const apiKey = "25f4df810c4a7a5d14690c12314847c9";

export const getMovies = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

export const request = {
  trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=pt-BR`,

  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=2`,

  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR&page=1`,
};

export const getDircover = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=true&page=3&with_watch_monetization_types=flatrate`
  );
  return await response.json();
};

export const getDetails = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
  );
  return await response.json();
};

export const getVideo = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
  );
  return await response.json();
};

export const getCredits = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
  );
  return await response.json();
};

export const getSimilar = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=pt-BR&page=1`
  );
  return await response.json();
};

export const getImdbRating = async (imdbId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/find/${imdbId}?api_key=${apiKey}&external_source=imdb_id&language=en-US`
  );
  return await response.json();
};

export const getSearch = async (movie) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&page=1&include_adult=false&query=${movie}`
  );
  return await response.json();
};
