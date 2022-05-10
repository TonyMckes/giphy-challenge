import { Children, cloneElement, isValidElement, useState } from "react";
import RatingsDropdown from "./RatingsDropdown";

const initialState = () => localStorage.getItem("rating") || "g";

function SectionContainer({ children, heading, ratingMenu }) {
  const [rating, setRating] = useState(initialState);

  const handleChange = (e) => {
    localStorage.setItem("rating", e.target.value);
    setRating(e.target.value);
  };

  return (
    <section className="container mx-auto">
      <div className="mx-4">
        <div className="flex items-center justify-between md:mx-4 md:my-4">
          <h2 className="self-end text-lg font-bold truncate">{heading}</h2>
          {ratingMenu && (
            <RatingsDropdown handleChange={handleChange} selected={rating} />
          )}
        </div>

        {Children.map(children, (child) =>
          isValidElement(child) ? cloneElement(child, { rating }) : child,
        )}
      </div>
    </section>
  );
}

export default SectionContainer;
