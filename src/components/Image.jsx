function Image({ image, title, small }) {
  const { url, webp } = image || {};

  const onLoadHandler = (e) => {
    e.target.classList.replace("opacity-0", "opacity-100");
  };

  return (
    <picture className="w-[31rem]">
      <source srcSet={webp} type="image/webp" />
      <img
        className={`object-cover w-full transition-opacity duration-300 ease-in opacity-0 ${
          small ? "aspect-square" : ""
        }`}
        src={url}
        alt={title}
        onLoad={onLoadHandler}
      />
    </picture>
  );
}

export default Image;
