import GridLayout from "components/GirdLayout";
import SectionContainer from "components/SectionContainer";

function Home() {
  return (
    <SectionContainer heading="En trending...">
      <GridLayout urlType="trending" limit={10} rating={"n"} />
    </SectionContainer>
  );
}
export default Home;
