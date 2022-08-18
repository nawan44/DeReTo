import React, { useState, useEffect } from "react";
import AvatarWoman from "../../assets/avatar/avatar-woman.jpg";
import { Container, Grid } from "@mui/material";
import AddToDoItems from "../../component/dialog/dialoAddData";
import AppBar from "../../component/layout/appBar";
import { useLocation } from "react-router-dom";
import ItemList from "./ListToDoItems";
import DialoAddData from "../../component/dialog/dialoAddData";

const DetailToDoItems = (props) => {
  const {
    clickActivity,
    list,
    open,
    setClickActivity,
    setOpenAddTodoItems,
    openAddTodoItems,
    handleCloseAddTodoItems,
    idDetail,
    handleDeleteList,
  } = props;
  let location = useLocation();
  const [openAddToDoItems, setOpenAddToDoItems] = useState(false);
  const { state } = useLocation();
  const { value, color } = state; 

  const [titleDetail, setTitleDetail] = useState(value ? value.title : "New Activity");

  const [changeTitle, setChangeTitle] = useState();

  const [toDoItemList, setToDoItemList] = useState();
  const [toDoItemTotal, setToDoItemListTotal] = useState();

  const [openDeleteToDoItems, setOpenDeleteToDoItems] = useState(false);
  const [openEditToDoItems, setOpenEditToDoItems] = useState(false);

  const [idToDoItems, setIdToDoItems] = useState();
  const [titleToDoItems, setTitleToDoItems] = useState(toDoItemList?.title);
const [dataToDoItem, setDataToDoItem] = useState()
  const [detailTitle, setDetailTitle] = useState(value?.title);
  const [detailId, setDetailId] = useState(value?.id);
  const [selectedToDoItems , setSelectedToDoItems] = useState({
    itemToDoItems : null,
    aksiToDoItems : ""
  });
  console.log("openEditToDoItems",openEditToDoItems)
  const handleOpenDeleteToDoItems = (item) => {
    setOpenDeleteToDoItems(true);
    setIdToDoItems(item.id);
    setDataToDoItem(item.title);
  };
  const handleCloseDeleteToDoItems = (value) => {
    setOpenDeleteToDoItems(false);
  };
  
  const handleOpenEditToDoItems = (item) => {
    setOpenEditToDoItems(true);
    setIdToDoItems(item.id);
    setTitleToDoItems(item.title);
    setDataToDoItem(item)
  };

  console.log("kkk", openEditToDoItems)

  const handleClosEditToDoItems = (value) => {
    setOpenEditToDoItems(false);
  };
  const changeToDoItems = (newValue) =>{
    setTitleDetail(newValue);
  }
  useEffect(() => {
    // // check();
  }, [titleDetail]);

  useEffect(() => {
    getTodoItemList();
  }, []);
  useEffect(() => {
    setChangeTitle(titleDetail);
  }, [titleDetail]);
  const getTodoItemList = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_URL +
          `/todo-items?activity_group_id=${value?.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let res = await response.json();
      setToDoItemList(res.data);
      setToDoItemListTotal(res.total);
    } catch (err) {
      // console.log(err.message);
    }
  };

  const sendTitle = async (e) => {
    // if (changeTitle) {


      try {
        const response = await fetch(
          process.env.REACT_APP_URL + `/activity-groups/${detailId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              title: titleDetail,
              email: "rachmat.d.gunawan@gmail.com",
              // _comment:
              // "list of priority is : very-high, high, normal, low, very-low",
            }),
          }
        );
      } catch (err) {
        // console.log(err.message);
      }
    // } else {
    //   // console.log("error");
    // }
  };

  const handleCloseAddToDoItems = (value) => {
    setOpenAddToDoItems(false);
  };
  const handleOpenAddToDoItems = () => {
    setOpenAddToDoItems(true);
  };
  return (
    <Container style={{ width: "100%" }}>
      <AppBar
        // detailTitle={detailTitle}
        titleDetail={titleDetail}
        setTitleDetail={changeToDoItems}

        aksiToDoItems ={selectedToDoItems.aksiToDoItems }
        handleOpenAddToDoItems ={handleOpenAddToDoItems}
        itemToDoItems ={selectedToDoItems.itemToDoItems }
        // changeToDoItems={changeToDoItems}
        // handleChangeTitleDetil={handleChangeTitleDetil}
        sendTitle={sendTitle}
        value ={value}

        toDoItemList={toDoItemList}toDoItemTotal={toDoItemTotal}
      />
      {toDoItemTotal && toDoItemTotal > 0 ? (
        <span>
          <ItemList
            idToDoItems={idToDoItems}
            titleToDoItems={titleToDoItems}
            dataToDoItem={dataToDoItem}
            openDeleteToDoItems={openDeleteToDoItems}
            openEditToDoItems={openEditToDoItems}
            toDoItemList={toDoItemList}
            getTodoItemList={getTodoItemList}
            handleOpenDeleteToDoItems={handleOpenDeleteToDoItems}
            handle={handleCloseDeleteToDoItems}
            handleClosEditToDoItems ={handleClosEditToDoItems}
            handleOpenEditToDoItems={handleOpenEditToDoItems}
            handleCloseDeleteToDoItems={handleCloseDeleteToDoItems}
          />
        </span>
      ) : (
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
      )}

      <DialoAddData
        getTodoItemList={getTodoItemList}
        detailId={detailId}
        open={openAddToDoItems}
        onClose={handleCloseAddToDoItems}
        handleOpenEditToDoItems={handleOpenEditToDoItems}
        // itemToDoItems ={
        //   dataKelengkapan?.filter(
        //     (row) => row.id_reader === data.id_reader
        // }
      />
    </Container>
  );
};
export default DetailToDoItems;
