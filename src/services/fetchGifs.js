import { API_KEY, GIF_URL } from "constants/index";

// prettier-ignore
async function fetchGifs({ urlType = "", query = "", limit = 25, offset = 0, rating = "g" }) {
  try {
    if (!urlType) throw Error("urlType is required");

    const lang = navigator.language;

    const API_URL = {
      search: `${GIF_URL}/search?${API_KEY}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`,
      trending: `${GIF_URL}/trending?${API_KEY}&limit=${limit}&rating=${rating}`,
      random: `${GIF_URL}/random?${API_KEY}&tag=${query}&rating=${rating}`,
      byId: `${GIF_URL}/${query}?${API_KEY}`,
    };

    const response = await fetch(API_URL[urlType]);
    const { data, pagination, meta } = await response.json();

    return { data, pagination, meta };
  } catch (error) {
    console.error(error);
  }
}

export default fetchGifs;