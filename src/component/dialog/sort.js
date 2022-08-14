import React, { useState } from "react";
import { Container, Divider, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import "../../assets/css/style.css";


function SortDialog(props) {
  const { onClose, selectedValue, open, sorts } = props;
  // const [open, setOpen] = useState(false);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>
        {sorts.map((item) => (
          <div style={{ padding: "5px 0" }}>
            <ListItem
              button
              onClick={() => handleListItemClick(item.title)}
              key={item.title}
            >
              <ListItemAvatar>{item.icon}</ListItemAvatar>
              <ListItemText sx={{ fontSize: "14px" }}>{item.title}</ListItemText>
            </ListItem>
            <Divider />
          </div>
        ))}
        {/* <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem> */}
      </List>
    </Dialog>
  );
}


export default SortDialog;
