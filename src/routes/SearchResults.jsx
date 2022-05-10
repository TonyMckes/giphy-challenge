import GridLayout from "components/GirdLayout";
import SectionContainer from "components/SectionContainer";
import { useSearchParams } from "react-router-dom";

function SearchResults() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  return (
    <SectionContainer heading={`Resultados de "${query}"...`} ratingMenu>
      <GridLayout urlType="search" query={query} />
    </SectionContainer>
  );
}
export default SearchResults;
