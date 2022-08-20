import React, { useState } from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { withStyles } from "@material-ui/core/styles";
import "../../assets/css/style.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { priorities } from "../data/priorities";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f4f4f4",
    },
    secondary: {
      main: "#ED4C5C",
    },
  },
});

const styles = {
  dialogPaper: {
    width: "350px",
    height: "270px",
    borderRadius: "5px",
  },
};

function DialogDeleteToDoItem(props) {
  const {
    todoItemDelete,
    deleteTitleList,
    onClose,
    selectedValue,
    open,
    clickActivity,
    dataToDoItem,
    // onToDoItem,
  } = props;

  const handleClose = () => {
    onClose(selectedValue);
    // onToDoItem();
  };

  return (
    <ThemeProvider theme={theme}>

        <Dialog
        
        data-cy="modal-delete-cancel-button"
          // data-cy="activity-item-delete-button"
          // data-cy="modal-delete-cancel-button"
          // data-cy="modal-delete-cancel-button"
          onClose={handleClose}
          open={open}
        >
      <div
            style={{ padding: "20px", margin: "0 auto", textAlign: "center" }}
          >
            <WarningAmberIcon
              color="danger"
              sx={{ color: "#ED4C5C", fontSize: "50px", marginBottom: "30px" }}
            />
            <Typography
              style={{ fontWeight: 400, fontSize: "14px", lineHeight: "18px" }}
            >
              Apakah anda yakin menghapus List Item
            </Typography>

            <Typography
              style={{
                fontWeight: 800,
                fontSize: "12px",
                margin: "10px 0",
                lineHeight: "18px",
              }}
            >
              " {dataToDoItem ? dataToDoItem : deleteTitleList} " ?
            </Typography>
          </div>
     
          <Grid
            container
            rowSpacing={1}
            style={{ width: "70%", textAlign: "center", margin: "0 auto" }}
          >
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "100px",
                  borderRadius: "15px",
                  color: "#4A4A4A",
                  float: "right",
                  margin: "20px 20px 0 20px",
                }}
                // data-cy="modal-delete-cancel-button"
                // data-cy="modal-delete-confirm-button  "
                // data-cy="modal-batal-delete"
                // data-cy="modal-delete-cancel-button"
                onClick={onClose}
                data-cy="modal-delete"

                // data-cy="modal-delete-cancel-button"
              >
                Batal
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  width: "100px",
                  borderRadius: "15px",
                  color: "white",
                  float: "right",
                  margin: "20px 20px 0 20px",
                }}
                data-cy="todo-item-delete-button"
                onClick={() => todoItemDelete(clickActivity)}
              >
                Hapus
              </Button>
            </Grid>
          </Grid>
        </Dialog>
        </ThemeProvider>

  );
}

export default withStyles(styles)(DialogDeleteToDoItem);