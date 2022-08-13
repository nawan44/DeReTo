import { Outlet, Link } from "react-router-dom";
import TopBar from "./topBar";
const Layout = () => {
  return (
    <>
<TopBar/>
<main style={{ padding: '70px 0 0 0', height:"100vh" }} className="bg-gray-300 ">
  <Outlet    />
</main>
    </>
  )
};

export default Layout;