import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar, Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import { useHistory } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import ClippedDrawer from "./clippedDrawer"
import Avatar from "../../assets/avatar/avatar.png"
import { NavLink, useLocation } from "react-router-dom";

export default function TopBar() {
  let location = useLocation();

  // const history = useHistory();

  // const routeLogin = (a) => {
  //   a.preventDefault();
  //   history.push("/login");
  // };
  // const routeProfile = (a) => {
  //   a.preventDefault();
  //   history.push("/profile");
  // };
  const Title = () => {
    if (location.pathname === "/login" || location.pathname === "/profile") {
      return <span>TO DO LIST APP Log</span>

    } else {
      return <span>TO DO LIST APP</span>
    }
  }
  const RightBar = () => {
    if (location.pathname === "/login" || location.pathname === "/profile") {
      return (
        <>
          <Typography style={{ height: "65px", padding: "20px 10px 0 10px" }} className="4 text-lg hover:bg-black active:bg-black focus:outline-none mx-4" >
            <Link to="/profile" >Profile</Link>
          </Typography>
          <Typography style={{ height: "65px", padding: "20px 10px 0 10px" }} className="4 text-lg hover:bg-black active:bg-black focus:outline-none mx-4" >
            <Link to="/login" >
              Login
            </Link>
          </Typography>
        </>
      )

    } else {
      return (
        <Box sx={{ flexGrow: 0 }}>
           <Link to="/profile" >
          <Tooltip title="Open settings" style={{ float: "left", padding: "5px" }}>
            <IconButton sx={{ p: 0 }}>
              <img alt="Remy Sharp" width={50} src={Avatar} />
            </IconButton>

          </Tooltip>
          <Typography style={{ height: "65px", padding: "20px 10px 0 10px", float: "left" }} className="4 text-lg hover:bg-black active:bg-black focus:outline-none mx-4" >
           Tony
          </Typography>
          </Link>
        </Box>
      )
    }
  }


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', top: 0, zIndex: (theme) => theme.zIndex.drawer + 1 }}>

          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              KLEDO TEST
              {/* <MenuIcon /> 
            </IconButton> */}

            <Typography variant="h6" style={{ height: "65px", paddingTop: "12px", fontWeight: "bold" }} component="div" sx={{ flexGrow: 1 }}>
              {Title()}
            </Typography>

        
            {RightBar()}
            {/* <AccountCircle /> */}
          </Toolbar>
        </AppBar>
      </Box>
      {/* <ClippedDrawer /> */}
    </>
  );
}