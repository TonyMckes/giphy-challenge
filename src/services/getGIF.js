import axios from "axios";
import { API_KEY, GIF_URL } from "constants/index";

async function getGIF({ query = "" }) {
  try {
    const { data: response } = await axios({
      url: `${GIF_URL}/${query}?${API_KEY}`,
    });

    const { data, pagination, meta } = response;

    return { data, pagination, meta };
  } catch (error) {
    console.error(error);
  }
}

export default getGIF;
