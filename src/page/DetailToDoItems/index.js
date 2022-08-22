import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import AddToDoItems from "../../component/dialog/dialogAddToDoItem";
import AppBar from "../../component/layout/appBar";
import { useLocation } from "react-router-dom";
import ItemList from "./ItemList";
import DialogAddData from "../../component/dialog/dialogAddToDoItem";
import DialogAddToDoItem from "../../component/dialog/dialogAddToDoItem";
import DialogDeleteToDoItem from "../../component/dialog/dialogDeleteToDoItem";
import EmptyState from "./ItemList/emptyState";

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
  const { value, dataDetail, titleBarDetail } = state;
  const [titleDetail, setTitleDetail] = useState(
    titleBarDetail ? titleBarDetail : "New Activity"
    // value ? value.title : "New Activity"
  );

  const [changeTitle, setChangeTitle] = useState();

  // const [toDoItemList, setToDoItemList] = useState(detail);
  const [toDoItemTotal, setToDoItemListTotal] = useState(dataDetail?.length);

  const [openDeleteToDoItems, setOpenDeleteToDoItems] = useState(false);
  const [openEditToDoItems, setOpenEditToDoItems] = useState(false);

  const [idToDoItems, setIdToDoItems] = useState();
  const [titleToDoItems, setTitleToDoItems] = useState(dataDetail?.title);
  const [dataToDoItem, setDataToDoItem] = useState();
  const [detailTitle, setDetailTitle] = useState(value?.title);
  const [detailId, setDetailId] = useState(value?.id);
  const [onToDoItem, setOnToDoItem] = useState(false);

  const [valueSort, setValueSort] = useState();

  const sortToDoItem = () => {
    if (valueSort === "Terbaru") {
      return dataDetail.sort((a, b) => (b.id > a.id ? 1 : -1));
    } else if (valueSort === "Terlama") {
      return dataDetail.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (valueSort === "A - Z") {
      return dataDetail.sort((a, b) => a.title.localeCompare(b.title));
    } else if (valueSort === "Z - A") {
      return dataDetail.sort((a, b) => b.title.localeCompare(a.title));
    } else if (valueSort === "Belum Selesai") {
      return dataDetail.sort((a, b) => b.title.localeCompare(a.title));
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
  const changeToDoItems = (newValue) => {
    setTitleDetail(newValue);
  };

  const sendTitle = async (e) => {
    // `[data-cy=todo-title]`;
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
  const deleteToDoItems = () => {
    // "[data-cy=modal-delete-confirm-button]";
    try {
      const response = fetch(
        process.env.REACT_APP_URL + `/todo-items/${idToDoItems}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // onToDoItem();
      // dataDetail()
      setOpenDeleteToDoItems(false);
    } catch (err) {
      // console.log(err.message);
    }
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
        onToDoItem={() => setOnToDoItem(!onToDoItem)}
        titleBarChange={titleBarDetail}
        titleDetail={titleDetail}
        setTitleDetail={changeToDoItems}
        handleOpenAddToDoItems={handleOpenAddToDoItems}
        sendTitle={sendTitle}
        value={value}
        dataDetail={dataDetail}
        valueSort={valueSort}
        setValueSort={changeToDoSort}
        toDoItemTotal={toDoItemTotal}
        // getTodoItemList={getTodoItemList}
      />

      {dataDetail?.length > 0 ? (
        <ItemList
          // onToDoItem={() => setOnToDoItem(!onToDoItem)}
          idToDoItems={idToDoItems}
          titleToDoItems={titleToDoItems}
          dataToDoItem={dataToDoItem}
          // openDeleteToDoItems={openDeleteToDoItems}
          openEditToDoItems={openEditToDoItems}
          dataDetail={dataDetail}
          value={value}
          // getTodoItemList={getTodoItemList}

          handleOpenDeleteToDoItems={handleOpenDeleteToDoItems}
          // handle={handleCloseDeleteToDoItems}
          handleClosEditToDoItems={handleClosEditToDoItems}
          handleOpenEditToDoItems={handleOpenEditToDoItems}
          handleCloseDeleteToDoItems={handleCloseDeleteToDoItems}
          sortToDoItem={sortToDoItem()}
          valueSort={valueSort}
          data-cy="todo-item"
        />
      ) : (
        <EmptyState
          data-cy="todo-empty-state"
          handleOpenAddToDoItems={handleOpenAddToDoItems}
        />
      )}
      <DialogAddToDoItem
        // getTodoItemList={getTodoItemList}
        detailId={detailId}
        open={openAddToDoItems}
        onClose={handleCloseAddToDoItems}
        dataToDoItem={dataToDoItem}
        onToDoItem={() => setOnToDoItem(!onToDoItem)}
      />
      <DialogDeleteToDoItem
        open={openDeleteToDoItems}
        onClose={handleCloseDeleteToDoItems}
        todoItemDelete={deleteToDoItems}
        dataDetail={dataDetail}
        dataToDoItem={dataToDoItem}
        data-cy="modal-delete-confirm-button"

        // data-cy="modal-delete"
      />
    </Container>
  );
};
export default DetailToDoItems;
