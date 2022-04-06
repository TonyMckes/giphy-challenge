import Card from "./Card";

function GridCards({ gifsData }) {
  return (
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {gifsData.map((gif) => (
          <Card key={gif.id} {...gif} />
        ))}
      </div>
    </div>
  );
}
export default GridCards;
