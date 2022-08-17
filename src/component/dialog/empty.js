import React, { useState } from "react";
import { Container, Divider, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import "../../assets/css/style.css";


function EmptyDialog(props) {
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
    DATA TIDAK ADA
    </Dialog>
  );
}


export default EmptyDialog;
