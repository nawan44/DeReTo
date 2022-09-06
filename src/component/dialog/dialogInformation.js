import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { withStyles } from "@material-ui/core/styles";
import "../../assets/css/style.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#16ABF8",
    },
  },
});

const styles = {
  dialogPaper: {
    width: "200px",
    height: "35px", fontSize:"13px", color:"green"
  },
  dialogTitle: {
   fontSize:"15px", color:"green"
  },
};

function ModalInformation(props) {
  const {
    onRemove,
    onClose,
    open,
    classes,

  } = props;

  return (
    <ThemeProvider theme={theme}>
      <Dialog
data-cy="modal-information"        onClose={onClose}
        open={open}
        classes={{ paper: classes.dialogPaper }}
      >
        <Typography  sx={{padding:"5px", fontSize:"13px"}}      classes={{ paper: classes.dialogTitle }} ><CheckCircleIcon style={{margin: "0 10px 0 0", }}/>Berhasil Di Hapus </Typography>
      
      </Dialog>{" "}
      <div onClose={onClose} data-cy="modal-information"></div>

    </ThemeProvider>
  );
}

export default withStyles(styles)(ModalInformation);
