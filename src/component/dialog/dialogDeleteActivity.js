import React, { useState } from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import "../../assets/css/style.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@mui/styles";

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
function DialogDeleteActivity(props) {
  const {
    activityItemDelete,
    deleteTitleList,
    onClose,
    selectedValue,
    open,
    clickActivity,
    classes,
  } = props;
  // const classes = useStyles();

  const handleClose = () => {
    onClose();
    // onToDoItem();
    // onClick();
    // setOnClick(true);
  };

  return (
    <ThemeProvider theme={theme} data-cy="modal-delete-cancel-button">
      <Dialog
        data-cy="modal-delete"
        onClose={onClose}
        open={open}
        classes={{ paper: classes.dialogPaper }}
      >
        <div style={{ padding: "20px", margin: "0 auto", textAlign: "center" }}>
          <WarningAmberIcon data-cy="modal-delete-icon"
            color="danger"
            sx={{ color: "#ED4C5C", fontSize: "50px", marginBottom: "30px" }}
          />
          <Typography data-cy="modal-delete-title"
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
            " {deleteTitleList} " ?
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
              // data-cy="modal-batal-hapus"

              // data-cy="modal-batal-delete"
              onClick={onClose}
              data-cy="modal-delete-cancel-button"
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
              data-cy="modal-delete-confirm-button"
              onClick={() => activityItemDelete(clickActivity)}
            >
              Hapus
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </ThemeProvider>
  );
}

export default withStyles(styles)(DialogDeleteActivity);
