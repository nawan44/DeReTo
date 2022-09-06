import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Divider, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import MenuItem from "@mui/material/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import "../../assets/css/style.css";
import { priorities } from "../data/priorities";

import { createTheme, ThemeProvider } from "@mui/material/styles";
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

function DialogEditToDoItem(props) {
  const {
    detailId,
    onToDoItem,
    onClick,
    // getTodoItemList,
    onClose,
    open,
    classes,
    dataToDoItem,
    setOnToDoItem,
    getDetail,
    is_active,
    checked,
  } = props;

  const [kirim, setKirim] = useState(
    {
    // title: "",
    // is_active: 1,
    // priority: "",
  }
  );

  useEffect(() => {
    setKirim({   ...kirim,
      title: dataToDoItem ? dataToDoItem.title : "",
      is_active : is_active ? is_active : 1,
      priority: dataToDoItem ? dataToDoItem.priority : "",
      // _comment: dataToDoItem ? dataToDoItem?.priority : "",

    });
  }, [dataToDoItem]);

  const editData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        process.env.REACT_APP_URL + `/todo-items/${checked.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: kirim.title,
            priority: kirim.priority,
            is_active: kirim.is_active,

          }),
          // });
        }
      );
      let res = await response.json();

      // onToDoItem()
      onClose();
      getDetail();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setKirim({
      ...kirim,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        data-cy="modal-edit-todo"
        onClose={onClose}
        open={open}
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle>Edit Item</DialogTitle>
        <Divider />
        <div style={{ padding: "20px" }}>
          <Typography
            style={{ fontWeight: 600, fontSize: "12px", lineHeight: "18px" }}
          >
            NAMA LIST ITEM
          </Typography>
          <TextField
            id="id"
            value={  kirim.title}
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
          >
            PRIORITY
          </Typography>
          <TextField
            id="id"
            select
            label="Pilih Priority"
            name="priority"
            value={ kirim.priority}
            onChange={handleChange}
            style={{ margin: "10px 0 10px 0", width: "100%" }}
          >
            {priorities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
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
          justifyContent="flex-end"
        >
          <Button
            data-cy="modal-edit-todo"
            onClick={editData}
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
            Edit
          </Button>
        </Grid>
      </Dialog>{" "}
    </ThemeProvider>
  );
}

export default withStyles(styles)(DialogEditToDoItem);
