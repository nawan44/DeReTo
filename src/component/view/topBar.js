import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar, Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


function TopBar() {
    return ( 
        <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed"  sx={{backgroundColor:"#16ABF8", top: 'auto', top: 0, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Link to="/dashboard-empty">
        <Typography  variant="h6" style={{ height: "65px", padding: "12px 0 0 20px", fontWeight: "bold" }} component="div" sx={{ flexGrow: 1 }}>
              TO DO LIST APP
              </Typography>
        </Link>
          </AppBar>
        </Box>
      </>
        );
}

export default TopBar;