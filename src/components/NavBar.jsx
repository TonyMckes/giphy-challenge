import { useAuthContext } from "context/AuthProvider";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import SearchBox from "./SearchBox";
import SourceCodeLink from "./SourceCodeLink";

function NavBar() {
  const { username } = useAuthContext();

  return (
    <div className="bg-[#171544] p-4 sticky top-0 z-10">
      <div className="flex items-center justify-between mx-auto 2xl:container">
        <div className="w-1/3">
          <Link to="/" className="text-2xl font-black">
            GIPHY{" "}
            <span className="hidden font-normal tracking-wide md:inline">
              Challenge
            </span>
          </Link>
        </div>

        <div className="w-full md:w-1/3 ">
          <SearchBox placeholderText="Images" />
        </div>

        <div className="hidden w-1/3 text-right md:block space-2">
          <nav className="flex justify-end">
            <SourceCodeLink />
            {!username ? (
              <NavigationLink text="Login" url="login">
                <IoMdLogIn className="inline-block w-5 h-5 align-sub" />{" "}
              </NavigationLink>
            ) : (
              <NavigationLink handler text="Logout" url="#">
                <IoMdLogOut className="inline-block w-5 h-5 align-sub" />{" "}
              </NavigationLink>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
