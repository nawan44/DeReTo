import React, { useState, useEffect } from "react"
import { styled } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";

import TopBar from "../../component/view/appBar";
import avatar from "../../assets/avatar/avatar.png"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClippedDrawer from "../../component/view/clippedDrawer";


const Dashboard = (props) => {


    return (
        <>
        {/* <TopBar/>
       <h1 style={{marginTop:"70px"}}>Dashboard</h1> */}
        <div style={{ padding: "100px 0 0 280px", height: "600px", margin: "0 auto", textAlign: "center" }}>
      <Grid item xs={8} style={{ height: "500px", borderRadius: "15px", margin: "0 auto", textAlign: "center" }} className="bg-white">
        <Paper className="p-4"style={{ borderRadius: "15px",boxShadow: "none"  }}>
          <Grid container spacing={2} style={{margin:"0 auto", textAlign:"center", height:"500px",paddingBottom:"50px", width:"100%"}}  >
            <Grid item xs={8}  >
              <Typography style={{ float: "left", fontWeight: "bold", fontSize: "24px" }} className="">Dashboard</Typography>
            </Grid>
            <Grid item xs={8} style={{margin:"0 auto", textAlign:"center", padding:"50px 30px",marginTop:"50px", backgroundColor:"#F2F2F2"}}  >

            <Grid item xs={8} 
            // className=" bg-gray-200 "
             style={{margin:"0 auto", textAlign:"center", width:"700px",borderRadius:"30px", paddingTop:"50px" }} >
              <Typography style={{margin:"0 auto", textAlign:"center",   fontWeight: "bold", fontSize: "36px", color:"#828282" }} >
                  Selamat Datang
              </Typography>
              <Typography style={{margin:"0 auto", textAlign:"center",   fontWeight: "bold", fontSize: "24px",color:"#BDBDBD" }} >
                  Tony Stark
              </Typography>
            </Grid>
            </Grid>

          </Grid>


      
        </Paper>
      </Grid>


    </div>
        </>
    );
}
export default Dashboard



