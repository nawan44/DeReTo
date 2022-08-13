import  React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import {  useNavigate, useLocation, Link } from "react-router-dom";

import 'moment/locale/id';
import NewActivity from '../../page/NewActivity';

export default function CardActivity(props) {
  // const [click, setClick] = useState(false)
  const {title,
    // toDashboard,
    index, item,handleDeleteList,list,setLempar, lempar,click, setClick} = props
  const navigate = useNavigate();



  const toDashboard = (value) => {
    setClick(true)
    setLempar(value);


  };
  return (
    <Card
    key={index}
    sx={{ width: 200, height: "180px", margin: "10px" }}
  >
    <CardContent onClick={(id) => toDashboard (item) }>
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
        {moment().format("DD MMMM  YYYY")}
      </Typography>
      <DeleteIcon
        onClick={(id) => handleDeleteList(item)}
        style={{ width: "20%", float: "right", color: "#888888" }}
      />
    </CardActions>
  </Card>
  );
}
