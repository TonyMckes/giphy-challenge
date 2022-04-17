import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchBox({ placeholderText }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [inputValue, setInputValue] = useState(query || "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue) {
      navigate(`/search?q=${inputValue}`);
    } else {
      navigate("/");
    }
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form
      className="flex flex-row-reverse items-center"
      onSubmit={handleSubmit}
    >
      <label className="sticky z-10 flex items-center w-full top-3 md:top-0 md:m-0 ">
        <input
          className="w-full px-3 py-1 pr-10 transition-colors duration-75 rounded outline-none bg-white/20 focus:bg-white/30 hover:bg-white/25"
          onChange={handleInput}
          placeholder={placeholderText}
          type="text"
          value={inputValue}
        />
      </label>
      <button
        className="absolute z-10 mx-2 transition-colors hover:text-white text-neutral-300"
        type="submit"
      >
        <MdSearch className="w-6 h-6" />
      </button>
    </form>
  );
}
export default SearchBox;
