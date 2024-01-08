const apiKey = process.env.REACT_APP_APIKEY;
const baseURL = process.env.REACT_APP_BASEURL;

export async function getMovieTrending() {
  const request = await fetch(`${baseURL}/trending/movie/week?api_key=${apiKey}`);
  const response = await request.json();

  return response.results;
}
