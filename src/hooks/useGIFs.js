import { useEffect, useState } from "react";
import fetchGifs from "services/fetchGifs";

function useGIFs({ urlType, query, offset, rating }) {
  const [loading, setLoading] = useState(true);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    if (query) setLoading(true);
    fetchGifs({ urlType, query, limit: 25, offset, rating }).then(
      ({ data }) => {
        setGifs((prevData) => [
          ...prevData,
          ...data.filter(
            (gif) => !prevData.some((prevGif) => prevGif.id === gif.id),
          ),
        ]);
        setLoading(false);
      },
    );
  }, [urlType, query, offset, rating]);

  useEffect(() => {
    setGifs([]);
  }, [query, rating]);

  return { loading, data: gifs };
}

export default useGIFs;
