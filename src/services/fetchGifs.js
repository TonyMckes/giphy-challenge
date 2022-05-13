import axios from "axios";
import { API_KEY, GIF_URL } from "constants/index";

// prettier-ignore
async function fetchGifs({ urlType = "", query = "", limit = 25, offset = 0, rating = "g" }) {
  try {
    if (!urlType) throw Error("urlType is required");

    const lang = navigator.language;

    const API_URL = {
      search: `${GIF_URL}/search?${API_KEY}&q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`,
      trending: `${GIF_URL}/trending?${API_KEY}&limit=${limit}&offset=${offset}&rating=${rating}`,
      random: `${GIF_URL}/random?${API_KEY}&tag=${query}&rating=${rating}`,
    };
 
    const { data: response } = await axios({ url: API_URL[urlType] });
    const { data, pagination, meta } = response;

    return { data, pagination, meta };
  } catch (error) {
    console.error("CATCH", error);

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.error(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error", error.message);
    }
    console.error(error.config);
  }
}

export default fetchGifs;
