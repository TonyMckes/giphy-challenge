import GridLayout from "components/GirdLayout";
import SectionContainer from "components/SectionContainer";

function Home() {
  return (
    <SectionContainer heading="En trending...">
      <GridLayout urlType="trending" limit={10} rating="g" />
    </SectionContainer>
  );
}
export default Home;
