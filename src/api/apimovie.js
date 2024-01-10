const apikey = process.env.REACT_APP_APIKEY;
const baseURL = process.env.REACT_APP_BASEURL;

export async function getMovie() {
  const request = await fetch(`${baseURL}/trending/movie/day?api_key=${apikey}`);
  const response = await request.json();

  return response.results;
}
