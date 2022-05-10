import { useAuthContext } from "context/AuthProvider";
import { Link } from "react-router-dom";
import userLogout from "services/userLogout";

function NavigationLink({ children, handler, text, url }) {
  const { setAuthState } = useAuthContext();

  const handleClick = () => {
    setAuthState(userLogout);
  };

  return (
    <Link
      className="p-2 text-sm transition-all duration-75 rounded-md whitespace-nowrap md:text-base group hover:bg-white/10"
      onClick={handler && handleClick}
      to={url}
    >
      {children}
      <span className="group-hover:text-white text-neutral-200">{text}</span>
    </Link>
  );
}

export default NavigationLink;
