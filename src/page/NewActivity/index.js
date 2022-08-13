import React, { useState } from "react";
import { startLogin } from "../../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AvatarWoman from "../../assets/avatar/avatar-woman.jpg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Container, Typography } from "@mui/material";
import AppBar from "../../component/view/appBar";
import CardActivity from "../../component/view/cardActivity";
import AddListItem from "../../component/dialog/addListItem";
const NewActivity = (props) => {
  const {lempar,list, setLempar} = props
  const [openAddList, setOpenAddList] = useState(false);


  const handleCloseAddList = (value) => {
    setOpenAddList(false);
  };
  const handleOpenAddList = () => {
    setOpenAddList(true);
  };
  return (
    <Container style={{ width: "100%" }}>
      {/* <AppBar /> */}
      <Grid
        style={{
          margin: "0 auto",
          textAlign: "center",
          padding: "40px 0px",
          // backgroundColor: "green",
          width: "90%",
        }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <img
          alt="Remy Sharp"
          width={300}
          src={AvatarWoman}
          style={{ margin: "0 auto", textAlign: "center" }}
          onClick={handleOpenAddList}
        />
      </Grid>
      <AddListItem lempar={lempar} setLempar={setLempar} open={openAddList} onClose={handleCloseAddList} />
    </Container>
  );
};
export default NewActivity;
