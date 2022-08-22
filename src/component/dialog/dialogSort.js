import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Dialog,
} from "@mui/material";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import SortIcon from "@mui/icons-material/Sort";
import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";

import "../../assets/css/style.css";
// import { sorts } from "../data/sorts";

function DialogSort(props) {
  const {
    onClose,
    selectedValue,
    open,
    // sorts,
    setValueSort,
  } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
    setValueSort(value);
  };

  // const handleChangeTitle = (event) => {
  //   setTitleDetail(event.target.value);
  // };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }} data-cy="sort-parent">
        {/* {sorts.map((item) => ( */}
        <div style={{ padding: "5px 0" }}>
          <ListItem
            button
            data-cy="sort-latest"
            onClick={() => handleListItemClick()}
          >
            <ListItemAvatar>
              {" "}
              <SortIcon
                style={{
                  fontSize: "16px",
                  color: "#16ABF8",
                }}
              />
              <NorthIcon
                style={{
                  fontSize: "16px",
                  color: "#16ABF8",
                }}
              />
            </ListItemAvatar>
            <ListItemText sx={{ fontSize: "14px" }}>Terbaru</ListItemText>
          </ListItem>
          <Divider />
          <ListItem
            button
            data-cy="sort-oldest"
            onClick={() => handleListItemClick()}
          >
            <ListItemAvatar>
              {" "}
              <SortIcon
                style={{
                  fontSize: "16px",
                  color: "#16ABF8",
                }}
              />
              <SouthIcon
                style={{
                  fontSize: "16px",
                  color: "#16ABF8",
                }}
              />
            </ListItemAvatar>
            <ListItemText sx={{ fontSize: "14px" }}>Terlama</ListItemText>
          </ListItem>
          <Divider />
          <ListItem
            button
            data-cy="sort-az"
            onClick={() => handleListItemClick()}
          >
            <ListItemAvatar>
              {" "}
              <NorthIcon
                style={{
                  fontSize: "16px",
                  color: "#16ABF8",
                }}
              />
              <SortByAlphaIcon
                style={{
                  fontSize: "16px",
                  color: "#16ABF8",
                }}
              />
            </ListItemAvatar>
            <ListItemText sx={{ fontSize: "14px" }}>A - Z</ListItemText>
          </ListItem>
          <Divider />
          <ListItem
            button
            data-cy="sort za"
            onClick={() => handleListItemClick()}
          >
            <ListItemAvatar>
              {" "}
              <SouthIcon
                style={{
                  fontSize: "16px",
                  color: "#16ABF8",
                }}
              />
              <SortByAlphaIcon
                style={{
                  fontSize: "16px",
                  color: "#16ABF8",
                }}
              />
            </ListItemAvatar>
            <ListItemText sx={{ fontSize: "14px" }}>Z - A</ListItemText>
          </ListItem>
          <Divider />
          <ListItem
            button
            data-cy="sort-unfinished"
            onClick={() => handleListItemClick()}
          >
            <ListItemAvatar>
              {" "}
              <SwapVertRoundedIcon
                style={{
                  fontSize: "24px",
                  color: "#16ABF8",
                }}
              />
            </ListItemAvatar>
            <ListItemText sx={{ fontSize: "14px" }}>Belum Selesai</ListItemText>
          </ListItem>
          <Divider />
        </div>
        {/* ))} */}
      </List>
    </Dialog>
  );
}

export default DialogSort;
