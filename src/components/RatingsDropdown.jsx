function RatingsDropdown({ handleChange, selected }) {
  const ratingOptions = [
    ["g", "G - Level 1"],
    ["pg", "PG - Level 2"],
    ["pg-13", "PG-13 - Level 3"],
    ["r", "R - Level 4"],
  ];

  return (
    <div className="relative text-sm font-medium tracking-tight group">
      <label
        className="block text-center transition duration-150 delay-300 pointer-events-none opacity-20 md:inline group-hover:opacity-100"
        htmlFor="ratings"
      >
        Content Rating{" "}
      </label>
      <select
        className="p-1 text-gray-300 transition ease-in-out bg-no-repeat border border-gray-700 border-solid rounded-md hover:duration-300 bg-white/20 bg-clip-padding hover:bg-white/90 hover:text-gray-700 focus:text-gray-700 focus:bg-white/90 focus:border-blue-700 focus:outline-none"
        id="ratings"
        onChange={handleChange}
      >
        {ratingOptions.map(([rating, text]) => (
          <option
            className="bg-neutral-300"
            key={rating}
            selected={rating === selected}
            value={rating}
          >
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RatingsDropdown;
