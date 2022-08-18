import React, { useState, useEffect } from "react";
import AvatarWoman from "../../assets/avatar/avatar-woman.jpg";
import { Container, Grid } from "@mui/material";
import AddToDoItems from "../../component/dialog/dialogAddData";
import AppBar from "../../component/layout/appBar";
import { useLocation } from "react-router-dom";
import ItemList from "./ListToDoItems";
import DialogAddData from "../../component/dialog/dialogAddData";

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

  const [openAddToDoItems, setOpenAddToDoItems] = useState(false);
  const { state } = useLocation();
  const { value } = state;

  const [titleDetail, setTitleDetail] = useState(
    value ? value.title : "New Activity"
  );

  const [changeTitle, setChangeTitle] = useState();

  const [toDoItemList, setToDoItemList] = useState();
  const [toDoItemTotal, setToDoItemListTotal] = useState();

  const [openDeleteToDoItems, setOpenDeleteToDoItems] = useState(false);
  const [openEditToDoItems, setOpenEditToDoItems] = useState(false);

  const [idToDoItems, setIdToDoItems] = useState();
  const [titleToDoItems, setTitleToDoItems] = useState(toDoItemList?.title);
  const [dataToDoItem, setDataToDoItem] = useState();
  const [detailTitle, setDetailTitle] = useState(value?.title);
  const [detailId, setDetailId] = useState(value?.id);
  const [onToDoItem, setOnToDoItem] = useState(false);
  const [onClick, setOnClick] = useState(false);

  const [valueSort, setValueSort] = useState();

  const sortToDoItem = () => {
    if (valueSort === "Terbaru") {
      return toDoItemList.sort((a, b) => (b.id > a.id ? 1 : -1));
    } else if (valueSort === "Terlama") {
      return toDoItemList.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (valueSort === "A - Z") {
      return toDoItemList.sort((a, b) => a.title.localeCompare(b.title));
    } else if (valueSort === "Z - A") {
      return toDoItemList.sort((a, b) => b.title.localeCompare(a.title));
    } else if (valueSort === "Belum Selesai") {
      return toDoItemList.sort((a, b) => b.title.localeCompare(a.title));
    }
  };

  const changeToDoSort = (newValue) => {
    setValueSort(newValue);
  };

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
    setDataToDoItem(item);
  };

  const handleClosEditToDoItems = (value) => {
    setOpenEditToDoItems(false);
  };
  console.log("toDoItemList", toDoItemList);
  const changeToDoItems = (newValue) => {
    setTitleDetail(newValue);
  };
  // useEffect(() => {}, [titleDetail]);

  useEffect(() => {
    getTodoItemList();
  }, []);
  useEffect(() => {
    getTodoItemList([]);
  }, [onClick]);
  useEffect(() => {
    getTodoItemList();
  }, [onToDoItem]);
  // useEffect(() => {
  //   setChangeTitle(titleDetail);
  // }, [titleDetail]);
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
    } catch (err) {}
  };

  const sendTitle = async (e) => {
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
          }),
        }
      );
    } catch (err) {}
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
        titleDetail={titleDetail}
        setTitleDetail={changeToDoItems}
        handleOpenAddToDoItems={handleOpenAddToDoItems}
        sendTitle={sendTitle}
        value={value}
        toDoItemList={toDoItemList}
        valueSort={valueSort}
        setValueSort={changeToDoSort}
        toDoItemTotal={toDoItemTotal}
      />

      {toDoItemTotal && toDoItemTotal > 0 ? (
        <span>
          <ItemList
            onToDoItem={() => setOnToDoItem(!onToDoItem)}
            idToDoItems={idToDoItems}
            titleToDoItems={titleToDoItems}
            dataToDoItem={dataToDoItem}
            openDeleteToDoItems={openDeleteToDoItems}
            openEditToDoItems={openEditToDoItems}
            toDoItemList={toDoItemList}
            value={value}
            getTodoItemList={getTodoItemList}
            handleOpenDeleteToDoItems={handleOpenDeleteToDoItems}
            handle={handleCloseDeleteToDoItems}
            handleClosEditToDoItems={handleClosEditToDoItems}
            handleOpenEditToDoItems={handleOpenEditToDoItems}
            handleCloseDeleteToDoItems={handleCloseDeleteToDoItems}
            sortToDoItem={sortToDoItem()}
            valueSort={valueSort}
            onClick={() => setOnClick(!onClick)}

            // onClick, setOnClick
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
      <DialogAddData
        getTodoItemList={getTodoItemList}
        detailId={detailId}
        open={openAddToDoItems}
        onClose={handleCloseAddToDoItems}
        dataToDoItem={dataToDoItem}
        onToDoItem={() => setOnToDoItem(!onToDoItem)}
      />
    </Container>
  );
};
export default DetailToDoItems;
