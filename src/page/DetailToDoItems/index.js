import React, { useState, useEffect } from "react";
import { Container, Grid, Input, Button } from "@mui/material";
// import AddToDoItems from "../../component/dialog/dialogAddToDoItem";
// import AppBar from "../../component/layout/appBar";
import { useLocation, useNavigate } from "react-router-dom";
import ItemList from "./ItemList";
// import DialogAddData from "../../component/dialog/dialogAddToDoItem";
import DialogAddToDoItem from "../../component/dialog/dialogAddToDoItem";
import DialogDeleteToDoItem from "../../component/dialog/dialogDeleteToDoItem";
import EmptyState from "./ItemList/emptyState";
import DialogSort from "../../component/dialog/dialogSort";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import "../../assets/css/style.css";

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
  const navigate = useNavigate();
  const [openAddToDoItems, setOpenAddToDoItems] = useState(false);
  const { state } = useLocation();
  const { value,  } = state;
    // detail, title 
  
    const [detailId, setDetailId] = useState();

  const [changeTitle, setChangeTitle] = useState();
  const [onClick, setOnClick] = useState(false);
  const [onEdit, setOnEdit] = useState(false);


  const [detail, setDetail] = useState([]);


  // const [toDoItemList, setToDoItemList] = useState(detail);
  const [toDoItemTotal, setToDoItemListTotal] = useState(detail?.length);

  const [openDeleteToDoItems, setOpenDeleteToDoItems] = useState(false);
  const [openEditToDoItems, setOpenEditToDoItems] = useState(false);

  const [idToDoItems, setIdToDoItems] = useState();
  const [titleToDoItems, setTitleToDoItems] = useState(detail?.title);
  const [dataToDoItem, setDataToDoItem] = useState();
  const [detailTitle, setDetailTitle] = useState();
  // const [detailId, setDetailId] = useState(value?.id);

  const [onToDoItem, setOnToDoItem] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const [valueSort, setValueSort] = useState();
  const [titleBar, setTitleBar] = useState();
  const [title, setTitleTodo] = useState(
    // title ? title : 
    // "New Activity"
    // value ? value.title : "New Activity"
  );

  console.log("title", title);
  console.log("value", value);
  console.log("detail", detail);

  const sortToDoItem = () => {
    if (valueSort === "Terbaru") {
      return detail.sort((a, b) => (b.id > a.id ? 1 : -1));
    } else if (valueSort === "Terlama") {
      return detail.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (valueSort === "A - Z") {
      return detail.sort((a, b) => a.title.localeCompare(b.title));
    } else if (valueSort === "Z - A") {
      return detail.sort((a, b) => b.title.localeCompare(a.title));
    } else if (valueSort === "Belum Selesai") {
      return detail.sort((a, b) => b.title.localeCompare(a.title));
    }
  };
  const clickEdit = () => {
    setOnEdit(true);
  };
  const changeToDoSort = (newValue) => {
    setValueSort(newValue);
  };
  const handleCloseSort = (value) => {
    setOpenSort(false);
    // setSelectedSort(value);
  };
  const handleOpenSort = () => {
    setOpenSort(true);
  };
  const handleOpenDeleteToDoItems = (item) => {
    setOpenDeleteToDoItems(true);
    setIdToDoItems(item.id);
    setDataToDoItem(item.title);
  };
  const handleCloseDeleteToDoItems = (value) => {
    setOpenDeleteToDoItems(false);
  };
  const handleChangeTitle = (event) => {
    setTitleTodo(event.target.value);
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
    setTitleTodo(newValue);
  };

  const handleCloseAddToDoItems = (value) => {
    setOpenAddToDoItems(false);
  };
  const handleOpenAddToDoItems = (item) => {
    setOpenAddToDoItems(true);
    setDataToDoItem(item.title);

  };
  
  // const viewSort = () => {
  //   if (list?.length > 0 || detail?.length > 0) {
  //     return (
        
      // );
  //   } else {
  //     return <span></span>;
  //   }
  // };
  useEffect(() => {
    getDetail();
  }, []);
  const getDetail = async () => {
    // try {
    const response = await fetch(
      process.env.REACT_APP_URL + `/activity-groups/${value.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },

        // body: JSON.stringify({
        //   title: title,
        //   email: "rachmat.d.gunawan@gmail.com",
        // }),
      }
    );
    let res = await response.json();
    setDetailId(res.id);
    setDetail(res.todo_items);
    setTitleTodo(res.title)
    // setTitleBar(res.title);
    // navigate(`/detail/${value?.id}`
    // , {
    //   state: {
    //     value: value,
    //     title: res.title,
    //     detail: res.todo_items,
    //   },
    // }
    // );
    // } catch (err) {}
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
            title: title,
            email: "rachmat.d.gunawan@gmail.com",
          }),
        }
      );
    } catch (err) {}
  };
  return (
    <Container style={{ width: "100%" }}>
      {/* <AppBar
        onToDoItem={() => setOnToDoItem(!onToDoItem)}
        titleBarChange={title}
        title={title}
        title={title}
        setTitleTodo={changeToDoItems}
        handleOpenAddToDoItems={handleOpenAddToDoItems}
        sendTitle={sendTitle}
        value={value}
        detail={detail}
        valueSort={valueSort}
        setValueSort={changeToDoSort}
        toDoItemTotal={toDoItemTotal}
        // getTodoItemList={getTodoItemList}
      /> */}
      <Grid
        style={{
          margin: "0 auto",
          textAlign: "center",
          margin: "50px",
        }}
        container
        // rowSpacing={1}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        
        <div   
        //  
        style={{
              width: "50%",

              float: "left",
              padding: "5px 0 0 0",
              fontSize: "35px",
              fontWeight : "bold"
            }}>
          
          <ArrowBackIosIcon
            sx={{
              width: "10%",
              float: "left",
              padding: "5px 0 0 0",
              fontSize: "35px",
            }}
            data-cy="todo-back-button"
            // onClick={toActivity}
            onClick={() => navigate("/")}
          />
          {/* {onEdit ? (
                <div style={{ width: "50%", float: "left",textAlign:"left"  }}> */}
            <Input
            data-cy="todo-title"
              value={title }
              onChange={handleChangeTitle}
              onKeyUp={sendTitle}
              onKeyDown={sendTitle}

              // label="Rachmat Gunawan"
              placeholder="New Activity"
              sx={{ fontSize: "30px", fontWeight: "bold" }}
            />
           
          <div style={{ float:"left"}}>
          <IconButton 
                data-cy="todo-title-edit-button"
                onClick={sendTitle}
                edge="end"
                aria-label="comments"
              >
                <CreateIcon style={{ color: "#888888" }} />
              </IconButton>

          </div>
                 </div>

        <div   style={{
              width: "50%",
              float: "left",
              padding: "5px 0 0 0",
              fontSize: "35px",
              fontWeight : "bold"
            }}>
        <span data-cy="todo-sort-button">
        <IconButton variant="outlined" sx={{ margin: "0 10px" }}>
          <SwapVertRoundedIcon
            data-cy="todo-sort-button"
            onClick={handleOpenSort}
          />
        </IconButton>
          </span>
          <Button
            onClick={handleOpenAddToDoItems}
            data-cy="modal-add"
            variant="contained"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
            + Tambah
          </Button>
          </div>
      </Grid>
      {detail?.length === 0 ? (
        <EmptyState
        data-cy="todo-empty-state"
          handleOpenAddToDoItems={handleOpenAddToDoItems}
        />
      ) : (
        <ItemList
          // onToDoItem={() => setOnToDoItem(!onToDoItem)}
          idToDoItems={idToDoItems}
          titleToDoItems={titleToDoItems}
          dataToDoItem={dataToDoItem}
          openEditToDoItems={openEditToDoItems}
          detail={detail}
          value={value}
          // getTodoItemList={getTodoItemList}
          data-cy="todo-item"
          handleOpenDeleteToDoItems={handleOpenDeleteToDoItems}
          // handle={handleCloseDeleteToDoItems}
          handleClosEditToDoItems={handleClosEditToDoItems}
          handleOpenEditToDoItems={handleOpenEditToDoItems}
          handleCloseDeleteToDoItems={handleCloseDeleteToDoItems}
          sortToDoItem={sortToDoItem()}
          valueSort={valueSort}
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
        // todoItemDelete={deleteToDoItems}
        onClick={() => setOnClick(!onClick)}
        detail={detail}
        dataToDoItem={dataToDoItem}
        data-cy="modal-delete-confirm-button"
        idToDoItems={idToDoItems}
        setOpenDeleteToDoItems={setOpenDeleteToDoItems}
      />

      <DialogSort
        // selectedValue={selectedSort}
        open={openSort}
        onClose={handleCloseSort}
        // sorts={sorts}
        valueSort={valueSort}
        setValueSort={setValueSort}
      />
    </Container>
  );
};
export default DetailToDoItems;
