import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Grid, Input, Button } from "@mui/material";
import ListActivity from "./ListActivity";
import ModalInformation from "../../component/dialog/dialogInformation";
import IconButton from "@mui/material/IconButton";
import "../../assets/css/style.css";
import DialogDeleteActivity from "../../component/dialog/dialogDeleteActivity";

import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import DialogSort from "../../component/dialog/dialogSort";
const Activity = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [openDeleteActivity, setOpenDeleteActivity] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const [openDeleteList, setOpenDeleteList] = useState(false);
  const [openAddToDoItems, setOpenAddToDoItems] = useState(false);
  const [newList, setNewList] = useState({
    title: "New Activity",
    name: "",
  });
  const [onClick, setOnClick] = useState(false);
  const [informasiHapus, setInformasiHapus] = useState(false);
  const [list, setList] = useState([]);
  const [selectedDeleteActivity, setSelectedDeleteActivity] = useState(list[1]);

  const [selectedDeleteList, setSelectedDeleteList] = useState(list[1]);
  const [clickActivity, setClickActivity] = useState();
  const [title, setTitle] = useState();
  const [idDetail, setIdDetail] = useState();
  // const [deleteTitleList, setDeleteTitleList] = useState("");


  const [deleteTitleList, setDeleteTitleList] = useState("");
  const [todoItemDetail, setTodoItemDetail] = useState();
  const [addActivity, setAddActivity] = useState([]);
  const [newAddActivity, setNewAddActivity] = useState({
    title: "New Activity",
    name: "",
  });

  useEffect(() => {
    getListData();
  }, []);

  useEffect(() => {
    getListData();
  }, [onClick]);


  const getListData = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_URL +
          // "/activity-groups?email=yoga%2B1%40skyshi.io",
          "/activity-groups?email=rachmat.d.gunawan@gmail.com",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let res = await response.json();
      setList(res);
      setOnClick(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleOpenSort = () => {
    setOpenSort(true);
  };

  const getDetail = async (value) => {
    

    navigate(`/detail/${value?.id}` , {
      state: {
        value: value,
        // titleBarDetil: res.title,
        // dataDetail: res.todo_items,
      },
    }
    );
  };



  const handleCloseAddToDoItems = (value) => {
    setOpenAddToDoItems(false);
  };


  const handleCloseInformasi = (value) => {
    setInformasiHapus(false);
  };
  const handleCloseSort = (value) => {
    setOpenSort(false);
    // setSelectedSort(value);
  };

  useEffect(() => {
    setTimeout(function () {
      setInformasiHapus(false);
    }, 2000);
  }, [informasiHapus]);

  const handleAddActivityGroup = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_URL + `/activity-groups`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            title: title ? title : newAddActivity.title,
            email: "rachmat.d.gunawan@gmail.com",
            priority:
              "list of priority is : very-high, high, normal, low, very-low",
          }),
        }
      );
      const newItems = [...addActivity, newAddActivity];
      setAddActivity(newItems);
      setOpenAddToDoItems(true);
      getListData();
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleOpenAddToDoItems = () => {
    const newItems = [...list, newList];
    setList(newItems);
    setOpenAddToDoItems(true);
  };
  const handleDeleteActivity = (value) => {
    setOpenDeleteActivity(true);
    setClickActivity(value.id);
    setDeleteTitleList(value.title);
  };
  const handleCloseDeleteActivity = (value) => {

    setOpenDeleteActivity(false);
    setSelectedDeleteActivity(value);
    setOnClick(true);
  };
  const handleDeleteList = (value) => {
    setOpenDeleteList(true);
    setClickActivity(value.id);
    setDeleteTitleList(value.title);
  };

  const handleCloseDeleteList = (value) => {
    setOpenDeleteList(false);
    setSelectedDeleteList(value);
    setOnClick(true);
  };
  const [valueSort, setValueSort] = useState();

  const sortActivity = () => {
    if (valueSort === "Terbaru") {
      return list.sort(
        (b, a) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    } else if (valueSort === "Terlama") {
      return list.sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    } else if (valueSort === "A - Z") {
      return list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (valueSort === "Z - A") {
      return list.sort((a, b) => b.title.localeCompare(a.title));
    } else if (valueSort === "Belum Selesai") {
      return list.sort((a, b) => b.title.localeCompare(a.title));
    }
  };
  const changeToDoSort = (newValue) => {
    setValueSort(newValue);
  };
  return (
    <Container style={{ width: "100%" }}>

      <Grid
        style={{
          margin: "0 auto",
          textAlign: "center",
          margin: "50px",
        }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        class="todo-header"
      >

          <Grid
            item
            xs={6}
            style={{
              fontSize: "24px",
              textAlign: "left",
              fontWeight: "bold",
            }}
            data-cy="activity-title"
          >
            <span data-cy="activity-title">Activity</span>
          </Grid>
        
          <Grid item xs={6} >
        <Button
            onClick={handleAddActivityGroup}
            variant="contained"
            data-cy="activity-add-button"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
            + Tambah
          </Button>
        </Grid>
      </Grid>
      <ListActivity
      class="dashboard-content"
      data-cy="todo-empty-state"

        handleCloseDeleteList={handleCloseDeleteList}
        idDetail={idDetail}
        setIdDetail={setIdDetail}
        handleCloseDeleteActivity={handleCloseDeleteActivity}
        list={list}
        sortActivity={sortActivity()}
        handleDeleteActivity={handleDeleteActivity}
        handleDeleteList={handleDeleteList}
        getDetail={getDetail}
        handleAddActivityGroup={handleAddActivityGroup}
        openDeleteList={openDeleteList}
        openDeleteActivity={openDeleteActivity}
        valueSort={valueSort}
      />
      <DialogDeleteActivity
        selectedValue={selectedDeleteActivity}
        clickActivity={clickActivity}
        open={openDeleteActivity}
        onClose={handleCloseDeleteActivity}
        deleteTitleList={deleteTitleList}
        onClick={() => setOnClick(!onClick)}
        setOpenDeleteActivity={setOpenDeleteActivity}
        setInformasiHapus={setInformasiHapus}
      />
      <ModalInformation
        // data-cy="modal-information"
        open={informasiHapus}
        onClose={handleCloseInformasi}
        setInformasiHapus={setInformasiHapus}
      />

      <DialogSort
        open={openSort}
        onClose={handleCloseSort}
        // sorts={sorts}
        valueSort={valueSort}
        setValueSort={setValueSort}
      />
     
    </Container>
  );
};
export default Activity;
