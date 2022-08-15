import React, { useState } from "react";
import AvatarWoman from "../../assets/avatar/avatar-woman.jpg";
import { Container, Grid } from "@mui/material";
import AddListItem from "../../component/dialog/addListItem";
import AppBar from "../../component/view/appBar";

const Detail = (props) => {
  const {
    lempar,
    list,
    setLempar,
    setOpenAddTodoItems,
    openAddTodoItems,
    handleCloseAddTodoItems,
  } = props;
  const [openAddToDoItems, setOpenAddToDoItems] = useState(false);

  const handleCloseAddToDoItems = (value) => {
    setOpenAddToDoItems(false);
  };const handleOpenAddToDoItems = () =>{
    setOpenAddToDoItems(true)
    console.log("sahbcasbc")
  }

  return (
    <Container style={{ width: "100%" }}>
      <AppBar />
      <Grid
        style={{
          margin: "0 auto",
          textAlign: "center",
          padding: "40px 0px",
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
          onClick={handleOpenAddToDoItems}
        />
      </Grid>
      <AddListItem
           open={openAddToDoItems}
           onClose={handleCloseAddToDoItems}
      />
    </Container>
  );
};
export default Detail;
