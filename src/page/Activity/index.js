import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import AppBar from "../../component/view/appBar";
import DeleteListItem from "../../component/dialog/deleteListItem";
import { useSnackbar } from "notistack";
import List from "../List";

const Activity = () => {
  let location = useLocation();

  const [openDeleteList, setOpenDeleteList] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [openAddToDoItems, setOpenAddToDoItems] = useState(false);

  const handleCloseAddToDoItems = (value) => {
    setOpenAddToDoItems(false);
  };


  const handleOpenAddToDoItems = () => {
    const newItems = [...list, newList];
      setList(newItems);
      setOpenAddToDoItems(true)  
    console.log("{{{{{{{{{{{{{{{{{{asdfdafdsfdsfs{{{{{{{{{{{{{")
    };

  const [newList, setNewList] = useState({
    title: "New Activity",
    name: "",
  });
console.log()
  const [list, setList] = useState([]);


  const [selectedDeleteList, setSelectedDeleteList] = useState(list[1]);
  const [lempar, setLempar] = useState({
    id: list.id,
    title: list.title,
    name: "",
    todoItem: list.todo_items,
  });
  const [click, setClick] = useState(false);
  const [clickItemList, setClickItemList] = useState(false);
  const [title, setTitle] = useState("");
  const [idDetail, setIdDetail] = useState();
  const [clickTitle, setClickTitle] = useState(false)
  const [todoItem, setTodoItem] = useState();
  const [deleteTitleList, setDeleteTitleList] = useState("");
  const [todoItemDetail, setTodoItemDetail] = useState();
  const [checkToDo, setCheckToDo] = useState([]);
  const [addActivity, setAddActivity] = useState([]);
  const [newAddActivity, setNewAddActivity] = useState({
    title: "New Activity",
    name: "",
  });
  // const [openAddToDoItems, setOpenAddToDoItems] = useState(false);
  // const handleCloseAddTodoItems = (value) => {
  //   setOpenAddTodoItems(false);
  // };
  // const handleOpenAddTodoItems = () => {
  //   setOpenAddTodoItems(true);
  // };
  
console.log("<<<<<<<<<idDetail>>>>>>>>>", clickTitle)

  useEffect(() => {
    getListData();
  }, []);
  useEffect(() => {
    getListData();
  }, [click]);
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
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleAddActivityGroup = async () => {
    try {
      console.log("form", {
        title: title ? title : newAddActivity.title,
        email: "rachmat.d.gunawan@gmail.com",
        _comment:
          "list of priority is : very-high, high, normal, low, very-low",
      });
      const response = await fetch(
        process.env.REACT_APP_URL + `/activity-groups`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            title:  title ? title : newAddActivity.title,
            email: "rachmat.d.gunawan@gmail.com",
            _comment:
              "list of priority is : very-high, high, normal, low, very-low",
          }),
        }
      );
      const newItems = [...addActivity, newAddActivity];
      setAddActivity(newItems);
      enqueueSnackbar("Activity berhasil ditambah", { variant: "success" });
      getListData()
      // setClick(true)
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getTodoItem();
  }, [lempar]);

  const getTodoItem = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_URL + `/activity-groups/${lempar}`,
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
  };
  useEffect(() => {
    getTodoItemDetail();
  }, [lempar]);
  const toDetail = (value) => {
    setLempar(value.id);
    navigate(`/detail/${value?.id}`);
    // setClickTitle(true)
// setIdDetail( value)
  };
  const getTodoItemDetail = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_URL + `/todo-items/${lempar}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let res = await response.json();
      setTodoItem(res);
      setCheckToDo(res);
    } catch (err) {
      console.log(err.message);
    }
  };
  const deleteData = (id) => {
    const newList = list.filter((item) => item.id !== id);
    try {
      const response = fetch(
        process.env.REACT_APP_URL + `/activity-groups/${lempar}`,
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
      console.log(err.message);
    }
  };


  const handleDeleteList = (value) => {
    setOpenDeleteList(true);
    setLempar(value.id);
    setDeleteTitleList(value.title);
    setClickTitle (true)
  };
  const handleCloseDeleteList = (value) => {
    setOpenDeleteList(false);
    setSelectedDeleteList(value);
  };


  return (
    <Container style={{ width: "100%" }}>
      <AppBar
       idDetail ={idDetail}
       setIdDetail={setIdDetail}
        handleAddActivityGroup={handleAddActivityGroup}
        newAddActivity={newAddActivity}
        setNewAddActivity={setNewAddActivity}
        addActivity={addActivity}
        setAddActivity={setAddActivity}
        title={title}
        setTitle={setTitle}
        newList={newList}
        setList={setList}
        list={list}
        lempar={lempar}
        click={click}
        clickItemList={clickItemList}
        handleCloseAddToDoItems={handleCloseAddToDoItems}
        handleOpenAddToDoItems={() => handleOpenAddToDoItems()}
        setOpenAddToDoItems={setOpenAddToDoItems}
        clickTitle={clickTitle}
        openAddToDoItems={openAddToDoItems}
      />
      {/* {conditionalActivity()} */}
      <List
               idDetail ={idDetail}
               setIdDetail={setIdDetail}
            checkToDo={checkToDo}
            clickItemList={clickItemList}
            setClickItemList={setClickItemList}
            list={list}
            click={click}
            setClick={setClick}
            lempar={lempar}
            setLempar={setLempar}
            handleDeleteList={handleDeleteList}
            toDetail={toDetail}
 setClickTitle ={setClickTitle}
 handleAddActivityGroup={handleAddActivityGroup}
          />
      <DeleteListItem
        selectedValue={selectedDeleteList}
        lempar={lempar}
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
