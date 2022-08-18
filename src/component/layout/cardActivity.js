import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import { useNavigate, useLocation, Link } from "react-router-dom";

import "moment/locale/id";

export default function CardActivity(props) {
  const {
    index,
    item,
    idDetail,
    setIdDetail,
    toDetail,
    handleDeleteList,
    list,
  } = props;
  const navigate = useNavigate();

  return (
    <Card key={index} sx={{ width: 200, height: "180px", margin: "10px" }}>
      <CardContent data-cy="activity-item" onClick={(id) => toDetail(id)}>
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
          data-cy="activity-item-delete-button"
          onClick={(id) => handleDeleteList(item)}
          style={{ width: "20%", float: "right", color: "#888888" }}
        />
      </CardActions>
    </Card>
  );
}
