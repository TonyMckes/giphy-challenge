import Image from "components/Image";
import SectionContainer from "components/SectionContainer";
import UserInfo from "components/UserInfo";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import fetchGifs from "services/fetchGifs";

function Details() {
  const { id } = useParams();
  const { state } = useLocation();

  const [data, setData] = useState(state ? state : {});

  const { title, user, images } = data || {};
  const { original } = images || {};
  const { avatar_url, display_name } = user || {};

  useEffect(() => {
    fetchGifs({ urlType: "byId", query: id }).then(({ data }) => setData(data));
  }, [id]);

  return (
    <SectionContainer heading={title}>
      <UserInfo avatar_url={avatar_url} display_name={display_name} />

      <div className="flex items-center justify-center my-4 rounded bg-zinc-900/20">
        <Image title={title} image={original} />
      </div>
    </SectionContainer>
  );
}
export default Details;
