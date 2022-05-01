import { useAuthContext } from "context/AuthProvider";
import { Link } from "react-router-dom";

function NavigationLink({ children, handler, text, url }) {
  const { setAuthState } = useAuthContext();

  const handleClick = () => {
    setAuthState({ username: "" });
  };

  return (
    <Link
      className="p-2 transition-all duration-75 rounded-md group hover:bg-white/10"
      onClick={handler && handleClick}
      to={url}
    >
      {children}
      <span className="group-hover:text-white text-neutral-200">{text}</span>
    </Link>
  );
}

export default NavigationLink;
