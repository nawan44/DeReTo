import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Input,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import ModalInformation from "../../component/dialog/dialogInformation";

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
import CreateIcon from "@mui/icons-material/Create";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import "../../assets/css/style.css";
import { makeStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import AvatarWoman from "../../assets/avatar/avatar-woman.jpg";
import DialogEditToDoItem from "../../component/dialog/dialogEditToDoItem ";

const useStyles = makeStyles({
  list: {
    width: "100%",
    padding: "10px 30px",
    textAlign: "center",
    margin: "0 auto",
  },
  text: {
    fontWeight: "bold",
    fontFamily: "courier",
    color: "blue",
    textAlign: "left",
    margin: "0 auto",
  },
});
const TodoEmptyState = (props) => {
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
  const [showAddItem, setShowAddItem] = useState(false);
  const { state } = useLocation();
  const { value } = state;
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
    value.title
    // title ? title :
    // "New Activity"
    // value ? value.title : "New Activity"
  );
  const [informasiHapus, setInformasiHapus] = useState(false);

  const handleCloseInformasi = (value) => {
    setInformasiHapus(false);
  };
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
    setShowAddItem(false);
  };
  // const showAddItem = (item) => {
  //   setShowAddItem(true);
  //   setDataToDoItem(item.title);
  // };

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
  useEffect(() => {
    getDetail();
  }, [onToDoItem]);

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
    setDetail(res);
    setTitleTodo(res.title);
    console.log("res",res.todo_items )
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
  const handleEditTitle = async (e) => {
    // try {
      const response = await fetch(
        process.env.REACT_APP_URL + `/activity-groups/${detailId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            title: title,
            // email: "rachmat.d.gunawan@gmail.com",
          }),
        }
      );
    // } catch (err) {}
  };
  const classes = useStyles();
  const [checked, setChecked] = useState([1]);

  const checkColor = (color) => {
    if (color === "very-high") {
      return "#ED4C5C";
    } else if (color === "high") {
      return "#F8A541";
    } else if (color === "medium") {
      return "#00A790";
    } else if (color === "low") {
      return "#428BC1";
    } else if (color === "very-low") {
      return "#8942C1";
    }
  };
console.log("detail", detail?.length <1)
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const line = (value) => {
    if (value.target === true) {
      return "line-through";
    } else {
      return false;
    }
  };
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
  return (
    <Container style={{ width: "100%" }}>
      <Grid class="todo-header"
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
class="todo-title"          style={{
            width: "50%",

            float: "left",
            padding: "5px 0 0 0",
            fontSize: "35px",
            fontWeight: "bold",
          }}
        >
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
            value={title}
            onChange={handleChangeTitle}
            // label="Rachmat Gunawan"
            placeholder="New Activity"
            sx={{ fontSize: "30px", fontWeight: "bold" }}
          />

          {/* <div style={{ float: "left" }}> */}
          <IconButton edge="end" aria-label="comments"    onClick={handleEditTitle}           
           data-cy="todo-title-edit-button"
>
            <CreateIcon
              style={{ color: "#888888" }}
             
            />
          </IconButton>
          {/* </div> */}
        </div>

        <div 
          style={{
            width: "50%",
            float: "left",
            padding: "5px 0 0 0",
            fontSize: "35px",
            fontWeight: "bold",
          }} className="d-flex"
        >
          {/* <span> */}
            <IconButton   id="ButtonSort" data-cy="todo-sort-button"
                onClick={handleOpenSort} variant="outlined" sx={{ margin: "0 10px" }}>
              <SwapVertRoundedIcon
             
              />
            </IconButton>
          {/* </span> */}
          <Button
            onClick={() =>  setShowAddItem(true)}
            data-cy="todo-add-button"
            id="ButtonAddDetail"
            // data-cy="modal-add"
            variant="contained"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
             <span >+ </span> Tambah
          </Button>
        </div>
      </Grid>
      <div className="detail-content">

        {detail.todo_items?.length <1 ? (
          // <EmptyState
          //   showAddItem={showAddItem}
          // />
          // <div data-cy="empty-state">
          <div
            style={{
              margin: "0 auto",
              textAlign: "center",
              padding: "40px 0px",
              marginTop:"30px",
              width: "100%", 
            }}
            container
            // rowSpacing={1}
            // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            data-cy="todo-empty-state"          
              class="empty-item"
          >
            <img
              alt="Remy Sharp"
              width={300}
              src={AvatarWoman}
              style={{ margin: "0 auto", textAlign: "center" }}
              onClick={() =>  setShowAddItem(true)}
              // alt="empty"
              id="TextEmptyTodo"
            />
          </div>
        ) : (
          // </div>
          // <ItemList
          //   // onToDoItem={() => setOnToDoItem(!onToDoItem)}
          //   idToDoItems={idToDoItems}
          //   titleToDoItems={titleToDoItems}
          //   dataToDoItem={dataToDoItem}
          //   openEditToDoItems={openEditToDoItems}
          //   detail={detail}
          //   value={value}
          //   // getTodoItemList={getTodoItemList}
          //   data-cy="todo-item"
          //   handleOpenDeleteToDoItems={handleOpenDeleteToDoItems}
          //   // handle={handleCloseDeleteToDoItems}
          //   handleClosEditToDoItems={handleClosEditToDoItems}
          //   handleOpenEditToDoItems={handleOpenEditToDoItems}
          //   handleCloseDeleteToDoItems={handleCloseDeleteToDoItems}
          //   sortToDoItem={sortToDoItem()}
          //   valueSort={valueSort}
          // />
          <div className="content-item" data-cy="todo-item">
            {valueSort == undefined ? (
              <List className={classes.list} data-cy="todo-item-list">
                {detail?.todo_items?.map((item) => {
                  const labelId = `checkbox-list-label-${item}`;

                  return (
                    <ListItem
                      sx={{ display: "list-item" }}
                      key={item.id}
                      style={{
                        width: "100%",
                        height: "50px",
                        margin: "20px 0",
                        backgroundColor: "#fff",
                        borderRadius: "7px",
                      }}
                      secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                          <DeleteIcon
                            data-cy="todo-item-delete-button"
                            onClick={(id) => handleOpenDeleteToDoItems(item)}
                            style={{ color: "#888888" }}
                          />
                        </IconButton>
                      }
                      disablePadding
                    >
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(item)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            data-cy="todo-item-checkbox"
                            edge="start"
                            checked={checked.indexOf(item) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <IconButton edge="end" aria-label="comments">
                          <FiberManualRecordRoundedIcon
                            data-cy="todo-item-priority-indicator"
                            sx={{
                              fontSize: 10,
                              color: checkColor(item.priority),
                              margin: "0 10px 0 0",
                            }}
                          />
                        </IconButton>
                        <ListItemText
                          style={{
                            // maxWidth: value.title?.length + 25,
                            textDecoration: line(item.id),
                          }}
                          classes={{ primary: classes.text }}
                          id={labelId}
                          // primary={value.title}
                          data-cy="todo-item-title"
                          className={isChecked(item)}
                        >
                          {item.title}
                        </ListItemText>

                        <IconButton
                          edge="end"
                          aria-label="comments"
                          data-cy="todo-item-edit-button"
                          onClick={(id) => handleOpenEditToDoItems(item)}
                        >
                          <CreateIcon
                            style={{
                              color: "#888888",
                              fontSize: "18px",
                              margin: "0 0 0 10px",
                            }}
                          />
                        </IconButton>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <List
                data-cy="todo-item"
                style={{ width: "100%", textAlign: "center", margin: "0 auto" }}
              >
                {sortToDoItem?.map((item) => {
                  const labelId = `checkbox-list-label-${item}`;

                  return (
                    <ListItem
                      sx={{ display: "list-item" }}
                      key={item.id}
                      style={{
                        width: "100%",
                        margin: "20px 0",
                        backgroundColor: "#fff",
                        borderRadius: "7px",
                      }}
                      secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                          <DeleteIcon
                            data-cy="todo-item-delete-button"
                            onClick={(id) => handleOpenDeleteToDoItems(item)}
                            style={{ color: "#888888" }}
                          />
                        </IconButton>
                      }
                      disablePadding
                    >
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(item)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            data-cy="todo-item-checkbox"
                            edge="start"
                            checked={checked.indexOf(item) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <IconButton edge="end" aria-label="comments">
                          <FiberManualRecordRoundedIcon
                            data-cy="todo-item-priority-indicator"
                            sx={{
                              fontSize: 10,
                              color: checkColor(item.priority),
                              margin: "0 10px 0 0",
                            }}
                          />
                        </IconButton>
                        <ListItemText
                          style={{
                            // maxWidth: value.title?.length + 25,
                            textDecoration: line(item.id),
                          }}
                          id={labelId}
                          // primary={value.title}
                          className={isChecked(item)}
                          classes={{ primary: classes.text }}
                          data-cy="todo-item-title"
                        >
                          {item.title}
                        </ListItemText>

                        <IconButton
                          data-cy="todo-item-edit-button"
                          edge="end"
                          aria-label="comments"
                          onClick={(id) => handleOpenEditToDoItems(item)}
                        >
                          <CreateIcon
                            style={{
                              color: "#888888",
                              fontSize: "18px",
                              margin: "0 0 0 10px",
                            }}
                          />
                        </IconButton>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            )}
          </div>
        )}
      </div>
      <DialogAddToDoItem
        // getTodoItemList={getTodoItemList}
        detailId={value.id}
        open={showAddItem}         

        onClose={() => setShowAddItem(false)}
        dataToDoItem={dataToDoItem}
        onToDoItem={() => setOnToDoItem(!onToDoItem)}
        getDetail={getDetail}
      />
      <DialogDeleteToDoItem
        open={openDeleteToDoItems}
        onClose={handleCloseDeleteToDoItems}
        // todoItemDelete={deleteToDoItems}
        onToDoItem={() => setOnToDoItem(!onToDoItem)}
        getDetail={getDetail}
        detail={detail}
        dataToDoItem={dataToDoItem}
        idToDoItems={idToDoItems}
        setOpenDeleteToDoItems={setOpenDeleteToDoItems}
      />
      <DialogEditToDoItem
        onToDoItem={onToDoItem}
        open={openEditToDoItems}
        dataToDoItem={dataToDoItem}
        onClose={handleClosEditToDoItems}
        detail={detail}
        getDetail={getDetail}
        checked={checked[1]}

        // getTodoItemList={getTodoItemList}
      />
      <DialogSort
        // selectedValue={selectedSort}

        open={openSort}
        onClose={handleCloseSort}
        // sorts={sorts}
        valueSort={valueSort}
        setValueSort={setValueSort}
      />
       <ModalInformation
        // data-cy="modal-information"
        open={informasiHapus}
        onClose={handleCloseInformasi}
        setInformasiHapus={setInformasiHapus}
      />

    </Container>
  );
};
export default TodoEmptyState;
