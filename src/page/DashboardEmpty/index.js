import React, { PureComponent } from "react";
import { startLogin } from "../../actions";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AvatarMan from "../../assets/avatar/avatar-man.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Container, Typography } from "@mui/material";
import AppBar from "../../component/view/appBar";
import { Link, useNavigate, useLocation } from "react-router-dom";

const DashboardEmpty = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const toDashboard = () => {
    navigate("/list-activity");
  };

  return (
    <Container style={{ width: "95%" }}>
   
   <AppBar />
      <Grid
        style={{
          margin: "0 auto",
          textAlign: "center",
          padding: "0px 30px",
          // backgroundColor: "green",
          width: "70%",
        }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid
          item
          xs={6}
          style={{
            margin: "0 auto",
            textAlign: "center",
            fontWeight: "bold",
            // backgroundColor: "red",
          }}
        >
          <img
            alt="Remy Sharp"
            width={250}
            src={AvatarMan}
            style={{ margin: "0", textAlign: "right" }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Button       onClick={toDashboard} sx={{ padding: "30px 90px"}} variant="outlined">
            <AddCircleIcon sx={{ fontSize: 70, color:"#16ABF8"  }} />
          </Button>

          <Typography
            style={{
              margin: "0 auto",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Buat Activity Pertamamu
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
export default DashboardEmpty;
