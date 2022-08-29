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
import "../../../assets/css/style.css";
import { makeStyles } from "@mui/styles";
import DialogDeleteToDoItem from "../../../component/dialog/dialogDeleteToDoItem";
import DialogEditToDoItem from "../../../component/dialog/dialogEditToDoItem ";

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

const ItemList = (props) => {
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
    // getTodoItemList,
    handleOpenDeleteToDoItems,
    handleCloseDeleteToDoItems,
    handleOpenEditToDoItems,
    handleClosEditToDoItems,
    dataToDoItem,
    value,
    sortToDoItem,
    valueSort,
    detail,
    onToDoItem,
  } = props;
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
        {/* {valueSort == undefined ? (
          <List className={classes.list} data-cy="todo-item">
            {detail?.map((item) => {
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
        ) :
         (
           */}
          <List  data-cy="todo-item"
            style={{ width: "100%", textAlign: "center", margin: "0 auto" }}
          >
            {detail?.map((item) => {
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
        {/* )} */}
      </Grid>

      <DialogEditToDoItem
        onToDoItem={onToDoItem}
        open={openEditToDoItems}
        dataToDoItem={dataToDoItem}
        onClose={handleClosEditToDoItems}
        detail={detail}
        // getTodoItemList={getTodoItemList}
      />
    </Container>
  );
};
export default ItemList;
