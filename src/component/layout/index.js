import { Outlet } from "react-router-dom";
import TopBar from "./topBar";

const Layout = () => {
  return (
    <>
      <TopBar class="header" />
      <main
        style={{ padding: "70px 0 0 0", height: "100%" }}
        // className="bg-gray-100 "
        class="container"
      >
        <Outlet/>
      </main>
    </>
  );
};

export default Layout;
