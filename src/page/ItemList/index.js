import React, { useState, useEffect } from "react";

import DeleteIcon from '@mui/icons-material/Delete';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import CreateIcon from '@mui/icons-material/Create';

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
import DeleteListItem from "../../component/dialog/deleteListItem";

import "../../assets/css/style.css";

const ItemList = (props) => {
  const {
    list,
    lempar,
    checkToDo,
    setCheckToDo,
    setOpenAddTodoItems,
    openAddTodoItems,
    handleCloseAddTodoItems,
    handleOpenAddTodoItems,
    open,
    selectedValue,
    onClose,
    setList,
    onRemove,
    deleteTitleList,
    handleDeleteList,
    item, toDoItemList
  } = props;
  const [checked, setChecked] = useState([1]);
  // const [todoItem, setTodoItem] = useState(checkToDo?.todo_items);
  const [todoItem, setTodoItem] = useState(toDoItemList);

  const [listDataItem, setListDataItem] = useState({
    activity_group_id: checked.activity_group_id,
    id: checked.id,
    is_active: checked.is_active,
    priority: checked.priority,
    title: checked.title,
  });
  // https://todo.api.devcode.gethired.id/activity-groups/23752388
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

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <Container style={{ width: "100%" }}>
      {/* <AppBar /> */}
      <Grid
        style={{
          margin: "0 auto",
          textAlign: "center",
          padding: "10px 0px",
          // backgroundColor: "green",
          width: "90%",
        }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <List sx={{ width: "100%", maxWidth: "90%" }}>
          {todoItem?.map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                sx={{ display: "list-item" }}
                key={value.id}
                style={{
                  margin: "20px 0",
                  backgroundColor: "#fff",
                  borderRadius: "7px",
                }}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <DeleteIcon
                      onClick={(id) => handleDeleteList(item)}
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
                      sx={{ fontSize: 10, color: "red", margin: "0 10px 0 0" }}
                    />
                  </IconButton>
                  <ListItemText
                    style={{
                      maxWidth: value.title.length + 25,
                      textDecoration: line(value.id),
                    }}
                    id={labelId}
                    // primary={value.title}
                    className={isChecked(value)}
                  >
                    {value.title}
                  </ListItemText>

                  <IconButton edge="end" aria-label="comments">
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
        <DeleteListItem
          selectedValue={selectedValue}
          lempar={lempar}
          open={open}
          onClose={onClose}
          list={list}
          setList={setList}
          onRemove={onRemove}
          deleteTitleList={deleteTitleList}
        />
      </Grid>
    </Container>
  );
};
export default ItemList;