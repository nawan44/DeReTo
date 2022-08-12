import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LogoutIcon from '@mui/icons-material/Logout';
import { Outlet, Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;


export default function ClippedDrawer(props) {
    // const classes = useStyles();
    const navigate = useNavigate();

    const onLogout = (data) => {
        // localStorage.removeItem('token');
        // localStorage.removeItem('userInfo'); 
        
        // localStorage.removeItem('auth-token');
        // localStorage.removeItem('userToken');
    
        navigate('/login');
      };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem button  >
                            <Link to="/dashboard" style={{ width: "100%", }} >
                                <ListItemIcon style={{ width: "20%", float: "left", marginTop: "5px" }}>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText style={{ width: "70%", float: "left" }} primary="Dashboard" />
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem button >
                            <Link to="/shipping-comps" style={{ width: "100%", }} >
                                <ListItemIcon style={{ width: "20%", float: "left", marginTop: "5px" }}>
                                    <LocalShippingIcon />
                                </ListItemIcon>
                                <ListItemText style={{ width: "70%", float: "left" }} primary="Shipping Comps" />
                            </Link>
                        </ListItem>
                        <Divider />
                        <div style={{ backgroundColor: "#1976D2", position: "fixed", bottom: 0, width: 240, padding: 10, height:50 }}  >
                            {/* <Link to="/login"  > */}
                            {/* <IconButton
                                style={{
                                    color: "#FFFF",
                                    zIndex: 2000,
                                    position: "absolute",
                                    top: "8px",
                                    right: "10px",
                                }}
                                // onClick={() => {
                                //     localStorage.removeItem("token");
                                //     history.push("login");
                                // }}
                            > */}
                            <div onClick={onLogout} className="focus:outline-none text-white focus:border-blacks pl-10 m-auto	" >
                                    <LogoutIcon className="text-white" />
                                    <span className="text-white text-lg focus:outline-none text-white focus:border-blacks pl-2">Logout</span>
                                </div>
                            {/* </Link> */}
                        </div>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}