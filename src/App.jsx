import NavBar from "components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-800 text-neutral-100 h-full overflow-y-auto">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
