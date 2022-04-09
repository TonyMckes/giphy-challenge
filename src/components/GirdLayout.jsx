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
    <div className="mx-auto my-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {data.map(({ id, images, title, user }) => (
          <Card key={id} {...{ id, images, title, user }} />
        ))}
      </div>
    </div>
  );
}
export default GridLayout;
