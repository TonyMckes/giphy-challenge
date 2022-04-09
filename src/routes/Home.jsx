import GridLayout from "components/GirdLayout";

function Home() {
  // TODO: extract components
  return (
    <section className="container mx-auto">
      <h1 className="m-4 text-xl font-bold ">En trending...</h1>

      <GridLayout urlType="trending" limit={10} rating={"n"} />
    </section>
  );
}
export default Home;
