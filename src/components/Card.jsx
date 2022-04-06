import { Link } from "react-router-dom";

function Card(data) {
  // TODO: improve destructuring
  const {
    id,
    images: {
      fixed_height: { url },
    },
    title,
  } = data;

  return (
    <div
      className="overflow-hidden duration-300 border rounded shadow-lg bg-zinc-600 hover:bg-zinc-500 border-neutral-600 "
      key={id}
    >
      <Link to={`/gallery/${id}`}>
        <img className="object-cover w-full h-52" src={url} alt="title" />

        <h4 className="px-3 py-6 text-sm">{title}</h4>
      </Link>
    </div>
  );
}
export default Card;
