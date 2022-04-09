import GridLayout from "components/GirdLayout";

function Home() {
  // TODO: extract components
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="m-4 text-xl font-bold ">En trending...</h1>

        <GridCards gifsData={data} />
      </div>
    </div>
  );
}
export default Home;
