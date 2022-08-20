import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import Button from "@mui/material/Button";
import "../../assets/css/style.css";
// import { sorts } from "../data/sorts";
import DialogAddData from "../dialog/dialogAddToDoItem";
import DialogSort from "../dialog/dialogSort";
import DialogAddToDoItem from "../dialog/dialogAddToDoItem";
const ariaLabel = { "aria-label": "description" };

const AppBar = (props, ss) => {
  const {
    handleAddActivityGroup,getTodoItemList,
    handle,
    list,
    todoItem,
    param,
    titleDetail,
    setTitleDetail,
    handleChangeTitleDetil,
    setList,
    item,
    idDetail,
    setIdDetail,
    detailId,
    handleCloseAddTodoItems,
    sendTitle,
    detailTitle,
    toDoItemList,
    changeToDoItems,
    value,
    handleOpenAddToDoItems,
    valueSort,
    setValueSort,onToDoItem
  } = props;
  const navigate = useNavigate();
  let location = useLocation();
  const [openAddToDoItems, setOpenAddToDoItems] = useState(false);

  const [openSort, setOpenSort] = useState(false);
  // const [selectedSort, setSelectedSort] = useState(sorts[1]);
  // const [openAddList, setOpenAddList] = useState(false);
  // const [selectedAddList, setSelectedAddList] = useState(sorts[1]);

  const handleCloseAddToDoItems = (value) => {
    setOpenAddToDoItems(false);
  };

  const handleChangeTitle = (event) => {
    setTitleDetail(event.target.value);
  };

  const toActivity = (e) => {
    navigate("/");
    sendTitle(e);
  };

  const Title = () => {
    if (location.pathname === `/`) {
      return <span>Activity</span>;
    } else if (location.pathname === `/`) {
      return (
        <span>
          {" "}
          <span>
            <ArrowBackIosIcon onClick={toActivity}         data-cy="todo-title"
 />
            <Input
              value={titleDetail}
              onChange={handleChangeTitle}
              // label="Rachmat Gunawan"
              placeholder="New Activity"
              inputProps={ariaLabel}
              sx={{ fontSize: "24px", fontWeight: "bold" }}
            />
          </span>
          <IconButton edge="end" aria-label="comments">
            <CreateIcon style={{ color: "#888888" }} />
          </IconButton>{" "}
        </span>
      );
    } else {
      return (
        <span>
          <ArrowBackIosIcon onClick={toActivity} />
          <Input
            value={titleDetail}
            onChange={handleChangeTitle}
            // label="Rachmat Gunawan"
            placeholder="New Activity"
            sx={{ fontSize: "24px", fontWeight: "bold" }}
          />
        </span>
      );
    }
  };

  const viewSort = () => {
    if (list?.length > 0 || toDoItemList?.length > 0) {
      return (
        <IconButton variant="outlined" sx={{ margin: "0 10px" }}>
          <SwapVertRoundedIcon data-cy="todo-sort-button" onClick={handleOpenSort} />
        </IconButton>
      );
    } else {
      return <span></span>;
    }
  };
  const RightButton = () => {
    if (list && !toDoItemList) {
      return (
        // <span data-cy="todo-sort-button">
        <span>
          {" "}
          {viewSort()}
          <Button
            onClick={handleAddActivityGroup}
            variant="contained"
            data-cy="activity-add-button"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
            + Tambah
          </Button>
        </span>
      );
    } else if (!list && toDoItemList) {
      return (
        // <span data-cy="todo-sort-button">
        <span>
          {viewSort()}
          <Button
            onClick={handleOpenAddToDoItems}
            data-cy="todo-add-button"
            variant="contained"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
            + Tambah
          </Button>
        </span>
      );
    } else {
      return (
        <span>
          {" "}
          <Button
            variant="contained"
            style={{ backgroundColor: "#16ABF8", borderRadius: "20px" }}
          >
            +Tambah
          </Button>
        </span>
      );
    }
  };

  const handleOpenSort = () => {
    setOpenSort(true);
  };

  const handleCloseSort = (value) => {
    setOpenSort(false);
    // setSelectedSort(value);
  };

  return (
    <>
      <Grid
        style={{
          margin: "0 auto",
          textAlign: "center",
          margin: "50px",
        }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
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
          {Title()}
        </Grid>
        <Grid item xs={6} data-cy="todo-add-button">
          {RightButton()}
        </Grid>
      </Grid>
      <DialogSort
        // selectedValue={selectedSort}
        open={openSort}
        onClose={handleCloseSort}
        // sorts={sorts}
        valueSort={valueSort}
        setValueSort={setValueSort}
      />
      <DialogAddToDoItem onToDoItem={onToDoItem}
        open={openAddToDoItems}
        onClose={handleCloseAddToDoItems}
        getTodoItemList={getTodoItemList}
      />
    </>
  );
};
export default AppBar;
