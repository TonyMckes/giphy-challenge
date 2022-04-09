import GridLayout from "components/GirdLayout";
import { useSearchParams } from "react-router-dom";

function SearchResults() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

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
