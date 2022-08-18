import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import AppBar from "../../component/layout/appBar";
import { useSnackbar } from "notistack";
import ListActivity from "./ListActivity";
import DialogDeleteData from "../../component/dialog/dialogDeleteData";

const Activity = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { state } = useLocation();

  const [openDeleteList, setOpenDeleteList] = useState(false);
  const [openAddToDoItems, setOpenAddToDoItems] = useState(false);
  const [newList, setNewList] = useState({
    title: "New Activity",
    name: "",
  });
  const [list, setList] = useState([]);
  const [selectedDeleteList, setSelectedDeleteList] = useState(list[1]);
  const [selectedActivity, setSelectedActivity] = useState({
    itemActivity: null,
    aksiActivity: "",
  });
  const [clickActivity, setClickActivity] = useState();
  const [title, setTitle] = useState();
  const [idDetail, setIdDetail] = useState();
  const [todoItem, setTodoItem] = useState();
  const [deleteTitleList, setDeleteTitleList] = useState("");
  const [todoItemDetail, setTodoItemDetail] = useState();
  const [addActivity, setAddActivity] = useState([]);
  const [newAddActivity, setNewAddActivity] = useState({
    title: "New Activity",
    name: "",
  });
  const [titleActivity, setTitleActivity] = useState("New Activity");

  useEffect(() => {
    getListData();
  }, []);

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
      setList(res.data);
      setSelectedActivity(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getTodoItem();
  }, [clickActivity]);

  const getTodoItem = async () => {
    if (clickActivity) {
      try {
        const response = await fetch(
          process.env.REACT_APP_URL + `/activity-groups/${clickActivity}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        let res = await response.json();
        setTodoItemDetail(res);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("err");
    }
  };
  useEffect(() => {
    getTodoItemDetail();
  }, [clickActivity]);
  const toDetail = (value) => {
    navigate(`/detail/${value?.id}`, {
      state: { value: value, color: "green" },
      handleDeleteList,
    });
  };
  const getTodoItemDetail = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_URL + `/todo-items/${clickActivity}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let res = await response.json();
      setTodoItem(res);
    } catch (err) {
      console.log(err.message);
    }
  };
  const deleteData = (id) => {
    const newList = list.filter((item) => item.id !== id);
    try {
      const response = fetch(
        process.env.REACT_APP_URL + `/activity-groups/${clickActivity}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      getListData();
      handleCloseDeleteList();
      enqueueSnackbar("Activity berhasil dihapus", { variant: "success" });
    } catch (err) {
      // console.log(err.message);
    }
  };
  const handleCloseAddToDoItems = (value) => {
    setOpenAddToDoItems(false);
  };
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

      enqueueSnackbar("Activity berhasil ditambah", { variant: "success" });
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

  const handleChangeTitleActivity = (newValue) => {
    setTitleActivity(newValue);
  };

  const handleDeleteList = (value) => {
    setOpenDeleteList(true);
    setClickActivity(value.id);
    setDeleteTitleList(value.title);
  };
  const handleCloseDeleteList = (value) => {
    setOpenDeleteList(false);
    setSelectedDeleteList(value);
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
  console.log("todoItem ????????????", todoItem);
  return (
    <Container style={{ width: "100%" }}>
      <AppBar
        idDetail={idDetail}
        setIdDetail={setIdDetail}
        handleAddActivityGroup={handleAddActivityGroup}
        newList={newList}
        setList={setList}
        list={list}
        clickActivity={clickActivity}
        handleCloseAddToDoItems={handleCloseAddToDoItems}
        handleOpenAddToDoItems={() => handleOpenAddToDoItems()}
        setOpenAddToDoItems={setOpenAddToDoItems}
        openAddToDoItems={openAddToDoItems}
        valueSort={valueSort}
        setValueSort={changeToDoSort}
      />
      <ListActivity
        idDetail={idDetail}
        setIdDetail={setIdDetail}
        list={list}
        sortActivity={sortActivity()}
        clickActivity={clickActivity}
        setClickActivity={setClickActivity}
        handleDeleteList={handleDeleteList}
        toDetail={toDetail}
        handleAddActivityGroup={handleAddActivityGroup}
        open={openDeleteList}
        valueSort={valueSort}
      />
      <DialogDeleteData
        selectedValue={selectedDeleteList}
        clickActivity={clickActivity}
        open={openDeleteList}
        onClose={handleCloseDeleteList}
        list={list}
        setList={setList}
        onRemove={deleteData}
        deleteTitleList={deleteTitleList}
      />
    </Container>
  );
};
export default Activity;
