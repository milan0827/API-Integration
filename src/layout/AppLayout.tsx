import { Outlet } from "react-router-dom";
import UserForm from "../pages/UserForm.tsx/index.tsx";
import Navbar from "./Navbar.tsx";
function AppLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
