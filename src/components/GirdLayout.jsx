import { useEffect, useState } from "react";
import fetchGifs from "services/fetchGifs";
import Card from "./Card";

function GridLayout({ urlType, query, limit, offset, rating }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGifs({ urlType, query, limit, offset, rating }).then(({ data }) =>
      setData(data),
    );
  }, [urlType, query, limit, offset, rating]);

  return (
    <div className="container px-4 mx-auto my-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {data.length > 0 && data.map((gif) => <Card key={gif.id} {...gif} />)}
      </div>
    </div>
  );
}
export default GridLayout;
