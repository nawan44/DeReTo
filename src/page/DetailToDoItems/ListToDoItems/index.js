import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import CreateIcon from "@mui/icons-material/Create";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Container,
  Grid,
} from "@mui/material";
import { useSnackbar } from "notistack";
import "../../../assets/css/style.css";
import DialogDeleteData from "../../../component/dialog/dialogDeleteData";
import DialogAddData from "../../../component/dialog/dialogAddData";
import { makeStyles } from "@mui/styles";

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

const ListToDoItems = (props) => {
  const {
    list,
    openEditToDoItems,
    setOpenAddTodoItems,
    openAddTodoItems,
    handleCloseAddTodoItems,
    handleOpenAddTodoItems,
    open,
    selectedValue,
    onClose,
    setList,
    onRemove,
    idToDoItems,
    titleToDoItems,
    openDeleteToDoItems,
    handleDeleteList,
    item,
    getTodoItemList,
    toDoItemList,
    handleOpenDeleteToDoItems,
    handleCloseDeleteToDoItems,
    handleOpenEditToDoItems,
    handleClosEditToDoItems,
    dataToDoItem,
    value,
    sortToDoItem,
    valueSort,
    onToDoItem,
    onClick,
  } = props;
  const classes = useStyles();

  const [checked, setChecked] = useState([1]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [todoItem, setTodoItem] = useState(toDoItemList);
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

  // useEffect(() => {
  //   getTodoItemList([]);
  // }, [onToDoItem]);

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
  const deleteToDoItems = () => {
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
      onToDoItem();
      onClick();
      handleCloseDeleteToDoItems();
      enqueueSnackbar("To Do Item berhasil dihapus", { variant: "success" });
    } catch (err) {
      // console.log(err.message);
    }
  };

  return (
    <Container style={{ width: "100%", textAlign: "center", margin: "0 auto" }}>
      <Grid
        style={{
          margin: "0 auto",
          textAlign: "center",
          padding: "10px 20px",
          width: "100%",
        }}
        container
      >
        {valueSort == undefined ? (
          <List className={classes.list}>
            {todoItem?.map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem
                  sx={{ display: "list-item" }}
                  key={value.id}
                  style={{
                    width: "100%",
                    margin: "20px 0",
                    backgroundColor: "#fff",
                    borderRadius: "7px",
                  }}
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                      <DeleteIcon
                        onClick={(id) => handleOpenDeleteToDoItems(value)}
                        style={{ color: "#888888" }}
                      />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(value)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <IconButton edge="end" aria-label="comments">
                      <FiberManualRecordRoundedIcon
                        sx={{
                          fontSize: 10,
                          color: checkColor(value.priority),
                          margin: "0 10px 0 0",
                        }}
                      />
                    </IconButton>
                    <ListItemText
                      style={{
                        // maxWidth: value.title?.length + 25,
                        textDecoration: line(value.id),
                      }}
                      classes={{ primary: classes.text }}
                      id={labelId}
                      // primary={value.title}
                      className={isChecked(value)}
                    >
                      {value.title}
                    </ListItemText>

                    <IconButton
                      edge="end"
                      aria-label="comments"
                      onClick={(id) => handleOpenEditToDoItems(value)}
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
            style={{ width: "100%", textAlign: "center", margin: "0 auto" }}
          >
            {sortToDoItem?.map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem
                  sx={{ display: "list-item" }}
                  key={value.id}
                  style={{
                    width: "100%",
                    margin: "20px 0",
                    backgroundColor: "#fff",
                    borderRadius: "7px",
                  }}
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                      <DeleteIcon
                        onClick={(id) => handleOpenDeleteToDoItems(value)}
                        style={{ color: "#888888" }}
                      />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(value)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <IconButton edge="end" aria-label="comments">
                      <FiberManualRecordRoundedIcon
                        sx={{
                          fontSize: 10,
                          color: checkColor(value.priority),
                          margin: "0 10px 0 0",
                        }}
                      />
                    </IconButton>
                    <ListItemText
                      style={{
                        // maxWidth: value.title?.length + 25,
                        textDecoration: line(value.id),
                      }}
                      id={labelId}
                      // primary={value.title}
                      className={isChecked(value)}
                      classes={{ primary: classes.text }}
                    >
                      {value.title}
                    </ListItemText>

                    <IconButton
                      edge="end"
                      aria-label="comments"
                      onClick={(id) => handleOpenEditToDoItems(value)}
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
      </Grid>
      <DialogDeleteData
        onClick={onClick}
        open={openDeleteToDoItems}
        onClose={handleCloseDeleteToDoItems}
        onRemove={deleteToDoItems}
        toDoItemList={toDoItemList}
        dataToDoItem={dataToDoItem}
      />
      <DialogAddData
        onToDoItem={onToDoItem}
        open={openEditToDoItems}
        dataToDoItem={dataToDoItem}
        onClose={handleClosEditToDoItems}
        toDoItemList={toDoItemList}
        getTodoItemList={getTodoItemList}
      />
    </Container>
  );
};
export default ListToDoItems;