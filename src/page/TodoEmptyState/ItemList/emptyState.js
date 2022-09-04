import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import "../../../assets/css/style.css";
import AvatarWoman from "../../../assets/avatar/avatar-woman.jpg";

const EmptyState = (props) => {
  const { handleOpenAddToDoItems } = props;
  return (
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
        data-cy="todo-empty-state"
      />
    </Grid>
  );
};
export default EmptyState;
