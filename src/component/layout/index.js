import { Outlet } from "react-router-dom";
import TopBar from "./topBar";

const Layout = () => {
  return (
    <>
      <TopBar />
      <main
        style={{ padding: "70px 0 0 0", height: "100%" }}
        className="bg-gray-100 "
      >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
