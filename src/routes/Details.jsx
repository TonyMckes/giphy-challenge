import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, API_KEY } from "../constants";

function Details() {
  const [data, setData] = useState({});
  const { id } = useParams();

  // TODO: improve destructuring
  const {
    title,
    images: { original: { url } = {} } = {},
    username,
    user: { avatar_url, display_name } = {},
    source,
  } = data || {};

  useEffect(() => {
    fetchGifs({ type: "byId", query: id }).then(({ data }) => setData(data));
  }, []);

  // TODO: extract components
  return (
    title && (
      <div className="">
        Details
        <div className="w-4/5 mx-auto flex flex-col">
          <h1 className=" my-4 font-bold text-lg">{title}</h1>
          <div className="flex items-center ">
            <img
              className="w-10 h-10 rounded-full"
              src={avatar_url}
              alt={username}
            />
            <div className="mx-2">
              <p className="text-sm">{display_name}</p>
              <p className="text-xs font-light">{username}</p>
            </div>
          </div>

          <div className="bg-zinc-900/20 rounded flex justify-center my-4">
            <img className="" src={url} alt={title} />
          </div>

          <div className="text-xs py-4">
            <p>
              Fuente:{" "}
              <a className="text-blue-500 hover:text-blue-400" href={source}>
                {source}
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  );
}
export default Details;
