async function getMovies() {
  const { API_URL, API_KEY } = process.env;
  const response = await fetch(
    `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const { results } = await response.json();

  return results;
}
