import GridLayout from "components/GirdLayout";
import SectionContainer from "components/SectionContainer";
import { useSearchParams } from "react-router-dom";

function SearchResults() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  return (
    <SectionContainer heading={`Resultados de "${query}"...`}>
      <GridLayout urlType="search" query={query} limit={10} rating="g" />
    </SectionContainer>
  );
}
export default SearchResults;
