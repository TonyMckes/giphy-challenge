import { Link } from "react-router-dom";
import Image from "./Image";
import UserInfo from "./UserInfo";

function Card({ elementRef, id, images = {}, title, user = {} }) {
  const { fixed_width } = images;

  return (
    <div
      ref={elementRef}
      className="relative overflow-hidden duration-300 rounded group hover:ring-2 bg-zinc-600 hover:bg-zinc-500 border-neutral-600"
      key={id}
    >
      <Link to={`/gallery/${id}`} state={{ title, user }}>
        <div className="absolute top-0 z-10 w-full h-12 transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-black/60 ">
          <UserInfo {...user} />
        </div>

        <div className="relative">
          <Image title={title} image={fixed_width} small />
        </div>

        <p className="px-2 py-3 text-sm truncate">{title}</p>
      </Link>
    </div>
  );
}
export default Card;
