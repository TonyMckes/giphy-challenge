import useGIFs from "hooks/useGIFs";
import { useCallback, useRef, useState } from "react";
import Card from "./Card";

function GridLayout({ urlType, query, rating }) {
  const [offset, setOffset] = useState(0);
  const { loading, data } = useGIFs({ urlType, query, rating, offset });

  const observer = useRef();

  const cardRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(([card]) => {
        if (card.isIntersecting) setOffset((prevOffset) => prevOffset + 25);
      });

      if (node) observer.current.observe(node);
    },
    [loading],
  );

  return (
    <div className="mx-auto my-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {data.map(({ id, images, title, user }, index) =>
          data.length - 10 === index ? (
            <Card
              elementRef={cardRef}
              loading={loading}
              key={id}
              {...{ id, images, title, user }}
            />
          ) : (
            <Card key={id} {...{ id, images, title, user }} />
          ),
        )}
      </div>
    </div>
  );
}
export default GridLayout;
