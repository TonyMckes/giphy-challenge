import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

function NavBar() {
  // TODO: extract components
  return (
    <div className="bg-[#171544] p-4 sticky top-0">
      <div className="flex items-center justify-between mx-auto 2xl:container">
        <div className="hidden w-1/3 md:block">
          <Link to="/" className="text-2xl font-black">
            GIPHY <span className="font-normal tracking-wide">Challenge</span>
          </Link>
        </div>

        <div className="w-full md:w-1/3 ">
          <SearchBox placeholderText="Images" />
        </div>

        <div className="hidden w-1/3 text-right md:block ">
          <a
            className="p-2 transition-all duration-75 rounded-md group hover:bg-white/10"
            href="https://github.com/TonyMckes/giphy-challenge"
          >
            <BsGithub className="inline-block w-5 h-5 align-sub" />{" "}
            <span className="group-hover:text-white text-neutral-200">
              Source code
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
