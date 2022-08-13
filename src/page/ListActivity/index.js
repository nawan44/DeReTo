import React, { useState } from "react";
import { startLogin } from "../../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AvatarMan from "../../assets/avatar/avatar-man.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Container, Typography } from "@mui/material";
import AppBar from "../../component/view/appBar";
import CardActivity from "../../component/view/cardActivity";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteListItem from "../../component/dialog/deleteListItem";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useSnackbar } from "notistack";
import NewActivity from "../NewActivity";
import List from "../List";

// const switcSSh =() =>{

//  }
const ListActivity = () => {
  let location = useLocation();

  // const toDashboard = () => {
  //   navigate("/new-activity");
  // };
  const initialList = [
    {
      id: 1,
      title: "New Activity",
      name: "John",
      list_kegiatan: {
        nama_list: "",
        priority: "",
      },
    },
    {
      id: 2,
      title: "New Activity",
      name: "Doe",
      list_kegiatan: {
        nama_list: "",
        priority: "",
      },
    },
    {
      id: 3,
      title: "New Activity",
      name: "Seb",
      list_kegiatan: {
        nama_list: "",
        priority: "",
      },
    },
  ];
  const [openDeleteList, setOpenDeleteList] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [newList, setNewList] = useState({
    title: "New Activity",
    name: "",
  });
  const [list, setList] = useState(initialList);
  const [selectedDeleteList, setSelectedDeleteList] = useState(list[1]);
  const [lempar, setLempar] = useState({
    id: list.id,
    title: list.title,
    name: "",
  });
  const [click, setClick] = useState(false);



  const deleteData = (id) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
    handleCloseDeleteList();
    enqueueSnackbar("Activity berhasil dihapus", { variant: "success" });
  };

  const handleAdd = () => {
    const newItems = [...list, newList];

    setList(newItems);
    setClick(false);
  };
  const handleDeleteList = (value) => {
    setOpenDeleteList(true);
    setLempar(value.id);
  };
  const handleCloseDeleteList = (value) => {
    setOpenDeleteList(false);
    setSelectedDeleteList(value);
  };

  const aa = () => {
    if (click == true) {
      return (
        <>
         <NewActivity list={list} setLempar={setLempar} lempar={lempar} /> 
        </>
      );
    } else if ( click == false) {
      return (
        <>
 <List
            list={list}
            click={click}
            setClick={setClick}
            lempar={lempar}
            setLempar={setLempar}
            // toDashboard={toDashboard}
            //  toDashboard={() => toDashboard()}
            handleDeleteList={handleDeleteList}
          />
          {/* <NewActivity list={list} lempar={lempar} /> */}
        </>
      );
    }
  };

  return (
    <Container style={{ width: "100%" }}>
      <AppBar handle={handleAdd} click={click} />
      {aa()}

      <DeleteListItem
        selectedValue={selectedDeleteList}
        lempar={lempar}
        open={openDeleteList}
        onClose={handleCloseDeleteList}
        list={list}
        setList={setList}
        onRemove={deleteData}
      />
    </Container>
  );
};
export default ListActivity;
