import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Dialog,
} from "@mui/material";

import "../../assets/css/style.css";
import { sorts } from "../data/sorts";

function DialogSort(props) {
  const { onClose, selectedValue, open, 
    // sorts, 
    setValueSort } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
    setValueSort(value);
    // console.log(value);
  };

  // const handleChangeTitle = (event) => {
  //   setTitleDetail(event.target.value);
  // };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>
        {sorts.map((item) => (
          <div style={{ padding: "5px 0" }}>
            <ListItem
              button
              onClick={() => handleListItemClick(item.id)}
              key={item.id}
            >
              <ListItemAvatar>{item.icon}</ListItemAvatar>
              <ListItemText sx={{ fontSize: "14px" }}>
                {item.title}
              </ListItemText>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Dialog>
  );
}

export default DialogSort;
