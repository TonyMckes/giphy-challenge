import GridCards from "components/GridCards";
import { useEffect, useState } from "react";
import { BASE_URL, API_KEY } from "../constants";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: extract this to a separate function
    (async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/trending?api_key=${API_KEY}&limit=10&rating=g`,
        );
        const { data, meta, pagination } = await res.json();

        setData(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

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
