import GridLayout from "components/GirdLayout";
import SectionContainer from "components/SectionContainer";

function Home() {
  return (
    <SectionContainer heading="En trending..." ratingMenu>
      <GridLayout urlType="trending" />
    </SectionContainer>
  );
}
export default Home;
