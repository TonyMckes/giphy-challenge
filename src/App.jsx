import NavBar from "components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-800 text-white h-full overflow-y-auto">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
