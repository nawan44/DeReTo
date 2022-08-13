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
const List = ({lempar,setLempar,list, handleDeleteList,     click, setClick,toDashboard}  ) => {
  const [openAddList, setOpenAddList] = useState(false);
console.log(lempar)
  const handleCloseAddList = (value) => {
    setOpenAddList(false);
  };
  const handleOpenAddList = () => {
    setOpenAddList(true);
  };
  return (
    <Container style={{ width: "100%", backgroundColor:"red" }}>
 <Grid
        style={{
          margin: "0 auto",
          textAlign: "center",
          width: "90%",
        }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      > {list && list?.map((item, index) => (
          <CardActivity
          key={list.id}
          click={click} setClick ={setClick}
            index={index}
            item={item}
            list={list}
            lempar={lempar}
            setLempar={setLempar}
            handleDeleteList={handleDeleteList}
            toDashboard={toDashboard}
          />
          ))}
      </Grid>    
    </Container>
  );
};
export default List;
