import { Outlet, Link } from "react-router-dom";
import TopBar from "./appBar";
import ClippedDrawer from "./clippedDrawer"
const Layout = () => {
  return (
    <>
    {/* <TopBar/>
<ClippedDrawer/>
      <Outlet /> */}
         {/* <h1>React Router</h1> */}

{/* <nav
  style={{
    borderBottom: 'solid 1px',
    paddingBottom: '1rem',
  }}
>
  <NavLink to="/dashboard" style={style}>
    Dashboard
  </NavLink>
  <NavLink to="/about" style={style}>
    About
  </NavLink>
</nav> */}

<TopBar/>
<main style={{ padding: '1rem 0', height:"100vh" }} className="bg-gray-300 ">
<ClippedDrawer/>

  <Outlet    />
</main>
    </>
  )
};

export default Layout;