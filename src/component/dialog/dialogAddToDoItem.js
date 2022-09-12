import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Divider, IconButton, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import MenuItem from "@mui/material/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import "../../assets/css/style.css";
import { priorities } from "../data/priorities";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Close } from "@material-ui/icons";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#16ABF8",
    },
  },
});

const styles = {
  dialogPaper: {
    width: "500px",
    height: "400px",
  },
};

function DialogAddToDoItem(props) {
  const {
    detailId,
    onToDoItem,
    onClick,
    // getTodoItemList,
    onClose,
    open,
    classes,
    dataToDoItem,
    setOnToDoItem,getDetail
  } = props;




  const [kirim, setKirim] = useState({
    _comment : "very-high"
  });

  useEffect(() => {
    setKirim({
      activity_group_id: detailId,

      title: dataToDoItem ? dataToDoItem?.title : "",

    });
  }, [dataToDoItem]);

  const switchSend = () => {
    if (dataToDoItem) {
      return `/todo-items/${dataToDoItem.id}`;
    } else {
      return "/todo-items";
    }
  };
  const switchMethod = () => {
    if (dataToDoItem) {
      return "PATCH";
    } else {
      return "POST";
    }
  };
  const addData = (e) => {

    e.preventDefault();
    // try {
    const response = fetch(process.env.REACT_APP_URL + "/todo-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( kirim),
      // });
    });
    onToDoItem();
    onClose();
    getDetail()
    // getTodoItemList()
    setKirim({
      title: "",
      _comment: "",
    });
  };

  // onToDoItem();
  // onClick();
  // getTodoItemList();
  // onClose();
  // window.location.reload();
  // } catch (err) {
  //   console.log(err.message);

  const handleChange = (event) => {

    event.preventDefault();
    setKirim({
      ...kirim,
      [event.target.name]: event.target.value,
    });

  
  };
  // const handleCloseAddDialog= () => {
  //   onClose()
  // }
  return (
    <div  data-cy="modal-add">
    <ThemeProvider theme={theme} >
      <Dialog 
        // data-cy="modal-add"
        onClose={onClose}
        open={open}  data-cy="modal-add"
        classes={{ paper: classes.dialogPaper }}
      >
        {/* <DialogTitle> */}
        <div class="modal-header">
          <h3 data-cy="modal-add-title" className="dialog-title" style={{width:"90%", float:"left"}}>
            Tambah List Item
          </h3>
          {/* <IconButton
          > */}
            {" "}
            <Close             className="button-close"
            data-cy="modal-add-close-button"
            onClick={onClose}
            style={{width:"10%", float:"left"}}
 />
 </div>
          {/* </IconButton> */}
        {/* </DialogTitle> */}
        <Divider />
        <div style={{ padding: "20px" }} class="modal-body">
          <Typography
            data-cy="modal-add-name-title"
            style={{ fontWeight: 600, fontSize: "12px", lineHeight: "18px" }}
          >
            NAMA LIST ITEM
          </Typography>
          <TextField
            id="id"
            value={kirim?.title}
            data-cy="modal-add-name-input"
            name="title"
            onChange={handleChange}
            // onChange={(e) => setValueKirim(e.target.value)}
            label="Tambahkan nama list item"
            variant="outlined"
            style={{ margin: "10px 0", width: "100%" }}
          />
          <Typography
            style={{
              fontWeight: 600,
              fontSize: "12px",
              margin: "10px 0",
              lineHeight: "18px",
            }}
            data-cy="modal-add-priority-title"
          >
            PRIORITY
          </Typography>
          <TextField
            id="id"
            select
            label="Pilih Priority"
            name="_comment"
            defaultValue="very-high"
            value={kirim._comment}
            data-cy="modal-add-priority-dropdown"
            onChange={handleChange}
          >
            {priorities.map((option) => (
              <MenuItem key={option.value} value={option.value} data-cy="modal-add-priority-item">
                {option.circle}
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <Divider />
        <Grid
          container
          sx={{ padding: "0 0 20px 0 " }}
          justifyContent="flex-end" class="pb-4 modal-footer"
        >
          <Button
            data-cy="modal-add-save-button"
            onClick={addData}
            variant="contained"
            color="secondary"
            sx={{
              width: "100px",
              borderRadius: "15px",
              color: "white",
              float: "right",
              margin: "20px 20px 0 20px",
            }}
          >
            Simpan
          </Button>
        </Grid>
      </Dialog>{" "}
      <div onClose={onClose} ></div>

    </ThemeProvider>
    </div>
  );
}

export default withStyles(styles)(DialogAddToDoItem);
