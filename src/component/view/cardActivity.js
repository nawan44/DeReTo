import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import { useNavigate, useLocation, Link } from "react-router-dom";

import "moment/locale/id";
import Detail from "../../page/Detail";

export default function CardActivity(props) {
  const {
    // {title, checkActivity,
    setClickItemList,
    clickItemList,
    checkToDo,
    index,
    item,
    idDetail,
    setIdDetail,
    toDetail,
    // toDetail,
    handleDeleteList,
    list,
    setLempar,
    lempar,
  } = props;
  const navigate = useNavigate();

  //   const toDetail = (value, item) => {
  //     // setLempar(value.id);

  //     navigate(`/detail/${item.id}`);
  //     setIdDetail(item.id )

  //   };

  const toItemList = (value) => {
    setClickItemList(true);
    setLempar(value.id);
  };

  return (
    <Card key={index} sx={{ width: 200, height: "180px", margin: "10px" }}>
      <CardContent onClick={(id) => toDetail(id)}>
        {/* <CardContent onClick={ (id) =>checkActivity(item)  }> */}
        <Typography
          gutterBottom
          style={{ textAlign: "left", fontWeight: "bold" }}
          component="div"
        >
          {item.title}
        </Typography>
      </CardContent>
      <CardActions style={{ marginTop: "70px" }}>
        <Typography
          style={{
            fontSize: "12px",
            width: "80%",
            float: "left",
            textAlign: "left",
            color: "#888888",
          }}
        >
          {" "}
          {moment(item.created_at).format("DD MMMM  YYYY")}
        </Typography>
        <DeleteIcon
          onClick={(id) => handleDeleteList(item)}
          style={{ width: "20%", float: "right", color: "#888888" }}
        />
      </CardActions>
    </Card>
  );
}
