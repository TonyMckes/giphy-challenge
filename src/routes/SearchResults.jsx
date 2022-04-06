import GridCards from "components/GridCards";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BASE_URL, API_KEY } from "../constants";

function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);

  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  useEffect(() => {
    // TODO: extract this to a separate function
    (async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/search?api_key=${API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`,
        );
        const { data, meta, pagination } = await res.json();

        setSearchResults(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [searchParams]);

  // TODO: extract components
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="m-4 text-xl font-bold ">Resultados de "{query}"...</h1>

        <GridCards gifsData={searchResults} />
      </div>
    </div>
  );
}
export default SearchResults;
